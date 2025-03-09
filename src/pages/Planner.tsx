import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import TahajjudPlanner from '../components/planner/TahajjudPlanner';
import QuranPlanner from '../components/planner/QuranPlanner';
import HadithPlanner from '../components/planner/HadithPlanner';
import { Moon, Book, Scroll } from 'lucide-react';
import ramadanPattern from '../assets/r2.png';
import overlay2 from '../assets/o2.jpg';

interface Dua {
  id: string;
  purpose: string;
  duaText: string;
  arabicText?: string;
}

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

const Planner: React.FC = () => {
  const [timeOfDay, setTimeOfDay] = useState<'sunrise' | 'day' | 'evening' | 'night' | 'midnight'>('day');
  const [duas, setDuas] = useState<Dua[]>([]);
  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [hadiths, setHadiths] = useState<Hadith[]>([]);

  // Update time of day
  useEffect(() => {
    const updateTimeOfDay = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 7) {
        setTimeOfDay('sunrise');
      } else if (hour >= 7 && hour < 17) {
        setTimeOfDay('day');
      } else if (hour >= 17 && hour < 20) {
        setTimeOfDay('evening');
      } else if (hour >= 20 && hour < 24) {
        setTimeOfDay('night');
      } else {
        setTimeOfDay('midnight');
      }
    };

    updateTimeOfDay();
    const interval = setInterval(updateTimeOfDay, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // Load all data from localStorage on component mount
  useEffect(() => {
    try {
      const savedDuas = localStorage.getItem('tahajjudDuas');
      const savedAyahs = localStorage.getItem('quranAyahs');
      const savedHadiths = localStorage.getItem('hadiths');

      if (savedDuas) setDuas(JSON.parse(savedDuas));
      if (savedAyahs) setAyahs(JSON.parse(savedAyahs));
      if (savedHadiths) setHadiths(JSON.parse(savedHadiths));
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
    }
  }, []);

  // Save all data to localStorage whenever they change
  const updateDuas = (newDuas: Dua[]) => {
    setDuas(newDuas);
    localStorage.setItem('tahajjudDuas', JSON.stringify(newDuas));
  };

  const updateAyahs = (newAyahs: Ayah[]) => {
    setAyahs(newAyahs);
    localStorage.setItem('quranAyahs', JSON.stringify(newAyahs));
  };

  const updateHadiths = (newHadiths: Hadith[]) => {
    setHadiths(newHadiths);
    localStorage.setItem('hadiths', JSON.stringify(newHadiths));
  };

  const getBgColor = () => {
    switch (timeOfDay) {
      case 'sunrise':
        return 'from-orange-100 via-yellow-50 to-blue-100';
      case 'day':
        return 'from-blue-200 via-yellow-50 to-blue-100';
      case 'evening':
        return 'from-orange-200 via-red-100 to-purple-200';
      case 'night':
      case 'midnight':
        return 'from-blue-950 via-blue-900 to-blue-950';
    }
  };

  const getCelestialObject = () => {
    switch (timeOfDay) {
      case 'sunrise':
        return (
          <div 
            className="absolute w-20 h-20 rounded-full bg-orange-400 shadow-[0_0_50px_#FD8D14]"
            style={{
              left: '15%',
              top: '15%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        );
      case 'day':
        return (
          <div 
            className="absolute w-20 h-20 rounded-full bg-yellow-100 shadow-[0_0_50px_#FFF5C2]"
            style={{
              right: '15%',
              top: '15%',
              transform: 'translate(50%, -50%)',
            }}
          />
        );
      case 'evening':
        return (
          <div 
            className="absolute w-20 h-20 rounded-full bg-orange-400 shadow-[0_0_50px_#FD8D14]"
            style={{
              right: '15%',
              top: '15%',
              transform: 'translate(50%, -50%)',
            }}
          />
        );
      case 'night':
      case 'midnight':
        return (
          <div 
            className="absolute w-16 h-16 rounded-full bg-gray-100 shadow-[0_0_40px_#FFFFFF]"
            style={{
              right: '15%',
              top: '15%',
              transform: 'translate(50%, -50%)',
            }}
          />
        );
    }
  };

  const getTextColor = () => {
    switch (timeOfDay) {
      case 'sunrise':
        return 'text-orange-900';
      case 'day':
        return 'text-emerald-900';
      case 'evening':
        return 'text-orange-900';
      case 'night':
      case 'midnight':
        return 'text-white';
    }
  };

  const getSubTextColor = () => {
    switch (timeOfDay) {
      case 'sunrise':
        return 'text-orange-800';
      case 'day':
        return 'text-emerald-800';
      case 'evening':
        return 'text-orange-800';
      case 'night':
      case 'midnight':
        return 'text-gray-200';
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden bg-gradient-to-b ${getBgColor()} transition-colors duration-1000`}>
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${overlay2})`,
          backgroundSize: '200px',
          backgroundRepeat: 'repeat',
        }} />
      </div>

      {/* Celestial Object */}
      {getCelestialObject()}

      {/* Stars (only visible at night and midnight) */}
      {(timeOfDay === 'night' || timeOfDay === 'midnight') && (
        <div className="absolute inset-0">
          {[...Array(150)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 py-12 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-4 mb-6">
              <img src={ramadanPattern} alt="Islamic Pattern" className="w-16 h-16 opacity-80" />
              <h1 className={`text-5xl font-bold ${getTextColor()} font-['Amiri'] tracking-wide drop-shadow-lg`}>
                Islamic Study Planner
              </h1>
              <img src={ramadanPattern} alt="Islamic Pattern" className="w-16 h-16 opacity-80 transform rotate-180" />
            </div>
            <p className={`${getSubTextColor()} max-w-2xl mx-auto text-lg leading-relaxed drop-shadow-md`}>
              Organize your spiritual journey by saving and managing your favorite duas, 
              Quran verses, and hadiths in one place.
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="tahajjud" className="w-full">
            <TabsList className={`flex justify-center mb-8 bg-white/20 backdrop-blur-sm rounded-full p-1 ${timeOfDay === 'night' || timeOfDay === 'midnight' ? 'border border-white/20' : ''}`}>
              <TabsTrigger 
                value="tahajjud" 
                className={`flex items-center gap-2 data-[state=active]:bg-white/30 rounded-full px-6 py-2 transition-all duration-300 ${getTextColor()}`}
              >
                <Moon className="h-5 w-5" />
                <span className="font-medium">Tahajjud Duas</span>
                <span className="bg-white/20 rounded-full px-2 py-0.5 text-sm">
                  {duas.length}
                </span>
              </TabsTrigger>
              <TabsTrigger 
                value="quran" 
                className={`flex items-center gap-2 data-[state=active]:bg-white/30 rounded-full px-6 py-2 transition-all duration-300 ${getTextColor()}`}
              >
                <Book className="h-5 w-5" />
                <span className="font-medium">Quran Verses</span>
                <span className="bg-white/20 rounded-full px-2 py-0.5 text-sm">
                  {ayahs.length}
                </span>
              </TabsTrigger>
              <TabsTrigger 
                value="hadith" 
                className={`flex items-center gap-2 data-[state=active]:bg-white/30 rounded-full px-6 py-2 transition-all duration-300 ${getTextColor()}`}
              >
                <Scroll className="h-5 w-5" />
                <span className="font-medium">Hadiths</span>
                <span className="bg-white/20 rounded-full px-2 py-0.5 text-sm">
                  {hadiths.length}
                </span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tahajjud" className="mt-8">
              <TahajjudPlanner duas={duas} onDuasChange={updateDuas} />
            </TabsContent>

            <TabsContent value="quran" className="mt-8">
              <QuranPlanner ayahs={ayahs} onAyahsChange={updateAyahs} />
            </TabsContent>

            <TabsContent value="hadith" className="mt-8">
              <HadithPlanner hadiths={hadiths} onHadithsChange={updateHadiths} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Planner;
