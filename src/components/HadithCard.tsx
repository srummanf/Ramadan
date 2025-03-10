import React from "react";
import { Hadith } from "../data/Quran";
import ornament1 from "../assets/o1.jpg";

interface HadithCardProps {
  hadith: Hadith;
}

const HadithCard: React.FC<HadithCardProps> = ({ hadith }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Subtle Background Ornament */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(${ornament1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-900 to-emerald-700 py-4 px-5 flex justify-between items-center rounded-t-xl border-b-2 border-amber-400">
        <h3 className="text-lg md:text-xl font-semibold text-white font-['Scheherazade'] tracking-wide">
          {hadith.category}
        </h3>
        <span className="flex items-center gap-2">
          {/* Hadith Source */}
          <span className="text-amber-300 text-sm md:text-base px-3 py-1 rounded-full bg-emerald-900 shadow-md">
            {hadith.source}
          </span>

          {/* Chapter (Only if available) */}
          {hadith.chapter && (
            <span className="text-amber-300 text-sm md:text-base px-3 py-1 rounded-full bg-emerald-900 shadow-md">
              {hadith.chapter}
            </span>
          )}
        </span>
      </div>

      {/* Hadith Content */}
      <div className="p-6 bg-white bg-opacity-90 border-t-4 border-amber-300 rounded-b-xl">
        {/* Narrator Section */}
        {hadith.narrator && (
          <p className="text-right font-['Amiri'] text-lg md:text-xl mb-3 text-emerald-900 leading-relaxed italic">
            Narrated by <span className="font-bold">{hadith.narrator}</span>
          </p>
        )}

        {/* Hadith Text */}
        <p className="text-gray-700 text-base leading-relaxed font-scheherazade">
          {hadith.text}
        </p>
      </div>

      {/* Glowing Hover Effect */}
      <div className="absolute inset-0 border border-transparent hover:border-emerald-700 hover:shadow-md transition-all duration-300 rounded-xl"></div>
    </div>
  );
};

export default HadithCard;
