export interface JuzSummary {
  id: number;
  title: string;
  arabicTitle: string;
  overallSummary: string;
  summary: {
    verses: string;
    title: string;
    description: string;
    lesson: string[];
  }[];
  verses: string;
  themes: {
    common: string[];
  };
  importantVerses: {
    [key: string]: {
      start: string; // Verse reference for the start
      end: string; // Verse reference for the end (if applicable)
      arabic: string; // Arabic text of the verse
      englishTransliteration: string; // English transliteration
      englishTranslation: string; // English translation of the verse
    };
  };
}



export const quranJuzSummaries: JuzSummary[] = [
  {
    "id": 3,
    "title": "Tilka al-Rusul",
    "arabicTitle": "تلك الرسل",
    "overallSummary": "Juz 3 completes Surah Al-Baqarah and begins Surah Aal-e-Imran. It discusses the ranks of prophets, the Throne Verse (Ayatul Kursi), the prohibition of interest, charity, and the importance of sincere faith. The Juz also highlights the significance of patience, trust in Allah, and the virtues of the family of Imran.",
    "summary": [
      {
        "verses": "2:253",
        "title": "Prophets and Their Ranks",
        "description": "Allah granted some prophets higher ranks than others. Musa (Moses) spoke directly to Allah, Isa (Jesus) was given miracles, and Muhammad ﷺ was given the final revelation (Quran). Some prophets were given clear signs, while others were given specific responsibilities.",
        "lesson": [
          "Respect all prophets as they all brought divine guidance.",
          "Follow the final message (Quran), which completes previous scriptures."
        ]
      },
      {
        "verses": "2:255",
        "title": "Ayat al-Kursi: The Throne Verse",
        "description": "Ayat al-Kursi describes Allah's absolute sovereignty, knowledge, and power. It affirms that He is the Ever-Living, Self-Sustaining, and that nothing happens without His permission. His knowledge encompasses all things, and He is never weary of protecting His creation.",
        "lesson": [
          "Allah's power and knowledge are limitless.",
          "Trust in Allah as the ultimate protector and sustainer."
        ]
      },
      {
        "verses": "2:256",
        "title": "No Compulsion in Religion",
        "description": "Islam does not force anyone to accept faith. The truth is clear from falsehood, and people must choose belief willingly. Faith must come from the heart, and coercion is against the principles of Islam.",
        "lesson": [
          "Faith must be sincere and not forced.",
          "Islam promotes freedom of belief and conscious submission to God."
        ]
      },
      {
        "verses": "2:261",
        "title": "The Rewards of Charity",
        "description": "Giving charity is compared to planting a single seed that grows into 700 times more. Allah rewards those who spend sincerely for His cause.",
        "lesson": [
          "Charity multiplies blessings in this life and the hereafter.",
          "Give with sincerity and expect reward from Allah."
        ]
      },
      {
        "verses": "2:265",
        "title": "Sincere vs. Insincere Charity",
        "description": "Those who give charity seeking Allah's pleasure will have rewards, while those who give for show will have no benefit from their charity.",
        "lesson": [
          "Purify intentions when giving charity.",
          "Righteous deeds should be for Allah alone."
        ]
      },
      {
        "verses": "2:275",
        "title": "Prohibition of Riba (Interest)",
        "description": "Allah strictly forbids interest-based transactions, as they exploit the poor and corrupt economic justice. Instead, business and trade are encouraged.",
        "lesson": [
          "Avoid interest-based transactions as they lead to social injustice.",
          "Engage in ethical trade and financial dealings."
        ]
      },
      {
        "verses": "2:282",
        "title": "The Longest Verse in the Quran: Writing Contracts",
        "description": "Allah commands believers to document financial transactions with witnesses to ensure justice and prevent disputes.",
        "lesson": [
          "Financial transparency is essential in transactions.",
          "Islam encourages accountability and fairness."
        ]
      },
      {
        "verses": "2:286",
        "title": "Dua for Ease and Mercy",
        "description": "Allah does not burden a soul beyond its capacity. This verse is a supplication seeking forgiveness, mercy, and strength in faith.",
        "lesson": [
          "Allah's mercy is vast, and He understands human limitations.",
          "Seek His help in times of difficulty."
        ]
      },
      {
        "verses": "3:3",
        "title": "The Quran Confirms Previous Revelations",
        "description": "Allah revealed the Quran as the final scripture, confirming the Torah and the Gospel. It serves as guidance for humanity.",
        "lesson": [
          "The Quran completes previous revelations.",
          "Follow it as the ultimate source of divine guidance."
        ]
      },
      {
        "verses": "3:7",
        "title": "Clear and Allegorical Verses",
        "description": "Some Quranic verses have clear meanings, while others are allegorical. Only Allah knows the complete interpretation of the hidden meanings.",
        "lesson": [
          "Focus on clear teachings of the Quran.",
          "Trust Allah in matters beyond human understanding."
        ]
      },
      {
        "verses": "3:26-27",
        "title": "Allah Controls Power and Sustenance",
        "description": "Allah gives kingdom to whom He wills and takes it away from whom He wills. He controls life, death, and provisions.",
        "lesson": [
          "Wealth and power are in Allah's hands.",
          "Be grateful and trust in His wisdom."
        ]
      },
      {
        "verses": "3:31",
        "title": "Following the Prophet's Path",
        "description": "Allah commands believers to follow the teachings of Prophet Muhammad ﷺ as a sign of true love for Allah.",
        "lesson": [
          "Loving Allah requires following the Prophet's teachings.",
          "Obedience to the Prophet is obedience to Allah."
        ]
      },
      {
        "verses": "3:35-37",
        "title": "The Birth of Maryam (Mary)",
        "description": "Maryam's mother dedicated her to Allah's service. Despite expecting a son, she embraced Allah's plan and Maryam became one of the most honored women in history.",
        "lesson": [
          "Allah's plans are beyond human expectations.",
          "Sincere devotion leads to divine blessings."
        ]
      },
      {
        "verses": "3:42-47",
        "title": "The Birth of Isa (Jesus)",
        "description": "Angel Jibreel (Gabriel) announced to Maryam that she would give birth to Isa (Jesus) without a father. This miraculous birth was a sign from Allah.",
        "lesson": [
          "Allah's power is limitless.",
          "Trust in divine wisdom even when things seem impossible."
        ]
      },
      {
        "verses": "3:54",
        "title": "Allah's Plan is Supreme",
        "description": "The disbelievers plotted against Isa (Jesus), but Allah's plan was superior. He protected Isa and raised him to Himself.",
        "lesson": [
          "No plan can succeed against Allah's will.",
          "Trust in Allah's justice and ultimate wisdom."
        ]
      },
      {
        "verses": "3:57",
        "title": "Reward for the Righteous",
        "description": "Allah assures that those who do good deeds and believe in Him will be fully rewarded, while the wrongdoers will not find any help.",
        "lesson": [
          "Allah's justice ensures fairness for all.",
          "Righteous deeds lead to eternal rewards."
        ]
      },
      {
        "verses": "3:59",
        "title": "The Creation of Isa (Jesus)",
        "description": "Isa’s (Jesus) creation is compared to Adam’s. Allah created him without a father, just as Adam was created from dust without parents.",
        "lesson": [
          "Allah’s power is beyond human understanding.",
          "Miracles are signs of Allah’s might."
        ]
      },
      {
        "verses": "3:61",
        "title": "The Challenge of Mubahala",
        "description": "Allah instructs Prophet Muhammad ﷺ to invite Christians to a 'Mubahala'—a challenge where both parties pray for Allah’s curse on the liars, proving Islam’s truth.",
        "lesson": [
          "Truth stands firm against falsehood.",
          "Faith should be based on sincerity, not blind belief."
        ]
      },
      {
        "verses": "3:64",
        "title": "Common Ground Between Muslims and People of the Book",
        "description": "Allah calls for unity among Muslims, Jews, and Christians, emphasizing monotheism and worshiping Allah alone.",
        "lesson": [
          "Interfaith dialogue should focus on common beliefs.",
          "Allah alone deserves worship and submission."
        ]
      },
      {
        "verses": "3:67",
        "title": "The Faith of Ibrahim (Abraham)",
        "description": "Ibrahim (Abraham) was neither Jewish nor Christian—he was a pure monotheist who submitted fully to Allah.",
        "lesson": [
          "True faith is submission to Allah alone.",
          "Religious labels do not define righteousness—sincere belief does."
        ]
      },
      {
        "verses": "3:73",
        "title": "Guidance is Only from Allah",
        "description": "Allah warns against those who try to mislead believers. True guidance comes from Allah, and no one can change His decree.",
        "lesson": [
          "Be cautious of those who distort religious teachings.",
          "Seek knowledge from authentic sources."
        ]
      },
      {
        "verses": "3:79",
        "title": "Prophets Never Call for Worship of Themselves",
        "description": "No prophet ever asked people to worship him instead of Allah. Their role was to guide people towards the Creator, not themselves.",
        "lesson": [
          "Prophets are messengers, not objects of worship.",
          "Worship belongs to Allah alone."
        ]
      },
      {
        "verses": "3:83",
        "title": "Islam is the Natural Religion",
        "description": "Everything in the heavens and the earth submits to Allah, willingly or unwillingly. Islam is the natural way of life for all creation.",
        "lesson": [
          "Submission to Allah brings peace and purpose.",
          "Everything in the universe follows Allah’s command."
        ]
      },
      {
        "verses": "3:85",
        "title": "Only Islam is Accepted by Allah",
        "description": "Allah states that any religion other than Islam will not be accepted, as Islam is the final and complete guidance.",
        "lesson": [
          "True success lies in following Allah’s guidance.",
          "Islam is the culmination of all previous revelations."
        ]
      },
      {
        "verses": "3:89",
        "title": "Repentance and Forgiveness",
        "description": "Allah promises forgiveness to those who sincerely repent and reform their ways, showing His immense mercy.",
        "lesson": [
          "Repentance wipes away sins if done sincerely.",
          "Allah’s mercy is greater than any sin."
        ]
      },
      {
        "verses": "3:92",
        "title": "True Righteousness: Giving from What You Love",
        "description": "True piety is shown by giving away things you love for the sake of Allah. Only through sacrifice and generosity can faith be perfected.",
        "lesson": [
          "Selflessness and generosity strengthen faith.",
          "Sacrificing for Allah brings spiritual growth and blessings."
        ]
      }      
    ],
    "verses": "Surah Al-Baqarah (2:253-286) and Surah Aal-e-Imran (3:1-92)",
    "themes": {
      "common": [
        "Ranks of Prophets",
        "Ayat al-Kursi (Allah's Sovereignty)",
        "Prohibition of Riba (Interest)",
        "Importance of Charity",
        "Divine Mercy & Reliance on Allah",
        "The Power of Duas",
        "Trust in Allah's Plan",
        "The Story of Maryam and Isa",
        "Following the Prophet's Teachings"
      ]
    },  
    "importantVerses": {
      AyatAlKursi: {
        start: "2:255",
        end: "",
        arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...",
        englishTransliteration: "Allahu la ilaha illa huwa al-hayyul-qayyum...",
        englishTranslation: "Allah! There is no deity except Him, the Ever-Living, the Sustainer of [all] existence..."
      },
      FinalVerseOfBaqarah: {
        start: "2:286",
        end: "",
        arabic: "لَا يُكَلِّفُ اللّٰهُ نَفۡسًا اِلَّا وُسۡعَهَا ​ؕ لَهَا مَا كَسَبَتۡ وَعَلَيۡهَا مَا اكۡتَسَبَتۡ​ؕ رَبَّنَا لَا تُؤَاخِذۡنَاۤ اِنۡ نَّسِيۡنَاۤ اَوۡ اَخۡطَاۡنَا ​ۚ رَبَّنَا وَلَا تَحۡمِلۡ عَلَيۡنَاۤ اِصۡرًا كَمَا حَمَلۡتَهٗ عَلَى الَّذِيۡنَ مِنۡ قَبۡلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلۡنَا مَا لَا طَاقَةَ لَنَا بِهٖ​ ۚ وَاعۡفُ عَنَّا وَاغۡفِرۡ لَنَا وَارۡحَمۡنَا اَنۡتَ مَوۡلٰٮنَا فَانۡصُرۡنَا عَلَى الۡقَوۡمِ الۡكٰفِرِيۡنَ",
        englishTransliteration: "La yukallifu Allahu nafsanilla wusAAaha laha ma kasabatwaAAalayha ma iktasabat rabbana latu-akhithna in naseena aw akhta/narabbana wala tahmil AAalayna isrankama hamaltahu AAala allatheena minqablina rabbana wala tuhammilnama la taqata lana bihi waAAfuAAanna waghfir lana warhamnaanta mawlana fansurna AAalaalqawmi alkafireen",
        englishTranslation: "Allah does not require of any soul more than what it can afford. All good will be for its own benefit, and all evil will be to its own loss. ˹The believers pray,˺ “Our Lord! Do not punish us if we forget or make a mistake. Our Lord! Do not place a burden on us like the one you placed on those before us. Our Lord! Do not burden us with what we cannot bear. Pardon us, forgive us, and have mercy on us. You are our ˹only˺ Guardian. So grant us victory over the disbelieving people.”"
      }
    }    
  },
  
  
  
];


export interface Hadith {
  id: number;
  category: string;
  text: string;
  source: string;
  chapter?: string;
  arabicText?: string;
}

export const hadiths: Hadith[] = [
  {
    id: 1,
    category: "Forgiveness",
    text: "Whoever fasts during Ramadan out of sincere faith and hoping to attain Allah's rewards, then all his past sins will be forgiven.",
    source: "Sahih Al-Bukhari",
    chapter: "Book of Faith, 38",
    arabicText: "مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ"
  },
  {
    id: 2,
    category: "Forgiveness",
    text: "When Ramadan begins, the gates of Paradise are opened, the gates of Hell are closed, and the devils are chained.",
    source: "Sahih Al-Bukhari and Muslim",
    chapter: "Book of Fasting, 1899",
    arabicText: "إِذَا جَاءَ رَمَضَانُ فُتِحَتْ أَبْوَابُ الْجَنَّةِ وَغُلِّقَتْ أَبْوَابُ النَّارِ وَصُفِّدَتِ الشَّيَاطِينُ"
  },
  {
    id: 3,
    category: "Virtues of Ramadan",
    text: "There is a gate in Paradise called Ar-Rayyan, through which only those who fast will enter on the Day of Resurrection, and when the last of them has entered, it will be closed.",
    source: "Sahih Al-Bukhari",
    chapter: "Book of Fasting, 1896",
    arabicText: "إِنَّ فِي الْجَنَّةِ بَابًا يُقَالُ لَهُ الرَّيَّانُ يَدْخُلُ مِنْهُ الصَّائِمُونَ يَوْمَ الْقِيَامَةِ لَا يَدْخُلُ مِنْهُ أَحَدٌ غَيْرُهُمْ"
  },
  {
    id: 4,
    category: "Virtues of Ramadan",
    text: "Fasting is a shield with which a servant protects himself from the Fire.",
    source: "Ahmad",
    chapter: "Musnad, 8683",
    arabicText: "الصِّيَامُ جُنَّةٌ يَسْتَجِنُّ بِهَا الْعَبْدُ مِنَ النَّارِ"
  },
  {
    id: 5,
    category: "Forgiveness",
    text: "Whoever stands (in prayer) during Laylatul Qadr out of faith and seeking reward, his previous sins will be forgiven.",
    source: "Sahih Al-Bukhari",
    chapter: "Book of Taraweeh Prayers, 2014",
    arabicText: "مَنْ قَامَ لَيْلَةَ الْقَدْرِ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ"
  },
  {
    id: 6,
    category: "Virtues of Ramadan",
    text: "The fasting person has two joys: one when he breaks his fast, and the other when he meets his Lord.",
    source: "Sahih Al-Bukhari and Muslim",
    chapter: "Book of Fasting, 1904",
    arabicText: "لِلصَّائِمِ فَرْحَتَانِ: فَرْحَةٌ عِنْدَ فِطْرِهِ، وَفَرْحَةٌ عِنْدَ لِقَاءِ رَبِّهِ"
  },
  {
    id: 7,
    category: "Forgiveness",
    text: "Whoever gives food for a fasting person to break his fast, he will have the same reward as the fasting person, without decreasing the reward of the fasting person in the slightest.",
    source: "At-Tirmidhi",
    chapter: "Book of Zakat, 807",
    arabicText: "مَنْ فَطَّرَ صَائِمًا كَانَ لَهُ مِثْلُ أَجْرِهِ غَيْرَ أَنَّهُ لَا يَنْقُصُ مِنْ أَجْرِ الصَّائِمِ شَيْئًا"
  },
  {
    id: 8,
    category: "Virtues of Ramadan",
    text: "The smell from the mouth of a fasting person is better with Allah than the fragrance of musk.",
    source: "Sahih Al-Bukhari",
    chapter: "Book of Fasting, 1894",
    arabicText: "لَخُلُوفُ فَمِ الصَّائِمِ أَطْيَبُ عِنْدَ اللَّهِ مِنْ رِيحِ الْمِسْكِ"
  },
  {
    id: 9,
    category: "Laylatul Qadr",
    text: "Seek Laylatul Qadr in the odd nights of the last ten nights of Ramadan.",
    source: "Sahih Al-Bukhari",
    chapter: "Book of Laylatul Qadr, 2017",
    arabicText: "تَحَرَّوْا لَيْلَةَ الْقَدْرِ فِي الْوِتْرِ مِنَ الْعَشْرِ الْأَوَاخِرِ مِنْ رَمَضَانَ"
  },
  {
    id: 10,
    category: "Laylatul Qadr",
    text: "Whoever prays on Laylatul Qadr out of faith and seeking reward, all his previous sins will be forgiven.",
    source: "Sahih Al-Bukhari",
    chapter: "Book of Taraweeh Prayers, 2014",
    arabicText: "مَنْ قَامَ لَيْلَةَ الْقَدْرِ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ"
  },
  {
    id: 11,
    category: "Laylatul Qadr",
    text: "Laylatul Qadr is better than a thousand months.",
    source: "Quran",
    chapter: "Surah Al-Qadr, 97:3",
    arabicText: "لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ"
  },
  {
    id: 12,
    category: "Prayers in Ramadan",
    text: "Whoever stands (in prayer) in Ramadan out of faith and seeking reward, all his previous sins will be forgiven.",
    source: "Sahih Al-Bukhari",
    chapter: "Book of Taraweeh Prayers, 2009",
    arabicText: "مَنْ قَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ"
  }
];

export interface Dua {
  id: number;
  title: string;
  arabicTitle: string;
  arabic: string;
  transliteration: string;
  translation: string;
  reference: string;
  occasion: string;
}

export const ramadanDuas: Dua[] = [
  {
    id: 1,
    title: "Dua for Beginning the Fast",
    arabicTitle: "دعاء نية الصيام",
    arabic: "نَوَيْتُ صَوْمَ غَدٍ مِنْ شَهْرِ رَمَضَانَ الْمُبَارَكِ، فَرْضًا لَكَ يَا اللهُ، فَتَقَبَّلْ مِنِّي",
    transliteration: "Nawaitu sawma ghadin min shahri Ramadanal-mubaraki, fardan laka ya Allah, fataqabbal minni",
    translation: "I intend to fast tomorrow in this month of blessed Ramadan, obligatory for You, O Allah, so accept this from me.",
    reference: "Abu Dawud",
    occasion: "Before starting the fast (at night before Fajr)"
  },
  ]

export interface RamadanPrayer {
  title: string;
  arabicTitle: string;
  description: string;
  virtues: string[];
  howTo: string;
  references: string[];
}

export const ramadanPrayers: RamadanPrayer[] = [
  {
    title: "Dua for Beginning the Fast (Suhoor)",
    arabicTitle: "دعاء نية الصيام",
    description: "A supplication to make the intention for fasting during the month of Ramadan.",
    virtues: [
      "Strengthens the intention and sincerity of fasting.",
      "Aligns with the Sunnah of the Prophet (ﷺ).",
      "Brings mindfulness and spiritual awareness before starting the fast."
    ],
    howTo: "Recite this dua before Suhoor with the intention of fasting for the sake of Allah.",
    references: [
      "Hadith Collection",
      "Islamic Scholars' Commentary"
    ]
  },
  {
    title: "Dua for Breaking the Fast (Iftar)",
    arabicTitle: "دعاء الإفطار",
    description: "A supplication to recite when breaking the fast at sunset.",
    virtues: [
      "Expresses gratitude to Allah for His provision.",
      "Brings barakah (blessings) in food and sustenance.",
      "Aligns with the practice of the Prophet (ﷺ)."
    ],
    howTo: "Recite this dua just before or after breaking the fast at Maghrib.",
    references: [
      "Sunan Abu Dawood",
      "Prophetic Tradition"
    ]
  },
  {
    title: "Dua for Laylatul Qadr",
    arabicTitle: "دعاء ليلة القدر",
    description: "A powerful supplication for seeking forgiveness on the Night of Decree.",
    virtues: [
      "Leads to Allah's complete forgiveness.",
      "Recommended by the Prophet (ﷺ) for the last ten nights of Ramadan.",
      "Strengthens one's relationship with Allah."
    ],
    howTo: "Recite this dua frequently during the last ten nights of Ramadan, especially on the odd nights.",
    references: [
      "Sunan At-Tirmidhi",
      "Hadith Narrations"
    ]
  },
  {
    title: "Dua for Seeking Allah's Mercy",
    arabicTitle: "دعاء طلب الرحمة",
    description: "A supplication for seeking Allah's mercy and forgiveness.",
    virtues: [
      "Brings Allah's mercy and blessings.",
      "Encourages humility before Allah.",
      "A reminder of Allah's vast forgiveness."
    ],
    howTo: "Recite this dua during prayers, in sujood (prostration), and at any time during Ramadan.",
    references: [
      "Surah Al-Mu'minun (23:118)",
      "Quranic Commentary"
    ]
  },
  {
    title: "Dua for Guidance and Piety",
    arabicTitle: "دعاء الهداية والتقوى",
    description: "A supplication asking for Allah's guidance and righteousness.",
    virtues: [
      "Helps in strengthening faith and piety.",
      "Encourages a steadfast heart in obedience to Allah.",
      "A prayer for righteousness and good character."
    ],
    howTo: "Recite this dua regularly, especially in prayers and during moments of reflection.",
    references: [
      "Quran & Sunnah",
      "Islamic Scholars' Commentary"
    ]
  }
];
