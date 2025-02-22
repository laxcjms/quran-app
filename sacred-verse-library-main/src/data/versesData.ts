export interface Verse {
  number: number;
  arabic: string;
  translation: string;
  transliteration: string;
}

export const versesData: Record<number, Verse[]> = {
  1: [
    {
      number: 1,
      arabic: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ",
      translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      transliteration: "Bismillahir Rahmanir Raheem"
    },
    {
      number: 2,
      arabic: "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَـٰلَمِينَ",
      translation: "All praise is due to Allah, Lord of the worlds.",
      transliteration: "Alhamdu lillahi rabbil 'alamin"
    },
    {
      number: 3,
      arabic: "ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ",
      translation: "The Entirely Merciful, the Especially Merciful,",
      transliteration: "Ar-Rahmanir-Raheem"
    },
    {
      number: 4,
      arabic: "مَـٰلِكِ يَوۡمِ ٱلدِّينِ",
      translation: "Sovereign of the Day of Recompense.",
      transliteration: "Maliki yawmid-deen"
    },
    {
      number: 5,
      arabic: "إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ",
      translation: "You alone we worship, and You alone we ask for help.",
      transliteration: "Iyyaka na'budu wa iyyaka nasta'een"
    },
    {
      number: 6,
      arabic: "ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ",
      translation: "Guide us to the straight path,",
      transliteration: "Ihdinas-siratal-mustaqeem"
    },
    {
      number: 7,
      arabic: "صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ",
      translation: "The path of those upon whom You have bestowed favor, not of those who have earned [Your] anger or of those who are astray.",
      transliteration: "Siratal-ladhina an'amta 'alayhim ghayril-maghdubi 'alayhim walad-daalleen"
    }
  ],
  2: [
    {
      number: 1,
      arabic: "الٓمٓ",
      translation: "Alif, Lam, Meem.",
      transliteration: "Alif-laam-meem"
    },
    {
      number: 2,
      arabic: "ذَٰلِكَ ٱلۡكِتَـٰبُ لَا رَيۡبَ ۛ فِيهِ ۛ هُدًى لِّلۡمُتَّقِينَ",
      translation: "This is the Book about which there is no doubt, a guidance for those conscious of Allah.",
      transliteration: "Zaalikal kitaabu laa rayba feeh; hudal lilmuttaqeen"
    },
    {
      number: 3,
      arabic: "ٱلَّذِينَ يُؤۡمِنُونَ بِٱلۡغَيۡبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقۡنَـٰهُمۡ يُنفِقُونَ",
      translation: "Who believe in the unseen, establish prayer, and spend out of what We have provided for them,",
      transliteration: "Allazeena yu'minoona bil ghaybi wa yuqeemoonas salaata wa mimmaa razaqnaahum yunfiqoon"
    },
    {
      number: 4,
      arabic: "وَٱلَّذِينَ يُؤۡمِنُونَ بِمَآ أُنزِلَ إِلَيۡكَ وَمَآ أُنزِلَ مِن قَبۡلِكَ وَبِٱلۡـَٔاخِرَةِ هُمۡ يُوقِنُونَ",
      translation: "And who believe in what has been revealed to you, [O Muhammad], and what was revealed before you, and of the Hereafter they are certain [in faith].",
      transliteration: "Wallazeena yu'minoona bimaaa unzila ilaika wa maaa unzila min qablika wa bil aakhirati hum yooqinoon"
    },
    {
      number: 5,
      arabic: "أُو۟لَـٰٓئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمۡ ۖ وَأُو۟لَـٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ",
      translation: "Those are upon [right] guidance from their Lord, and it is those who are the successful.",
      transliteration: "Ulaaa'ika 'alaa hudam mir rabbihim wa ulaaa'ika humul muflihoon"
    }
  ],
  108: [
    {
      number: 1,
      arabic: "إِنَّآ أَعۡطَيۡنَـٰكَ ٱلۡكَوۡثَرَ",
      translation: "Indeed, We have granted you, [O Muhammad], al-Kawthar.",
      transliteration: "Innaa a'tainaakal kauthar"
    },
    {
      number: 2,
      arabic: "فَصَلِّ لِرَبِّكَ وَٱنۡحَرۡ",
      translation: "So pray to your Lord and sacrifice [to Him alone].",
      transliteration: "Fasalli li rabbika wanhar"
    },
    {
      number: 3,
      arabic: "إِنَّ شَانِئَكَ هُوَ ٱلۡأَبۡتَرُ",
      translation: "Indeed, your enemy is the one cut off.",
      transliteration: "Inna shaani'aka huwal abtar"
    }
  ],
  109: [
    {
      number: 1,
      arabic: "قُلۡ يَـٰٓأَيُّهَا ٱلۡكَـٰفِرُونَ",
      translation: "Say, 'O disbelievers,'",
      transliteration: "Qul yaa-ayyuhal kaafiroon"
    },
    {
      number: 2,
      arabic: "لَآ أَعۡبُدُ مَا تَعۡبُدُونَ",
      translation: "I do not worship what you worship,",
      transliteration: "Laaa a'budu maa t'abudoon"
    },
    {
      number: 3,
      arabic: "وَلَآ أَنتُمۡ عَـٰبِدُونَ مَآ أَعۡبُدُ",
      translation: "Nor are you worshippers of what I worship,",
      transliteration: "Wa laaa antum 'aabidoona maaa a'bud"
    },
    {
      number: 4,
      arabic: "وَلَآ أَنَا۠ عَابِدٌ مَّا عَبَدتُّمۡ",
      translation: "Nor will I be a worshipper of what you worship,",
      transliteration: "Wa laaa ana 'abidum maa 'abattum"
    },
    {
      number: 5,
      arabic: "وَلَآ أَنتُمۡ عَـٰبِدُونَ مَآ أَعۡبُدُ",
      translation: "Nor will you be worshippers of what I worship.",
      transliteration: "Wa laaa antum 'aabidoona maaa a'bud"
    },
    {
      number: 6,
      arabic: "لَكُمۡ دِينُكُمۡ وَلِىَ دِينِ",
      translation: "For you is your religion, and for me is my religion.",
      transliteration: "Lakum deenukum wa liya deen"
    }
  ],
  110: [
    {
      number: 1,
      arabic: "إِذَا جَآءَ نَصۡرُ ٱللَّهِ وَٱلۡفَتۡحُ",
      translation: "When the victory of Allah has come and the conquest,",
      transliteration: "Iza jaa-a nasrullahi walfath"
    },
    {
      number: 2,
      arabic: "وَرَأَيۡتَ ٱلنَّاسَ يَدۡخُلُونَ فِى دِينِ ٱللَّهِ أَفۡوَاجًا",
      translation: "And you see the people entering into the religion of Allah in multitudes,",
      transliteration: "Wa ra-aitan naasa yadkhuloona fee deenil laahi afwajaa"
    },
    {
      number: 3,
      arabic: "فَسَبِّحۡ بِحَمۡدِ رَبِّكَ وَٱسۡتَغۡفِرۡهُۚ إِنَّهُۥ كَانَ تَوَّابَۢا",
      translation: "Then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance.",
      transliteration: "Fasabbih bihamdi rabbika wastaghfirh, innahu kaana tawwaabaa"
    }
  ],
  111: [
    {
      number: 1,
      arabic: "تَبَّتۡ يَدَآ أَبِى لَهَبٍ وَتَبَّ",
      translation: "May the hands of Abu Lahab be ruined, and ruined is he.",
      transliteration: "Tabbat yadaaa abee Lahabinw-wa tabb"
    },
    {
      number: 2,
      arabic: "مَآ أَغۡنَىٰ عَنۡهُ مَالُهُۥ وَمَا كَسَبَ",
      translation: "His wealth will not avail him or that which he gained.",
      transliteration: "Maaa aghnaa 'anhu maaluhu wa ma kasab"
    },
    {
      number: 3,
      arabic: "سَيَصۡلَىٰ نَارًا ذَاتَ لَهَبٍ",
      translation: "He will [enter to] burn in a Fire of [blazing] flame",
      transliteration: "Sayaslaa naaran zaata lahab"
    },
    {
      number: 4,
      arabic: "وَٱمۡرَأَتُهُۥ حَمَّالَةَ ٱلۡحَطَبِ",
      translation: "And his wife [as well] - the carrier of firewood.",
      transliteration: "Wamra-atuhu hammaalatal-hatab"
    },
    {
      number: 5,
      arabic: "فِى جِيدِهَا حَبۡلٌ مِّن مَّسَدِۭ",
      translation: "Around her neck is a rope of [twisted] fiber.",
      transliteration: "Fee jeedihaa hablum mim-masad"
    }
  ],
  112: [
    {
      number: 1,
      arabic: "قُلۡ هُوَ ٱللَّهُ أَحَدٌ",
      translation: "Say, 'He is Allah, [who is] One,'",
      transliteration: "Qul huwa Allahu ahad"
    },
    {
      number: 2,
      arabic: "ٱللَّهُ ٱلصَّمَدُ",
      translation: "Allah, the Eternal Refuge,",
      transliteration: "Allahus-samad"
    },
    {
      number: 3,
      arabic: "لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ",
      translation: "He neither begets nor is born,",
      transliteration: "Lam yalid wa lam yulad"
    },
    {
      number: 4,
      arabic: "وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ",
      translation: "Nor is there to Him any equivalent.'",
      transliteration: "Wa lam yakul-lahu kufuwan ahad"
    }
  ],
  113: [
    {
      number: 1,
      arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ",
      translation: "Say, 'I seek refuge in the Lord of daybreak'",
      transliteration: "Qul a'uzuu bi rabbil-falaq"
    },
    {
      number: 2,
      arabic: "مِن شَرِّ مَا خَلَقَ",
      translation: "From the evil of that which He created",
      transliteration: "Min sharri ma khalaq"
    },
    {
      number: 3,
      arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
      translation: "And from the evil of darkness when it settles",
      transliteration: "Wa min sharri ghasiqin iza waqab"
    },
    {
      number: 4,
      arabic: "وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلۡعُقَدِ",
      translation: "And from the evil of the blowers in knots",
      transliteration: "Wa min sharrin-naffaa-thaati fil 'uqad"
    },
    {
      number: 5,
      arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
      translation: "And from the evil of an envier when he envies.'",
      transliteration: "Wa min sharri haasidin iza hasad"
    }
  ],
  114: [
    {
      number: 1,
      arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
      translation: "Say, 'I seek refuge in the Lord of mankind,'",
      transliteration: "Qul a'uzu birabbi an-naas"
    },
    {
      number: 2,
      arabic: "مَلِكِ ٱلنَّاسِ",
      translation: "The Sovereign of mankind,",
      transliteration: "Maliki an-naas"
    },
    {
      number: 3,
      arabic: "إِلَـٰهِ ٱلنَّاسِ",
      translation: "The God of mankind,",
      transliteration: "Ilahi an-naas"
    },
    {
      number: 4,
      arabic: "مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ",
      translation: "From the evil of the retreating whisperer -",
      transliteration: "Min sharri al-waswasi al-khannas"
    },
    {
      number: 5,
      arabic: "ٱلَّذِى يُوَسۡوِسُ فِى صُدُورِ ٱلنَّاسِ",
      translation: "Who whispers [evil] into the breasts of mankind -",
      transliteration: "Allazi yuwaswisu fee suduri an-naas"
    },
    {
      number: 6,
      arabic: "مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ",
      translation: "From among the jinn and mankind.'",
      transliteration: "Mina al-jinnati wa an-naas"
    }
  ]
};
