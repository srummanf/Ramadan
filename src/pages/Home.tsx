import React from 'react';
import RamadanCard from '../components/RamadanCard';
import { Moon, Star, Heart, HelpingHand as PrayingHands } from 'lucide-react';
import ramadanPattern from '../assets/r2.png';
import ornament1 from '../assets/o1.jpg';

const Home: React.FC = () => {
  return (
     <div className="min-h-screen overflow-x-hidden bg-[#fcf9f2]">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center relative overflow-hidden bg-gradient-to-b from-emerald-50 to-transparent">
        
        <div className="container mx-auto relative z-10">
          <div className="flex justify-center items-center mb-6 space-x-4">
            <img src={ramadanPattern} alt="Islamic Pattern" className="w-16 h-16 opacity-80" />
            <Moon className="h-16 w-16 text-amber-400" />
            <img src={ramadanPattern} alt="Islamic Pattern" className="w-16 h-16 opacity-80 transform rotate-180" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-emerald-900 mb-4 font-['Amiri']">
            Ramadan Kareem
          </h1>
          <p className="text-3xl font-['Amiri'] text-amber-600 mb-8">
            رمضان كريم
          </p>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute left-0 -top-4 w-8 h-8 border-t-2 border-l-2 border-amber-400"></div>
            <div className="absolute right-0 -top-4 w-8 h-8 border-t-2 border-r-2 border-amber-400"></div>
            <p className="text-emerald-800 mb-8 px-12 text-lg leading-relaxed">
              Welcome to the blessed month of Ramadan, a time for spiritual reflection, 
              self-improvement, and heightened devotion. May this month bring peace, 
              blessings, and forgiveness to all.
            </p>
            <div className="absolute left-0 -bottom-4 w-8 h-8 border-b-2 border-l-2 border-amber-400"></div>
            <div className="absolute right-0 -bottom-4 w-8 h-8 border-b-2 border-r-2 border-amber-400"></div>
          </div>
          <div className="flex justify-center space-x-3 mt-12">
            <Star className="h-6 w-6 text-amber-400" fill="currentColor" />
            <img src={ramadanPattern} alt="Islamic Pattern" className="w-6 h-6 opacity-80" />
            <Star className="h-6 w-6 text-amber-400" fill="currentColor" />
          </div>
        </div>
      </section>

      {/* Virtues of Ramadan Section */}
      <section className="py-16 px-[6rem] bg-gradient-to-b from-transparent via-emerald-50/30 to-transparent relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${ornament1})`,
            backgroundSize: '300px',
            backgroundRepeat: 'repeat',
            transform: 'rotate(45deg)',
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-12">
            <img src={ramadanPattern} alt="Decorative Islamic pattern" className="w-12 h-12 opacity-80" />
            <h2 className="text-3xl font-bold text-center text-emerald-900 font-['Amiri']">
              Virtues of Ramadan
            </h2>
            <img src={ramadanPattern} alt="Decorative Islamic pattern" className="w-12 h-12 opacity-80 transform rotate-180" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RamadanCard
              title="Forgiveness"
              arabicTitle="المغفرة"
              content="Ramadan is a month of forgiveness. The Prophet Muhammad (peace be upon him) said: 'Whoever fasts during Ramadan out of sincere faith and hoping to attain Allah's rewards, then all his past sins will be forgiven.'"
            />
            
            <RamadanCard
              title="Gates of Paradise"
              arabicTitle="أبواب الجنة"
              content="During Ramadan, the gates of Paradise are opened, the gates of Hell are closed, and the devils are chained. This creates an environment conducive to worship and spiritual growth."
            />
            
            <RamadanCard
              title="Night of Power"
              arabicTitle="ليلة القدر"
              content="Laylatul Qadr (The Night of Power) falls in the last ten nights of Ramadan. Worship during this night is better than worship of a thousand months. It is a night of special mercy and forgiveness."
            />
            
            <RamadanCard
              title="Increased Rewards"
              arabicTitle="زيادة الثواب"
              content="All good deeds are multiplied in reward during Ramadan. Voluntary acts of worship such as charity, prayer, and recitation of the Quran carry even greater weight in this blessed month."
            />
            
            <RamadanCard
              title="Self-Discipline"
              arabicTitle="ضبط النفس"
              content="Fasting teaches patience, self-control, and discipline. By abstaining from food, drink, and other desires during daylight hours, Muslims develop greater spiritual awareness and mindfulness."
            />
            
            <RamadanCard
              title="Community Spirit"
              arabicTitle="روح الجماعة"
              content="Ramadan strengthens community bonds through communal iftars (breaking of the fast), taraweeh prayers, and increased charity. It is a time when Muslims come together in worship and celebration."
            />
          </div>
        </div>
      </section>

      {/* Blessings of Ramadan Section */}
      <section className="py-16 px-[7rem] bg-gradient-to-b from-transparent via-emerald-50/30 to-transparent relative">
        
        <div className="container mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-12">
            <img src={ramadanPattern} alt="Decorative Islamic pattern" className="w-12 h-12 opacity-80" />
            <h2 className="text-3xl font-bold text-center text-emerald-900 font-['Amiri']">
              Blessings of Ramadan
            </h2>
            <img src={ramadanPattern} alt="Decorative Islamic pattern" className="w-12 h-12 opacity-80 transform rotate-180" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-8 flex flex-col items-center text-center border border-amber-100">
              <div className="bg-emerald-50 p-4 rounded-full mb-4">
                <PrayingHands className="h-12 w-12 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-900 mb-3">Spiritual Renewal</h3>
              <p className="text-gray-700">
                Ramadan offers a chance for spiritual renewal and growth. It's a time to reconnect with the Quran, 
                increase in prayer, and strengthen one's relationship with Allah. Many Muslims experience a spiritual 
                awakening during this blessed month.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-8 flex flex-col items-center text-center border border-amber-100">
              <div className="bg-emerald-50 p-4 rounded-full mb-4">
                <Heart className="h-12 w-12 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-900 mb-3">Compassion & Empathy</h3>
              <p className="text-gray-700">
                By experiencing hunger and thirst, Muslims develop greater empathy for those less fortunate. 
                This leads to increased charitable giving and acts of kindness throughout the month, benefiting 
                the entire community and those in need around the world.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-8 flex flex-col items-center text-center border border-amber-100">
              <div className="bg-emerald-50 p-4 rounded-full mb-4">
                <Moon className="h-12 w-12 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-900 mb-3">Special Prayers</h3>
              <p className="text-gray-700">
                Taraweeh prayers are special prayers performed only during Ramadan. Muslims gather in mosques each 
                night to pray together, fostering a sense of unity and shared purpose. These prayers often include 
                recitation of the entire Quran over the course of the month.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-8 flex flex-col items-center text-center border border-amber-100">
              <div className="bg-emerald-50 p-4 rounded-full mb-4">
                <Star className="h-12 w-12 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-900 mb-3">Health Benefits</h3>
              <p className="text-gray-700">
                Beyond the spiritual aspects, fasting has numerous health benefits. It can help reset the digestive system, 
                improve insulin sensitivity, promote weight loss, and even enhance brain function. Many Muslims report feeling 
                healthier and more energetic by the end of Ramadan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hadith Quote */}
      <section className="py-16 px-4 bg-emerald-800 text-white text-center relative overflow-hidden">
        
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="flex justify-center mb-8">
            <img src={ramadanPattern} alt="Decorative Islamic pattern" className="w-16 h-16 opacity-60" />
          </div>
          <p className="text-2xl font-['Amiri'] text-amber-300 mb-6 leading-relaxed">
            مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ
          </p>
          <p className="text-xl mb-4 italic">
            "Whoever fasts during Ramadan out of sincere faith and hoping to attain Allah's rewards, 
            then all his past sins will be forgiven."
          </p>
          <p className="text-amber-200">- Sahih Al-Bukhari</p>
          <div className="flex justify-center mt-8">
            <img src={ramadanPattern} alt="Decorative Islamic pattern" className="w-16 h-16 opacity-60 transform rotate-180" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;