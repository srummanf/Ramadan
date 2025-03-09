import React from 'react';
import { hadiths } from '../data/Quran';
import HadithCard from '../components/HadithCard';
import { Moon, Star, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const LaylatulQadr: React.FC = () => {
  const laylatulQadrHadiths = hadiths.filter(h => h.category === "Laylatul Qadr");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen night-sky py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <Moon className="h-16 w-16 text-amber-300" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-['Amiri']">
            Laylatul Qadr
          </h1>
          <p className="text-2xl font-['Amiri'] text-amber-300 mb-6">
            ليلة القدر
          </p>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-scheherazade">
            The Night of Power, better than a thousand months. A night of mercy, forgiveness, and peace.
          </p>
        </motion.div>
        
        {/* Quran Verse */}
        <motion.div 
          className="bg-night-800 bg-opacity-80 rounded-lg p-8 mb-12 border border-amber-300/30 shadow-[0_0_15px_rgba(251,191,36,0.2)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-right font-indopak text-2xl mb-6 text-amber-300 leading-relaxed">
            إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ۝ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ۝ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ ۝ تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ ۝ سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ
          </p>
          <p className="text-white text-lg italic font-scheherazade">
            "Indeed, We sent it [the Quran] down during the Night of Decree. And what can make you know what is the Night of Decree? The Night of Decree is better than a thousand months. The angels and the Spirit [Gabriel] descend therein by permission of their Lord for every matter. Peace it is until the emergence of dawn."
          </p>
          <p className="text-right text-amber-200 mt-4 font-scheherazade">
            Surah Al-Qadr (97:1-5)
          </p>
        </motion.div>
        
        {/* Key Information */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-night-800 bg-opacity-80 rounded-lg p-6 border border-amber-300/20"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <Calendar className="h-8 w-8 text-amber-300 mr-3" />
              <h3 className="text-xl font-semibold text-white font-scheherazade">When It Occurs</h3>
            </div>
            <p className="text-gray-300 font-scheherazade">
              Laylatul Qadr occurs during the last ten nights of Ramadan, most likely on one of the odd nights (21st, 23rd, 25th, 27th, or 29th). The 27th night is often considered the most likely.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-night-800 bg-opacity-80 rounded-lg p-6 border border-amber-300/20"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <Star className="h-8 w-8 text-amber-300 mr-3" />
              <h3 className="text-xl font-semibold text-white font-scheherazade">Its Significance</h3>
            </div>
            <p className="text-gray-300 font-scheherazade">
              This is the night when the Quran was first revealed to Prophet Muhammad (peace be upon him). Worship during this night is better than worship of a thousand months (over 83 years).
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-night-800 bg-opacity-80 rounded-lg p-6 border border-amber-300/20"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <Clock className="h-8 w-8 text-amber-300 mr-3" />
              <h3 className="text-xl font-semibold text-white font-scheherazade">Signs & Worship</h3>
            </div>
            <p className="text-gray-300 font-scheherazade">
              The night is described as peaceful and serene. The weather is neither hot nor cold, and the moon shines clearly. Muslims are encouraged to spend this night in prayer, Quran recitation, and making supplications.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Recommended Dua */}
        <motion.div 
          className="bg-night-800 bg-opacity-80 rounded-lg p-8 mb-12 border border-amber-300/30 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4 font-scheherazade">Recommended Dua for Laylatul Qadr</h3>
          <p className="text-2xl font-['Amiri'] text-amber-300 mb-4 leading-relaxed">
            اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
          </p>
          <p className="text-white italic mb-2 font-scheherazade">
            "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni"
          </p>
          <p className="text-gray-300 font-scheherazade">
            "O Allah, You are the One Who pardons greatly, and You love to pardon, so pardon me."
          </p>
        </motion.div>
        
        {/* Hadiths about Laylatul Qadr */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center font-scheherazade">
            Hadiths about Laylatul Qadr
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {laylatulQadrHadiths.map(hadith => (
              <HadithCard key={hadith.id} hadith={hadith} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaylatulQadr;