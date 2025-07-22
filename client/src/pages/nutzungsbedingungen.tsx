import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Nutzungsbedingungen() {
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
              <h1 className="text-3xl font-bold mb-8 text-white">Nutzungsbedingungen</h1>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h2 className="text-xl font-bold mb-2 text-white">1. Geltungsbereich</h2>
                  <p>
                    Diese Nutzungsbedingungen gelten für die Teilnahme an der NC-Army, 
                    einer Roleplay-Organisation innerhalb des Narco City Gaming-Universums.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2 text-white">2. Teilnahmebedingungen</h2>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Mindestalter von 18 Jahren</li>
                    <li>Respektvoller Umgang mit allen Mitgliedern</li>
                    <li>Einhaltung der Roleplay-Regeln</li>
                    <li>Aktive Teilnahme an Trainings und Missionen</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2 text-white">3. Verhaltenskodex</h2>
                  <p>
                    Alle Mitglieder verpflichten sich zu:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Respektvollem und professionellem Auftreten</li>
                    <li>Einhaltung der militärischen Hierarchie im Roleplay</li>
                    <li>Schutz sensibler Informationen der Organisation</li>
                    <li>Konstruktive Mitarbeit und Teamgeist</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2 text-white">4. Ausschluss</h2>
                  <p>
                    Verstöße gegen diese Bedingungen können zum sofortigen Ausschluss 
                    aus der Organisation führen. Die Entscheidung liegt beim Generalstab.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2 text-white">5. Änderungen</h2>
                  <p>
                    Wir behalten uns vor, diese Nutzungsbedingungen jederzeit zu ändern. 
                    Änderungen werden über unsere offiziellen Kanäle kommuniziert.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2 text-white">6. Kontakt</h2>
                  <p>
                    Bei Fragen zu den Nutzungsbedingungen wenden Sie sich an: 
                    support@nc-army.narco-city.de
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