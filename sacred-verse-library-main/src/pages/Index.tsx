
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto max-w-4xl space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-arabic font-bold text-quran-primary">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h1>
        <p className="text-xl text-gray-600">In the name of Allah, the Most Gracious, the Most Merciful</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Read Quran</CardTitle>
            <CardDescription>Access all surahs with translations</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => navigate("/surahs")}
              className="w-full bg-quran-primary hover:bg-quran-secondary"
            >
              Browse Surahs
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Search Verses</CardTitle>
            <CardDescription>Search through the entire Quran</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => navigate("/search")}
              className="w-full bg-quran-primary hover:bg-quran-secondary"
            >
              Search Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
