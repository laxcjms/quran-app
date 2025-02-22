
export interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishMeaning: string;
  verses: number;
}

export const surahList: Surah[] = [
  { number: 1, name: "الفاتحة", englishName: "Al-Fatiha", englishMeaning: "The Opening", verses: 7 },
  { number: 2, name: "البقرة", englishName: "Al-Baqarah", englishMeaning: "The Cow", verses: 286 },
  { number: 109, name: "الكافرون", englishName: "Al-Kafirun", englishMeaning: "The Disbelievers", verses: 6 },
  { number: 110, name: "النصر", englishName: "An-Nasr", englishMeaning: "The Divine Support", verses: 3 },
  { number: 111, name: "المسد", englishName: "Al-Masad", englishMeaning: "The Palm Fiber", verses: 5 },
  { number: 112, name: "الإخلاص", englishName: "Al-Ikhlas", englishMeaning: "The Sincerity", verses: 4 },
  { number: 113, name: "الفلق", englishName: "Al-Falaq", englishMeaning: "The Daybreak", verses: 5 },
  { number: 114, name: "الناس", englishName: "An-Nas", englishMeaning: "Mankind", verses: 6 }
];
