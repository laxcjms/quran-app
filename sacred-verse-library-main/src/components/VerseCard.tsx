
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Verse } from "@/data/versesData";

interface VerseCardProps {
  verse: Verse;
}

export const VerseCard = ({ verse }: VerseCardProps) => {
  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">Verse {verse.number}</span>
        </div>
        <div className="space-y-4">
          <p className="text-right text-3xl font-arabic leading-loose text-quran-primary">
            {verse.arabic}
          </p>
          <Separator className="my-4" />
          <p className="text-lg text-gray-600 italic">
            {verse.transliteration}
          </p>
          <p className="text-gray-700">
            {verse.translation}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
