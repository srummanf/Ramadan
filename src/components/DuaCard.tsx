import React from 'react';
import { Dua } from '../data/Quran';

interface DuaCardProps {
  dua: Dua;
}

const DuaCard: React.FC<DuaCardProps> = ({ dua }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 geometric-pattern">
      <div className="bg-emerald-800 py-3 px-4">
        <h3 className="text-xl font-semibold text-white font-scheherazade">{dua.title}</h3>
        <p className="text-amber-300 font-['Amiri'] text-right text-xl mt-1">{dua.arabicTitle}</p>
        <div className="mt-2 inline-block px-2 py-1 bg-emerald-900 rounded-full text-xs text-amber-200">
          {dua.occasion}
        </div>
      </div>
      
      <div className="p-5 bg-white bg-opacity-90 border-t-4 border-amber-300">
        <p className="text-right font-['Amiri'] text-xl mb-4 text-emerald-900 leading-relaxed">
          {dua.arabic}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-emerald-800 mb-1 font-scheherazade">Transliteration:</h4>
          <p className="text-gray-700 italic font-scheherazade">{dua.transliteration}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-emerald-800 mb-1 font-scheherazade">Translation:</h4>
          <p className="text-gray-700 font-scheherazade">{dua.translation}</p>
        </div>
        
        <div className="text-right text-sm text-gray-500 font-scheherazade">
          Source: {dua.reference}
        </div>
      </div>
    </div>
  );
};

export default DuaCard;