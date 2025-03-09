import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Download, Upload, Pencil, Trash2, Shuffle } from 'lucide-react';
import { useToast } from '../ui/use-toast';

interface Ayah {
  id: string;
  chapterNumber: string;
  chapterName: string;
  verseStart: string;
  verseEnd: string;
  arabicText: string;
  englishText: string;
  meaning: string;
  takeaway: string;
}

interface QuranPlannerProps {
  ayahs: Ayah[];
  onAyahsChange: (newAyahs: Ayah[]) => void;
}

// QuranCard Component
const QuranCard: React.FC<{ ayah: Ayah }> = ({ ayah }) => {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-lg overflow-hidden shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300">
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-emerald-800">
              Surah {ayah.chapterName}
            </h3>
            <p className="text-sm text-emerald-600">
              Chapter {ayah.chapterNumber}, Verse {ayah.verseStart}
              {ayah.verseEnd && ` - ${ayah.verseEnd}`}
            </p>
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-['Amiri'] text-lg">
            {ayah.chapterNumber}
          </div>
        </div>
        
        <div className="text-right font-['Amiri'] text-2xl leading-loose text-emerald-900 py-2">
          {ayah.arabicText}
        </div>
        
        <div className="space-y-3 border-t border-amber-100 pt-4">
          <p className="text-emerald-800 italic">
            {ayah.englishText}
          </p>
          <div className="text-sm text-emerald-700">
            <p className="font-semibold">Meaning:</p>
            <p>{ayah.meaning}</p>
          </div>
          {ayah.takeaway && (
            <div className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-md">
              <p className="font-semibold">Personal Reflection:</p>
              <p>{ayah.takeaway}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const QuranPlanner: React.FC<QuranPlannerProps> = ({ ayahs, onAyahsChange }) => {
  const [editingAyah, setEditingAyah] = useState<Ayah | null>(null);
  const [randomAyahs, setRandomAyahs] = useState<Ayah[]>([]);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    chapterNumber: '',
    chapterName: '',
    verseStart: '',
    verseEnd: '',
    arabicText: '',
    englishText: '',
    meaning: '',
    takeaway: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingAyah) {
      const updatedAyahs = ayahs.map(ayah => 
        ayah.id === editingAyah.id ? { ...formData, id: ayah.id } : ayah
      );
      onAyahsChange(updatedAyahs);
      setEditingAyah(null);
      toast({
        title: "Ayah Updated",
        description: "Your Quran verse has been successfully updated.",
      });
    } else {
      const newAyahs = [...ayahs, { ...formData, id: Date.now().toString() }];
      onAyahsChange(newAyahs);
      toast({
        title: "Ayah Added",
        description: "Your Quran verse has been successfully added.",
      });
    }
    setFormData({
      chapterNumber: '',
      chapterName: '',
      verseStart: '',
      verseEnd: '',
      arabicText: '',
      englishText: '',
      meaning: '',
      takeaway: '',
    });
  };

  const handleEdit = (ayah: Ayah) => {
    setEditingAyah(ayah);
    setFormData(ayah);
  };

  const handleDelete = (id: string) => {
    const newAyahs = ayahs.filter(ayah => ayah.id !== id);
    onAyahsChange(newAyahs);
    toast({
      title: "Ayah Deleted",
      description: "Your Quran verse has been successfully deleted.",
      variant: "destructive",
    });
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Chapter Number', 'Chapter Name', 'Verse Start', 'Verse End', 'Arabic Text', 'English Text', 'Meaning', 'Takeaway'],
      ...ayahs.map(ayah => [
        ayah.chapterNumber,
        ayah.chapterName,
        ayah.verseStart,
        ayah.verseEnd,
        ayah.arabicText,
        ayah.englishText,
        ayah.meaning,
        ayah.takeaway
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quran_verses.csv';
    a.click();
  };

  const importCSV = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        const rows = text.split('\n').slice(1); // Skip header row
        const importedAyahs = rows.map(row => {
          const [chapterNumber, chapterName, verseStart, verseEnd, arabicText, englishText, meaning, takeaway] = row.split(',');
          return {
            id: Date.now().toString() + Math.random(),
            chapterNumber,
            chapterName,
            verseStart,
            verseEnd,
            arabicText,
            englishText,
            meaning,
            takeaway
          };
        });
        onAyahsChange([...ayahs, ...importedAyahs]);
        toast({
          title: "Import Successful",
          description: `${importedAyahs.length} verses have been imported.`,
        });
      };
      reader.readAsText(file);
    }
  };

  // Function to shuffle and get random ayahs
  const shuffleAyahs = () => {
    const shuffled = [...ayahs].sort(() => Math.random() - 0.5);
    setRandomAyahs(shuffled.slice(0, Math.min(10, ayahs.length)));
    toast({
      title: "Cards Shuffled",
      description: "Displaying random verses from your collection.",
    });
  };

  // Update random ayahs when ayahs change
  React.useEffect(() => {
    if (ayahs.length > 0) {
      shuffleAyahs();
    }
  }, [ayahs]);

  return (
    <div className="space-y-12">
      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-amber-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-emerald-900 mb-2">
              Chapter Number
            </label>
            <Input
              value={formData.chapterNumber}
              onChange={(e) => setFormData({ ...formData, chapterNumber: e.target.value })}
              placeholder="E.g., 1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-900 mb-2">
              Chapter Name
            </label>
            <Input
              value={formData.chapterName}
              onChange={(e) => setFormData({ ...formData, chapterName: e.target.value })}
              placeholder="E.g., Al-Fatiha"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-900 mb-2">
              Verse Start
            </label>
            <Input
              value={formData.verseStart}
              onChange={(e) => setFormData({ ...formData, verseStart: e.target.value })}
              placeholder="E.g., 1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-900 mb-2">
              Verse End (Optional)
            </label>
            <Input
              value={formData.verseEnd}
              onChange={(e) => setFormData({ ...formData, verseEnd: e.target.value })}
              placeholder="E.g., 7"
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
              Meaning
            </label>
            <Textarea
              value={formData.meaning}
              onChange={(e) => setFormData({ ...formData, meaning: e.target.value })}
              placeholder="Enter the meaning or tafsir"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-emerald-900 mb-2">
              Personal Reflection (Optional)
            </label>
            <Textarea
              value={formData.takeaway}
              onChange={(e) => setFormData({ ...formData, takeaway: e.target.value })}
              placeholder="Enter your personal reflection or takeaway"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
            {editingAyah ? 'Update Verse' : 'Add Verse'}
          </Button>
        </div>
      </form>

      {/* Import/Export Controls */}
      <div className="flex justify-end gap-4">
        <Button
          onClick={exportToCSV}
          variant="outline"
          className="flex items-center gap-2"
          disabled={ayahs.length === 0}
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
      {ayahs.length > 0 && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-emerald-800">
              Random Verses
            </h2>
            <Button
              onClick={shuffleAyahs}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Shuffle className="h-4 w-4" />
              Shuffle Cards
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {randomAyahs.map((ayah) => (
              <QuranCard key={`card-${ayah.id}`} ayah={ayah} />
            ))}
          </div>
        </div>
      )}

      {/* Table */}
      {ayahs.length > 0 && (
        <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-amber-100 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Chapter</TableHead>
                <TableHead>Verses</TableHead>
                <TableHead>Arabic</TableHead>
                <TableHead>English</TableHead>
                <TableHead>Meaning</TableHead>
                <TableHead>Takeaway</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ayahs.map((ayah) => (
                <TableRow key={ayah.id}>
                  <TableCell>
                    {ayah.chapterNumber} - {ayah.chapterName}
                  </TableCell>
                  <TableCell>
                    {ayah.verseStart}{ayah.verseEnd ? `-${ayah.verseEnd}` : ''}
                  </TableCell>
                  <TableCell className="font-['Amiri'] text-lg">{ayah.arabicText}</TableCell>
                  <TableCell>{ayah.englishText}</TableCell>
                  <TableCell>{ayah.meaning}</TableCell>
                  <TableCell>{ayah.takeaway}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(ayah)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(ayah.id)}
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

export default QuranPlanner; 