import React, { useState } from 'react';
import { ramadanDuas } from '../data/Quran';
import DuaCard from '../components/DuaCard';
import { Search, Filter } from 'lucide-react';

const Duas: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  
  const occasions = ['all', ...new Set(ramadanDuas.map(dua => dua.occasion))];
  
  const filteredDuas = ramadanDuas
    .filter(dua => 
      dua.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dua.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dua.occasion.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(dua => filter === 'all' || dua.occasion === filter);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-emerald-900 mb-4 font-['Amiri']">
          Important Duas for Ramadan
        </h1>
        <p className="text-center text-emerald-700 mb-8 max-w-3xl mx-auto font-scheherazade">
          A collection of important supplications (duas) that are especially beneficial during the blessed month of Ramadan.
          Memorize and recite these duas to maximize your spiritual rewards.
        </p>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search duas..."
              className="w-full px-4 py-3 pl-12 rounded-full border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-500 h-5 w-5" />
          </div>
          
          <div className="inline-flex items-center bg-white rounded-full shadow-md p-1">
            <Filter className="h-4 w-4 text-emerald-700 ml-3" />
            <div className="flex flex-wrap justify-center">
              {occasions.map(occasion => (
                <button
                  key={occasion}
                  className={`px-3 py-1 m-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                    filter === occasion 
                      ? 'bg-emerald-700 text-white' 
                      : 'text-emerald-700 hover:bg-emerald-50'
                  }`}
                  onClick={() => setFilter(occasion)}
                >
                  {occasion === 'all' ? 'All Occasions' : occasion}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Dua Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredDuas.map(dua => (
            <DuaCard key={dua.id} dua={dua} />
          ))}
        </div>
        
        {filteredDuas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 font-scheherazade">No duas found matching your search criteria</p>
            <button 
              className="mt-4 px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 font-scheherazade"
              onClick={() => {
                setSearchTerm('');
                setFilter('all');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Duas;