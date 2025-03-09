import React from "react";
import { quranJuzSummaries } from "../data/Quran";
import JuzCard from "../components/JuzCard";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const QuranSummary: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredJuz = quranJuzSummaries.filter(
    (juz) =>
      juz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      juz.overallSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      juz.verses.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      className="min-h-screen py-12 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        {/* Heading Animation */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center text-emerald-900 mb-4 font-['Amiri']"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          Quran Summary
        </motion.h1>
        
        <motion.p
          className="text-center text-emerald-700 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          The Quran is divided into 30 equal parts called Juz. Each Juz contains portions of different Surahs (chapters).
          Explore the summaries of each Juz below to understand the themes and messages of the Holy Quran.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          className="max-w-md mx-auto mb-12 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search by title, content, or verses..."
              className="w-full px-4 py-3 pl-12 rounded-full border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-500 h-5 w-5" />
          </div>
        </motion.div>

        {/* Juz Cards with staggered animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredJuz.map((juz) => (
            <motion.div
              key={juz.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <JuzCard juz={juz} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State Animation */}
        {filteredJuz.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-xl text-gray-600">No results found for "{searchTerm}"</p>
            <motion.button
              className="mt-4 px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-800"
              onClick={() => setSearchTerm("")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear Search
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default QuranSummary;
