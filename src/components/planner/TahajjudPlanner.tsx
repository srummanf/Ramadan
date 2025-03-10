import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Download, Upload, Pencil, Trash2, Shuffle } from 'lucide-react';
import { useToast } from '../ui/use-toast';
import ornament1 from '../../assets/o1.jpg';

interface Dua {
  id: string;
  purpose: string;
  duaText: string;
  arabicText?: string;
}

interface TahajjudPlannerProps {
  duas: Dua[];
  onDuasChange: (newDuas: Dua[]) => void;
}

// DuaCard Component
const DuaCard: React.FC<{ dua: Dua }> = ({ dua }) => {
  return (
    <div className="relative bg-gradient-to-br from-emerald-50 to-amber-50 rounded-lg overflow-hidden shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `url(${ornament1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-emerald-800">
              {dua.purpose}
            </h3>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="text-emerald-800">
            <p>{dua.duaText}</p>
          </div>
          
          {dua.arabicText && (
            <div className="text-right font-['Amiri'] text-2xl leading-loose text-emerald-900 py-2 border-t border-amber-100 pt-4">
              {dua.arabicText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TahajjudPlanner: React.FC<TahajjudPlannerProps> = ({ duas, onDuasChange }) => {
  const [editingDua, setEditingDua] = useState<Dua | null>(null);
  const [randomDuas, setRandomDuas] = useState<Dua[]>([]);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    purpose: '',
    duaText: '',
    arabicText: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingDua) {
      const updatedDuas = duas.map(dua => 
        dua.id === editingDua.id ? { ...formData, id: dua.id } : dua
      );
      onDuasChange(updatedDuas);
      setEditingDua(null);
      toast({
        title: "Dua Updated",
        description: "Your dua has been successfully updated.",
      });
    } else {
      const newDuas = [...duas, { ...formData, id: Date.now().toString() }];
      onDuasChange(newDuas);
      toast({
        title: "Dua Added",
        description: "Your dua has been successfully added.",
      });
    }
    setFormData({ purpose: '', duaText: '', arabicText: '' });
  };

  const handleEdit = (dua: Dua) => {
    setEditingDua(dua);
    setFormData(dua);
  };

  const handleDelete = (id: string) => {
    const newDuas = duas.filter(dua => dua.id !== id);
    onDuasChange(newDuas);
    toast({
      title: "Dua Deleted",
      description: "Your dua has been successfully deleted.",
      variant: "destructive",
    });
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Purpose', 'Dua Text', 'Arabic Text'],
      ...duas.map(dua => [
        dua.purpose,
        dua.duaText,
        dua.arabicText || ''
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tahajjud_duas.csv';
    a.click();
  };

  const importCSV = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        const rows = text.split('\n').slice(1); // Skip header row
        const importedDuas = rows.map(row => {
          const [purpose, duaText, arabicText] = row.split(',');
          return {
            id: Date.now().toString() + Math.random(),
            purpose,
            duaText,
            arabicText: arabicText || undefined
          };
        });
        onDuasChange([...duas, ...importedDuas]);
        toast({
          title: "Import Successful",
          description: `${importedDuas.length} duas have been imported.`,
        });
      };
      reader.readAsText(file);
    }
  };

  // Function to shuffle and get random duas
  const shuffleDuas = () => {
    const shuffled = [...duas].sort(() => Math.random() - 0.5);
    setRandomDuas(shuffled.slice(0, Math.min(10, duas.length)));
    toast({
      title: "Cards Shuffled",
      description: "Displaying random duas from your collection.",
    });
  };

  // Update random duas when duas change
  React.useEffect(() => {
    if (duas.length > 0) {
      shuffleDuas();
    }
  }, [duas]);

  return (
    <div className="space-y-12">
      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-amber-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-emerald-900 mb-2">
              Purpose
            </label>
            <Input
              value={formData.purpose}
              onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
              placeholder="E.g., For seeking guidance"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-900 mb-2">
              Arabic Text (Optional)
            </label>
            <Input
              value={formData.arabicText}
              onChange={(e) => setFormData({ ...formData, arabicText: e.target.value })}
              placeholder="Arabic text of the dua"
              className="font-['Amiri']"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-emerald-900 mb-2">
              Dua Text
            </label>
            <Textarea
              value={formData.duaText}
              onChange={(e) => setFormData({ ...formData, duaText: e.target.value })}
              placeholder="Enter the dua text or translation"
              required
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
            {editingDua ? 'Update Dua' : 'Add Dua'}
          </Button>
        </div>
      </form>

      {/* Import/Export Controls */}
      <div className="flex justify-end gap-4">
        <Button
          onClick={exportToCSV}
          variant="outline"
          className="flex items-center gap-2"
          disabled={duas.length === 0}
        >
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
        <div className="relative">
          <input
            type="file"
            accept=".csv"
            onChange={importCSV}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <Button
            variant="outline"
            className="flex items-center gap-2"
          >
            <Upload className="h-4 w-4" />
            Import CSV
          </Button>
        </div>
      </div>

      {/* Random Cards */}
      {duas.length > 0 && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-emerald-800">
              Random Duas
            </h2>
            <Button
              onClick={shuffleDuas}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Shuffle className="h-4 w-4" />
              Shuffle Cards
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {randomDuas.map((dua) => (
              <DuaCard key={`card-${dua.id}`} dua={dua} />
            ))}
          </div>
        </div>
      )}

      {/* Table */}
      {duas.length > 0 && (
        <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-amber-100 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Purpose</TableHead>
                <TableHead>Dua Text</TableHead>
                <TableHead>Arabic Text</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {duas.map((dua) => (
                <TableRow key={dua.id}>
                  <TableCell>{dua.purpose}</TableCell>
                  <TableCell>{dua.duaText}</TableCell>
                  <TableCell className="font-['Amiri'] text-lg">{dua.arabicText}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(dua)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(dua.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default TahajjudPlanner; 