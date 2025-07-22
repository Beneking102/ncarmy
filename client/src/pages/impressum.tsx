import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
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
              <h1 className="text-3xl font-bold mb-8 text-white">Impressum</h1>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h2 className="text-xl font-bold mb-2 text-white">Verantwortlich für den Inhalt</h2>
                  <p>NC-Army Narco City</p>
                  <p>Roleplay-Organisation</p>
                  <p>Discord-Server: https://discord.gg/jnMEj7w8Cs</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2 text-white">Kontakt</h2>
                  <p>E-Mail: support@nc-army.narco-city.de</p>
                  <p>Discord: NC-Army Official Server</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2 text-white">Haftungsausschluss</h2>
                  <p>
                    Die NC-Army ist eine fiktive Roleplay-Organisation innerhalb des Narco City Gaming-Universums. 
                    Alle Inhalte dienen ausschließlich der Unterhaltung und dem Roleplay. 
                    Wir übernehmen keine Haftung für externe Links oder Inhalte.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2 text-white">Urheberrecht</h2>
                  <p>
                    Alle Inhalte dieser Website sind urheberrechtlich geschützt. 
                    Die Verwendung von Texten, Grafiken oder anderen Inhalten ohne ausdrückliche 
                    Genehmigung ist nicht gestattet.
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