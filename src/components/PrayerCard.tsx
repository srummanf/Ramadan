import React from "react";
import { RamadanPrayer } from "../data/Quran";
import ornament1 from "../assets/o1.jpg";

interface PrayerCardProps {
  prayer: RamadanPrayer;
}

const PrayerCard: React.FC<PrayerCardProps> = ({ prayer }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden mb-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: `url(${ornament1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-emerald-800 py-4 px-6">
          <h3 className="text-2xl font-semibold text-white font-scheherazade">
            {prayer.title}
          </h3>
          <p className="text-amber-300 font-['Amiri'] text-right text-xl mt-1">
            {prayer.arabicTitle}
          </p>
        </div>

        {/* Card Content */}
        <div className="p-6 bg-white bg-opacity-90 border-t-4 border-amber-300">
          <p className="text-gray-700 mb-6 font-scheherazade">{prayer.description}</p>

          {/* Virtues */}
          <div className="mb-6">
            <h4 className="text-lg font-medium text-emerald-800 mb-3 font-scheherazade">
              Virtues:
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              {prayer.virtues.map((virtue, index) => (
                <li key={index} className="text-gray-700 font-scheherazade">
                  {virtue}
                </li>
              ))}
            </ul>
          </div>

          {/* How to Perform */}
          <div className="mb-6">
            <h4 className="text-lg font-medium text-emerald-800 mb-3 font-scheherazade">
              How to Perform:
            </h4>
            <p className="text-gray-700 font-scheherazade">{prayer.howTo}</p>
          </div>

          {/* References */}
          <div>
            <h4 className="text-lg font-medium text-emerald-800 mb-3 font-scheherazade">
              References:
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              {prayer.references.map((reference, index) => (
                <li key={index} className="text-gray-700 italic font-scheherazade">
                  {reference}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerCard;
