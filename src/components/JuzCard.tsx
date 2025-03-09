import React from 'react';
import { Link } from 'react-router-dom';
import { JuzSummary } from '../data/Quran';
import { BookOpen } from 'lucide-react';
import ornament1 from '../assets/o1.jpg';

interface JuzCardProps {
  juz: JuzSummary;
}

const JuzCard: React.FC<JuzCardProps> = ({ juz }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 card-pattern">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `url(${ornament1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="bg-emerald-800 py-3 px-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white font-scheherazade">Juz {juz.id}: {juz.title}</h3>
        </div>
        <p className="text-amber-300 font-['Amiri'] text-right text-xl mt-1">{juz.arabicTitle}</p>
      </div>
      
      <div className="p-5 bg-white bg-opacity-90 border-t-4 border-amber-300">
        <p className="text-gray-700 mb-4 line-clamp-3 font-scheherazade">{juz.overallSummary}</p>
        <p className="text-sm text-gray-500 mb-4 font-scheherazade">{juz.verses}</p>
        
        <Link 
          to={`/quran-summary/${juz.id}`}
          className="inline-flex items-center px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition-colors duration-200 font-scheherazade"
        >
          <BookOpen className="h-4 w-4 mr-2" />
          Read More
        </Link>
      </div>
    </div>
  );
};

export default JuzCard;