import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Download, Upload, Pencil, Trash2, Shuffle } from 'lucide-react';
import { useToast } from '../ui/use-toast';

interface Hadith {
  id: string;
  bookName: string;
  hadithNumber: string;
  narrator: string;
  arabicText: string;
  englishText: string;
  reference: string;
  topic: string;
}

interface HadithPlannerProps {
  hadiths: Hadith[];
  onHadithsChange: (newHadiths: Hadith[]) => void;
}

// HadithCard Component
const HadithCard: React.FC<{ hadith: Hadith }> = ({ hadith }) => {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-lg overflow-hidden shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300">
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-emerald-800">
              {hadith.topic}
            </h3>
            <p className="text-sm text-emerald-600">
              {hadith.bookName} #{hadith.hadithNumber}
            </p>
          </div>
          <div className="text-sm text-emerald-700 italic">
            Narrated by: {hadith.narrator}
          </div>
        </div>
        
        <div className="text-right font-['Amiri'] text-2xl leading-loose text-emerald-900 py-2">
          {hadith.arabicText}
        </div>
        
        <div className="space-y-3 border-t border-amber-100 pt-4">
          <p className="text-emerald-800">
            {hadith.englishText}
          </p>
          <div className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-md">
            <p className="font-semibold">Reference:</p>
            <p>{hadith.reference}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HadithPlanner: React.FC<HadithPlannerProps> = ({ hadiths, onHadithsChange }) => {
  const [editingHadith, setEditingHadith] = useState<Hadith | null>(null);
  const [randomHadiths, setRandomHadiths] = useState<Hadith[]>([]);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    bookName: '',
    hadithNumber: '',
    narrator: '',
    arabicText: '',
    englishText: '',
    reference: '',
    topic: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingHadith) {
      const updatedHadiths = hadiths.map(hadith => 
        hadith.id === editingHadith.id ? { ...formData, id: hadith.id } : hadith
      );
      onHadithsChange(updatedHadiths);
      setEditingHadith(null);
      toast({
        title: "Hadith Updated",
        description: "Your hadith has been successfully updated.",
      });
    } else {
      const newHadiths = [...hadiths, { ...formData, id: Date.now().toString() }];
      onHadithsChange(newHadiths);
      toast({
        title: "Hadith Added",
        description: "Your hadith has been successfully added.",
      });
    }
    setFormData({
      bookName: '',
      hadithNumber: '',
      narrator: '',
      arabicText: '',
      englishText: '',
      reference: '',
      topic: '',
    });
  };

  const handleEdit = (hadith: Hadith) => {
    setEditingHadith(hadith);
    setFormData(hadith);
  };

  const handleDelete = (id: string) => {
    const newHadiths = hadiths.filter(hadith => hadith.id !== id);
    onHadithsChange(newHadiths);
    toast({
      title: "Hadith Deleted",
      description: "Your hadith has been successfully deleted.",
      variant: "destructive",
    });
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Book Name', 'Hadith Number', 'Narrator', 'Arabic Text', 'English Text', 'Reference', 'Topic'],
      ...hadiths.map(hadith => [
        hadith.bookName,
        hadith.hadithNumber,
        hadith.narrator,
        hadith.arabicText,
        hadith.englishText,
        hadith.reference,
        hadith.topic
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hadiths.csv';
    a.click();
  };

  const importCSV = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        const rows = text.split('\n').slice(1); // Skip header row
        const importedHadiths = rows.map(row => {
          const [bookName, hadithNumber, narrator, arabicText, englishText, reference, topic] = row.split(',');
          return {
            id: Date.now().toString() + Math.random(),
            bookName,
            hadithNumber,
            narrator,
            arabicText,
            englishText,
            reference,
            topic
          };
        });
        onHadithsChange([...hadiths, ...importedHadiths]);
        toast({
          title: "Import Successful",
          description: `${importedHadiths.length} hadiths have been imported.`,
        });
      };
      reader.readAsText(file);
    }
  };

  // Function to shuffle and get random hadiths
  const shuffleHadiths = () => {
    const shuffled = [...hadiths].sort(() => Math.random() - 0.5);
    setRandomHadiths(shuffled.slice(0, Math.min(10, hadiths.length)));
    toast({
      title: "Cards Shuffled",
      description: "Displaying random hadiths from your collection.",
    });
  };

  // Update random hadiths when hadiths change
  React.useEffect(() => {
    if (hadiths.length > 0) {
      shuffleHadiths();
    }
  }, [hadiths]);

  return (
    <div className="space-y-12">
      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-amber-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-emerald-900 mb-2">
              Book Name
            </label>
            <Input
              value={formData.bookName}
              onChange={(e) => setFormData({ ...formData, bookName: e.target.value })}
              placeholder="E.g., Sahih Al-Bukhari"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-900 mb-2">
              Hadith Number
            </label>
            <Input
              value={formData.hadithNumber}
              onChange={(e) => setFormData({ ...formData, hadithNumber: e.target.value })}
              placeholder="E.g., 1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-900 mb-2">
              Narrator
            </label>
            <Input
              value={formData.narrator}
              onChange={(e) => setFormData({ ...formData, narrator: e.target.value })}
              placeholder="E.g., Abu Hurairah (RA)"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-900 mb-2">
              Topic
            </label>
            <Input
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              placeholder="E.g., Prayer"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-emerald-900 mb-2">
              Arabic Text
            </label>
            <Textarea
              value={formData.arabicText}
              onChange={(e) => setFormData({ ...formData, arabicText: e.target.value })}
              placeholder="Enter Arabic text"
              required
              className="font-['Amiri']"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-emerald-900 mb-2">
              English Translation
            </label>
            <Textarea
              value={formData.englishText}
              onChange={(e) => setFormData({ ...formData, englishText: e.target.value })}
              placeholder="Enter English translation"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-emerald-900 mb-2">
              Reference
            </label>
            <Input
              value={formData.reference}
              onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
              placeholder="E.g., Volume 1, Book 2, Hadith 34"
              required
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
            {editingHadith ? 'Update Hadith' : 'Add Hadith'}
          </Button>
        </div>
      </form>

      {/* Import/Export Controls */}
      <div className="flex justify-end gap-4">
        <Button
          onClick={exportToCSV}
          variant="outline"
          className="flex items-center gap-2"
          disabled={hadiths.length === 0}
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
      {hadiths.length > 0 && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-emerald-800">
              Random Hadiths
            </h2>
            <Button
              onClick={shuffleHadiths}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Shuffle className="h-4 w-4" />
              Shuffle Cards
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {randomHadiths.map((hadith) => (
              <HadithCard key={`card-${hadith.id}`} hadith={hadith} />
            ))}
          </div>
        </div>
      )}

      {/* Table */}
      {hadiths.length > 0 && (
        <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-amber-100 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Book & Number</TableHead>
                <TableHead>Narrator</TableHead>
                <TableHead>Arabic</TableHead>
                <TableHead>English</TableHead>
                <TableHead>Reference</TableHead>
                <TableHead>Topic</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hadiths.map((hadith) => (
                <TableRow key={hadith.id}>
                  <TableCell>
                    {hadith.bookName} #{hadith.hadithNumber}
                  </TableCell>
                  <TableCell>{hadith.narrator}</TableCell>
                  <TableCell className="font-['Amiri'] text-lg">{hadith.arabicText}</TableCell>
                  <TableCell>{hadith.englishText}</TableCell>
                  <TableCell>{hadith.reference}</TableCell>
                  <TableCell>{hadith.topic}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(hadith)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(hadith.id)}
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

export default HadithPlanner; 