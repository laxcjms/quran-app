
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { VerseCard } from "@/components/VerseCard";
import { surahList } from "@/data/surahList";
import { versesData } from "@/data/versesData";

const Surah = () => {
  const { id } = useParams();
  const surahNumber = parseInt(id || "1");
  const surah = surahList.find(s => s.number === surahNumber);
  const verses = versesData[surahNumber as keyof typeof versesData] || [];

  if (!surah) {
    return (
      <div className="container mx-auto max-w-4xl">
        <Card className="mb-6">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-red-500">Surah not found</h1>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl">
      <Card className="mb-6">
        <CardHeader>
          <div className="flex justify-between items-start mb-4">
            <div>
              <CardTitle className="text-3xl font-bold text-quran-primary">
                {surah.englishName}
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                {surah.englishMeaning}
              </CardDescription>
            </div>
            <div className="text-right">
              <h2 className="text-4xl font-arabic text-quran-primary mb-2">
                {surah.name}
              </h2>
              <p className="text-gray-600">
                {surah.verses} verses
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <h3 className="font-semibold text-quran-primary mb-2">About this Surah</h3>
              <p className="text-gray-700">
                This is Surah {surah.englishName}, the {surah.number}th chapter of the Holy Quran. 
                It contains {surah.verses} verses and its name means "{surah.englishMeaning}" in English.
              </p>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-quran-primary mb-4">Verses</h3>
              <div className="space-y-6">
                {verses.length > 0 ? (
                  verses.map((verse) => (
                    <VerseCard key={verse.number} verse={verse} />
                  ))
                ) : (
                  <Card className="bg-gray-50">
                    <CardContent className="p-6">
                      <p className="text-gray-600 text-center py-8">
                        Verses for this Surah will be added soon
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Surah;
