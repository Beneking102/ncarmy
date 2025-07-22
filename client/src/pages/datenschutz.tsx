import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Datenschutz() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="pt-20 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Button onClick={handleBack} variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück
            </Button>
          </div>
          
          <Card className="bg-[hsl(var(--military-dark))]/50 border-[hsl(var(--military-sage))]/20">
            <CardContent className="p-8">
              <h1 className="text-3xl font-bold mb-8 text-white">Datenschutzerklärung</h1>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h2 className="text-xl font-bold mb-2 text-white">1. Erhebung und Verarbeitung von Daten</h2>
                  <p>
                    Wir erheben und verarbeiten personenbezogene Daten nur, wenn Sie uns diese freiwillig 
                    zur Verfügung stellen, z.B. durch Ausfüllen unserer Kontakt- oder Bewerbungsformulare.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2 text-white">2. Verwendung der Daten</h2>
                  <p>
                    Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfragen und für die 
                    Roleplay-Organisation verwendet. Eine Weitergabe an Dritte erfolgt nicht.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2 text-white">3. Discord Integration</h2>
                  <p>
                    Bei der Nutzung unserer Discord-Integration gelten zusätzlich die 
                    Datenschutzbestimmungen von Discord Inc. Weitere Informationen finden Sie 
                    in der Discord-Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2 text-white">4. Cookies</h2>
                  <p>
                    Diese Website verwendet keine Tracking-Cookies. Technisch notwendige Cookies 
                    werden nur für die Funktionalität der Website verwendet.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2 text-white">5. Ihre Rechte</h2>
                  <p>
                    Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Sperrung 
                    Ihrer personenbezogenen Daten. Kontaktieren Sie uns über die angegebenen 
                    Kontaktdaten.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2 text-white">6. Kontakt</h2>
                  <p>
                    Bei Fragen zum Datenschutz wenden Sie sich an: support@nc-army.narco-city.de
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}