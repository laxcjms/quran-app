
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const surahList = [
  { number: 1, name: "الفاتحة", englishName: "Al-Fatiha", englishMeaning: "The Opening", verses: 7 },
  { number: 2, name: "البقرة", englishName: "Al-Baqarah", englishMeaning: "The Cow", verses: 286 },
  { number: 3, name: "آل عمران", englishName: "Aal-Imran", englishMeaning: "Family of Imran", verses: 200 },
  { number: 4, name: "النساء", englishName: "An-Nisa", englishMeaning: "The Women", verses: 176 },
  { number: 5, name: "المائدة", englishName: "Al-Ma'idah", englishMeaning: "The Table Spread", verses: 120 },
  { number: 6, name: "الأنعام", englishName: "Al-An'am", englishMeaning: "The Cattle", verses: 165 },
  { number: 7, name: "الأعراف", englishName: "Al-A'raf", englishMeaning: "The Heights", verses: 206 },
  { number: 8, name: "الأنفال", englishName: "Al-Anfal", englishMeaning: "The Spoils of War", verses: 75 },
  { number: 9, name: "التوبة", englishName: "At-Tawbah", englishMeaning: "The Repentance", verses: 129 },
  { number: 10, name: "يونس", englishName: "Yunus", englishMeaning: "Jonah", verses: 109 },
  { number: 11, name: "هود", englishName: "Hud", englishMeaning: "Hud", verses: 123 },
  { number: 12, name: "يوسف", englishName: "Yusuf", englishMeaning: "Joseph", verses: 111 },
  { number: 13, name: "الرعد", englishName: "Ar-Ra'd", englishMeaning: "The Thunder", verses: 43 },
  { number: 14, name: "ابراهيم", englishName: "Ibrahim", englishMeaning: "Abraham", verses: 52 },
  { number: 15, name: "الحجر", englishName: "Al-Hijr", englishMeaning: "The Rocky Tract", verses: 99 },
  { number: 16, name: "النحل", englishName: "An-Nahl", englishMeaning: "The Bee", verses: 128 },
  { number: 17, name: "الإسراء", englishName: "Al-Isra", englishMeaning: "The Night Journey", verses: 111 },
  { number: 18, name: "الكهف", englishName: "Al-Kahf", englishMeaning: "The Cave", verses: 110 },
  { number: 19, name: "مريم", englishName: "Maryam", englishMeaning: "Mary", verses: 98 },
  { number: 20, name: "طه", englishName: "Ta-Ha", englishMeaning: "Ta-Ha", verses: 135 },
  { number: 21, name: "الأنبياء", englishName: "Al-Anbya", englishMeaning: "The Prophets", verses: 112 },
  { number: 22, name: "الحج", englishName: "Al-Hajj", englishMeaning: "The Pilgrimage", verses: 78 },
  { number: 23, name: "المؤمنون", englishName: "Al-Mu'minun", englishMeaning: "The Believers", verses: 118 },
  { number: 24, name: "النور", englishName: "An-Nur", englishMeaning: "The Light", verses: 64 },
  { number: 25, name: "الفرقان", englishName: "Al-Furqan", englishMeaning: "The Criterion", verses: 77 },
  { number: 26, name: "الشعراء", englishName: "Ash-Shu'ara", englishMeaning: "The Poets", verses: 227 },
  { number: 27, name: "النمل", englishName: "An-Naml", englishMeaning: "The Ant", verses: 93 },
  { number: 28, name: "القصص", englishName: "Al-Qasas", englishMeaning: "The Stories", verses: 88 },
  { number: 29, name: "العنكبوت", englishName: "Al-Ankabut", englishMeaning: "The Spider", verses: 69 },
  { number: 30, name: "الروم", englishName: "Ar-Rum", englishMeaning: "The Romans", verses: 60 },
  { number: 31, name: "لقمان", englishName: "Luqman", englishMeaning: "Luqman", verses: 34 },
  { number: 32, name: "السجدة", englishName: "As-Sajdah", englishMeaning: "The Prostration", verses: 30 },
  { number: 33, name: "الأحزاب", englishName: "Al-Ahzab", englishMeaning: "The Combined Forces", verses: 73 },
  { number: 34, name: "سبإ", englishName: "Saba", englishMeaning: "Sheba", verses: 54 },
  { number: 35, name: "فاطر", englishName: "Fatir", englishMeaning: "The Originator", verses: 45 },
  { number: 36, name: "يس", englishName: "Ya-Sin", englishMeaning: "Ya Sin", verses: 83 },
  { number: 37, name: "الصافات", englishName: "As-Saffat", englishMeaning: "Those who set the Ranks", verses: 182 },
  { number: 38, name: "ص", englishName: "Sad", englishMeaning: "The Letter Sad", verses: 88 },
  { number: 39, name: "الزمر", englishName: "Az-Zumar", englishMeaning: "The Groups", verses: 75 },
  { number: 40, name: "غافر", englishName: "Ghafir", englishMeaning: "The Forgiver", verses: 85 },
  { number: 41, name: "فصلت", englishName: "Fussilat", englishMeaning: "Explained in Detail", verses: 54 },
  { number: 42, name: "الشورى", englishName: "Ash-Shura", englishMeaning: "The Consultation", verses: 53 },
  { number: 43, name: "الزخرف", englishName: "Az-Zukhruf", englishMeaning: "The Ornaments of Gold", verses: 89 },
  { number: 44, name: "الدخان", englishName: "Ad-Dukhan", englishMeaning: "The Smoke", verses: 59 },
  { number: 45, name: "الجاثية", englishName: "Al-Jathiya", englishMeaning: "The Crouching", verses: 37 },
  { number: 46, name: "الأحقاف", englishName: "Al-Ahqaf", englishMeaning: "The Wind-Curved Sandhills", verses: 35 },
  { number: 47, name: "محمد", englishName: "Muhammad", englishMeaning: "Muhammad", verses: 38 },
  { number: 48, name: "الفتح", englishName: "Al-Fath", englishMeaning: "The Victory", verses: 29 },
  { number: 49, name: "الحجرات", englishName: "Al-Hujurat", englishMeaning: "The Rooms", verses: 18 },
  { number: 50, name: "ق", englishName: "Qaf", englishMeaning: "The Letter Qaf", verses: 45 },
  { number: 51, name: "الذاريات", englishName: "Adh-Dhariyat", englishMeaning: "The Winnowing Winds", verses: 60 },
  { number: 52, name: "الطور", englishName: "At-Tur", englishMeaning: "The Mount", verses: 49 },
  { number: 53, name: "النجم", englishName: "An-Najm", englishMeaning: "The Star", verses: 62 },
  { number: 54, name: "القمر", englishName: "Al-Qamar", englishMeaning: "The Moon", verses: 55 },
  { number: 55, name: "الرحمن", englishName: "Ar-Rahman", englishMeaning: "The Beneficent", verses: 78 },
  { number: 56, name: "الواقعة", englishName: "Al-Waqi'a", englishMeaning: "The Inevitable", verses: 96 },
  { number: 57, name: "الحديد", englishName: "Al-Hadid", englishMeaning: "The Iron", verses: 29 },
  { number: 58, name: "المجادلة", englishName: "Al-Mujadila", englishMeaning: "The Pleading Woman", verses: 22 },
  { number: 59, name: "الحشر", englishName: "Al-Hashr", englishMeaning: "The Exile", verses: 24 },
  { number: 60, name: "الممتحنة", englishName: "Al-Mumtahana", englishMeaning: "She that is to be examined", verses: 13 },
  { number: 61, name: "الصف", englishName: "As-Saf", englishMeaning: "The Ranks", verses: 14 },
  { number: 62, name: "الجمعة", englishName: "Al-Jumu'ah", englishMeaning: "Friday", verses: 11 },
  { number: 63, name: "المنافقون", englishName: "Al-Munafiqun", englishMeaning: "The Hypocrites", verses: 11 },
  { number: 64, name: "التغابن", englishName: "At-Taghabun", englishMeaning: "The Mutual Disillusion", verses: 18 },
  { number: 65, name: "الطلاق", englishName: "At-Talaq", englishMeaning: "The Divorce", verses: 12 },
  { number: 66, name: "التحريم", englishName: "At-Tahrim", englishMeaning: "The Prohibition", verses: 12 },
  { number: 67, name: "الملك", englishName: "Al-Mulk", englishMeaning: "The Sovereignty", verses: 30 },
  { number: 68, name: "القلم", englishName: "Al-Qalam", englishMeaning: "The Pen", verses: 52 },
  { number: 69, name: "الحاقة", englishName: "Al-Haqqah", englishMeaning: "The Reality", verses: 52 },
  { number: 70, name: "المعارج", englishName: "Al-Ma'arij", englishMeaning: "The Ascending Stairways", verses: 44 },
  { number: 71, name: "نوح", englishName: "Nuh", englishMeaning: "Noah", verses: 28 },
  { number: 72, name: "الجن", englishName: "Al-Jinn", englishMeaning: "The Jinn", verses: 28 },
  { number: 73, name: "المزمل", englishName: "Al-Muzzammil", englishMeaning: "The Enshrouded One", verses: 20 },
  { number: 74, name: "المدثر", englishName: "Al-Muddaththir", englishMeaning: "The Cloaked One", verses: 56 },
  { number: 75, name: "القيامة", englishName: "Al-Qiyamah", englishMeaning: "The Resurrection", verses: 40 },
  { number: 76, name: "الانسان", englishName: "Al-Insan", englishMeaning: "The Man", verses: 31 },
  { number: 77, name: "المرسلات", englishName: "Al-Mursalat", englishMeaning: "Those Sent Forth", verses: 50 },
  { number: 78, name: "النبإ", englishName: "An-Naba", englishMeaning: "The Announcement", verses: 40 },
  { number: 79, name: "النازعات", englishName: "An-Nazi'at", englishMeaning: "Those who drag forth", verses: 46 },
  { number: 80, name: "عبس", englishName: "Abasa", englishMeaning: "He Frowned", verses: 42 },
  { number: 81, name: "التكوير", englishName: "At-Takwir", englishMeaning: "The Overthrowing", verses: 29 },
  { number: 82, name: "الإنفطار", englishName: "Al-Infitar", englishMeaning: "The Cleaving", verses: 19 },
  { number: 83, name: "المطففين", englishName: "Al-Mutaffifin", englishMeaning: "The Defrauding", verses: 36 },
  { number: 84, name: "الإنشقاق", englishName: "Al-Inshiqaq", englishMeaning: "The Splitting Open", verses: 25 },
  { number: 85, name: "البروج", englishName: "Al-Buruj", englishMeaning: "The Mansions of the Stars", verses: 22 },
  { number: 86, name: "الطارق", englishName: "At-Tariq", englishMeaning: "The Night Comer", verses: 17 },
  { number: 87, name: "الأعلى", englishName: "Al-A'la", englishMeaning: "The Most High", verses: 19 },
  { number: 88, name: "الغاشية", englishName: "Al-Ghashiyah", englishMeaning: "The Overwhelming", verses: 26 },
  { number: 89, name: "الفجر", englishName: "Al-Fajr", englishMeaning: "The Dawn", verses: 30 },
  { number: 90, name: "البلد", englishName: "Al-Balad", englishMeaning: "The City", verses: 20 },
  { number: 91, name: "الشمس", englishName: "Ash-Shams", englishMeaning: "The Sun", verses: 15 },
  { number: 92, name: "الليل", englishName: "Al-Layl", englishMeaning: "The Night", verses: 21 },
  { number: 93, name: "الضحى", englishName: "Ad-Dhuha", englishMeaning: "The Morning Hours", verses: 11 },
  { number: 94, name: "الشرح", englishName: "Ash-Sharh", englishMeaning: "The Relief", verses: 8 },
  { number: 95, name: "التين", englishName: "At-Tin", englishMeaning: "The Fig", verses: 8 },
  { number: 96, name: "العلق", englishName: "Al-Alaq", englishMeaning: "The Clot", verses: 19 },
  { number: 97, name: "القدر", englishName: "Al-Qadr", englishMeaning: "The Power", verses: 5 },
  { number: 98, name: "البينة", englishName: "Al-Bayyinah", englishMeaning: "The Clear Proof", verses: 8 },
  { number: 99, name: "الزلزلة", englishName: "Az-Zalzalah", englishMeaning: "The Earthquake", verses: 8 },
  { number: 100, name: "العاديات", englishName: "Al-Adiyat", englishMeaning: "The Courser", verses: 11 },
  { number: 101, name: "القارعة", englishName: "Al-Qari'ah", englishMeaning: "The Calamity", verses: 11 },
  { number: 102, name: "التكاثر", englishName: "At-Takathur", englishMeaning: "The Rivalry in world increase", verses: 8 },
  { number: 103, name: "العصر", englishName: "Al-Asr", englishMeaning: "The Declining Day", verses: 3 },
  { number: 104, name: "الهمزة", englishName: "Al-Humazah", englishMeaning: "The Traducer", verses: 9 },
  { number: 105, name: "الفيل", englishName: "Al-Fil", englishMeaning: "The Elephant", verses: 5 },
  { number: 106, name: "قريش", englishName: "Quraysh", englishMeaning: "Quraysh", verses: 4 },
  { number: 107, name: "الماعون", englishName: "Al-Ma'un", englishMeaning: "The Small Kindnesses", verses: 7 },
  { number: 108, name: "الكوثر", englishName: "Al-Kawthar", englishMeaning: "The Abundance", verses: 3 },
  { number: 109, name: "الكافرون", englishName: "Al-Kafirun", englishMeaning: "The Disbelievers", verses: 6 },
  { number: 110, name: "النصر", englishName: "An-Nasr", englishMeaning: "The Divine Support", verses: 3 },
  { number: 111, name: "المسد", englishName: "Al-Masad", englishMeaning: "The Palm Fiber", verses: 5 },
  { number: 112, name: "الإخلاص", englishName: "Al-Ikhlas", englishMeaning: "The Sincerity", verses: 4 },
  { number: 113, name: "الفلق", englishName: "Al-Falaq", englishMeaning: "The Daybreak", verses: 5 },
  { number: 114, name: "الناس", englishName: "An-Nas", englishMeaning: "Mankind", verses: 6 }
];

const Surahs = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-quran-primary mb-2">Surahs of the Holy Quran</h1>
        <p className="text-gray-600">Click on any surah to read its verses</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {surahList.map((surah) => (
          <Link 
            key={surah.number}
            to={`/surah/${surah.number}`}
            className="block transition-transform hover:scale-[1.02]"
          >
            <Card className="hover:shadow-lg transition-shadow border-quran-light">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-quran-primary">{surah.number}.</span>
                      <span className="text-xl">{surah.englishName}</span>
                    </CardTitle>
                    <CardDescription>{surah.englishMeaning}</CardDescription>
                  </div>
                  <span className="font-arabic text-2xl text-quran-primary">{surah.name}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{surah.verses} verses</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Surahs;
