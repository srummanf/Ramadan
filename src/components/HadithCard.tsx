import React from 'react';
import { Hadith } from '../data/Quran';
import ornament1 from '../assets/o1.jpg';

interface HadithCardProps {
  hadith: Hadith;
}

const HadithCard: React.FC<HadithCardProps> = ({ hadith }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `url(${ornament1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="bg-emerald-800 py-3 px-4 flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white font-scheherazade">{hadith.category}</h3>
        <span className="text-amber-300 text-sm px-2 py-1 rounded-full bg-emerald-900">
          {hadith.source}{hadith.chapter ? `, ${hadith.chapter}` : ''}
        </span>
      </div>
      
      <div className="p-5 bg-white bg-opacity-90 border-t-4 border-amber-300">
        {hadith.arabicText && (
          <p className="text-right font-['Amiri'] text-xl mb-4 text-emerald-900 leading-relaxed">
            {hadith.arabicText}
          </p>
        )}
        <p className="text-gray-700 mb-3 font-scheherazade">{hadith.text}</p>
      </div>
    </div>
  );
};

export default HadithCard;