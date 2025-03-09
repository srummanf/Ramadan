import React from 'react';
import { ramadanPrayers } from '../data/Quran';
import PrayerCard from '../components/PrayerCard';
import { BookOpen, Moon, HelpingHand as PrayingHands, Sparkles } from 'lucide-react';

const Prayers: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-emerald-900 mb-4 font-['Amiri']">
          Prayers in Ramadan
        </h1>
        <p className="text-center text-emerald-700 mb-12 max-w-3xl mx-auto font-scheherazade">
          Ramadan is a month of increased worship and spiritual devotion. Learn about the special prayers 
          and acts of worship that are emphasized during this blessed month.
        </p>
        
        {/* Prayer Types Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="flex flex-col items-center text-center p-4 bg-emerald-50 rounded-lg">
            <BookOpen className="h-12 w-12 text-emerald-700 mb-3" />
            <h3 className="text-lg font-semibold text-emerald-800 font-scheherazade">Quran Recitation</h3>
            <p className="text-sm text-emerald-600 mt-1 font-scheherazade">Connect with Allah's words</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 bg-emerald-50 rounded-lg">
            <Moon className="h-12 w-12 text-emerald-700 mb-3" />
            <h3 className="text-lg font-semibold text-emerald-800 font-scheherazade">Taraweeh Prayer</h3>
            <p className="text-sm text-emerald-600 mt-1 font-scheherazade">Special night prayers</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 bg-emerald-50 rounded-lg">
            <Sparkles className="h-12 w-12 text-emerald-700 mb-3" />
            <h3 className="text-lg font-semibold text-emerald-800 font-scheherazade">Tahajjud Prayer</h3>
            <p className="text-sm text-emerald-600 mt-1 font-scheherazade">Late night devotion</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 bg-emerald-50 rounded-lg">
            <PrayingHands className="h-12 w-12 text-emerald-700 mb-3" />
            <h3 className="text-lg font-semibold text-emerald-800 font-scheherazade">I'tikaf</h3>
            <p className="text-sm text-emerald-600 mt-1 font-scheherazade">Spiritual retreat</p>
          </div>
        </div>
        
        {/* Prayer Cards */}
        <div className="space-y-8">
          {ramadanPrayers.map(prayer => (
            <PrayerCard key={prayer.id} prayer={prayer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prayers;