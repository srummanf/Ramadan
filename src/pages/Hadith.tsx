import React from 'react';
import { hadiths } from '../data/Quran';
import HadithCard from '../components/HadithCard';
import { Filter } from 'lucide-react';

const Hadith: React.FC = () => {
  const [filter, setFilter] = React.useState<string>('all');
  
  const categories = ['all', ...new Set(hadiths.map(h => h.category))];
  
  const filteredHadiths = filter === 'all' 
    ? hadiths 
    : hadiths.filter(h => h.category === filter);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-emerald-900 mb-4 font-['Amiri']">
          Hadith Collection
        </h1>
        <p className="text-center text-emerald-700 mb-8 max-w-3xl mx-auto">
          Explore a collection of authentic Hadiths (sayings and actions of Prophet Muhammad ﷺ) 
          related to Ramadan, forgiveness, and virtues of good deeds.
        </p>
        
        {/* Filter */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center bg-white rounded-full shadow-md p-1">
            <Filter className="h-4 w-4 text-emerald-700 ml-3" />
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 mx-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === category 
                    ? 'bg-emerald-700 text-white' 
                    : 'text-emerald-700 hover:bg-emerald-50'
                }`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Hadith Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredHadiths.map(hadith => (
            <HadithCard key={hadith.id} hadith={hadith} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hadith;