import React from "react";
import o1 from "../assets/o1.jpg";

interface RamadanCardProps {
  title: string;
  arabicTitle?: string;
  content: string;
  className?: string;
}

const RamadanCard: React.FC<RamadanCardProps> = ({
  title,
  arabicTitle,
  content,
  className = "",
}) => {
  return (
    <div
      className={`rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${o1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="bg-emerald-800 py-3 px-4">
        <h3 className="text-xl font-semibold text-white font-scheherazade">
          {title}
        </h3>
        {arabicTitle && (
          <p className="text-amber-300 font-['Amiri'] text-right text-xl mt-1">
            {arabicTitle}
          </p>
        )}
      </div>
      <div className="p-5 bg-opacity-90 border-t-4 border-amber-300 relative">
        <p className="text-gray-700 font-scheherazade relative z-10">
          {content}
        </p>
      </div>
    </div>
  );
};

export default RamadanCard;
