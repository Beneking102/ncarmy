import { Monitor, MessageSquare, Users, TrendingUp, Settings, Plus, Calendar, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const discordFeatures = [
  { icon: Users, text: "Automatisches Rollenmanagement" },
  { icon: TrendingUp, text: "Einsatzstatus-Tracking" },
  { icon: Settings, text: "Channel-Automatisierung" }
];

const webPanelFeatures = [
  { text: "Personalakte-Verwaltung", completed: true },
  { text: "Modul-Tracking", completed: true },
  { text: "Schichtplanung", completed: true },
  { text: "Dokumenten-Management", completed: true }
];

const missionSteps = [
  { icon: Plus, title: "1. Mission anlegen", description: "Titel und Beschreibung eingeben" },
  { icon: Users, title: "2. Team zusammenstellen", description: "Teilnehmer auswählen" },
  { icon: Calendar, title: "3. Zeitplan festlegen", description: "Datum und Uhrzeit bestimmen" },
  { icon: Rocket, title: "4. Mission starten", description: "Automatische Benachrichtigung" }
];

export default function ToolsSection() {
  return (
    <section id="tools" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Digitale Tools</h2>
          <p className="text-xl text-gray-300">Modernste Technologie für effiziente Verwaltung und Koordination</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Discord Bot */}
          <Card className="bg-[hsl(var(--military-dark))]/50 border-[hsl(var(--military-sage))]/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <MessageSquare className="h-12 w-12 text-blue-500 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-white">Discord Bot</h3>
                  <p className="text-gray-300">Automatisierte Verwaltung und Kommunikation</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                {discordFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="text-gray-300">{feature.text}</span>
                    </div>
                  );
                })}
              </div>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <p className="text-sm text-gray-300 font-mono">
                    !nc-army status<br />
                    !nc-army mission create<br />
                    !nc-army rank promote @user
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Web Panel */}
          <Card className="bg-[hsl(var(--military-dark))]/50 border-[hsl(var(--military-sage))]/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Monitor className="h-12 w-12 text-primary mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-white">Web Panel</h3>
                  <p className="text-gray-300">Zentrale Verwaltungsplattform</p>
                </div>
              </div>

              {/* Mock dashboard placeholder */}
              <Card className="bg-gray-800 border-2 border-dashed border-gray-600 mb-4">
                <CardContent className="p-6">
                  <div className="text-center text-gray-400">
                    <TrendingUp className="h-16 w-16 mx-auto mb-2" />
                    <p className="font-bold">Dashboard Screenshot</p>
                    <p className="text-sm">Einsatz- und Trainingsübersicht</p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                {webPanelFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <span className="text-gray-300">{feature.text}</span>
                    <div className="h-5 w-5 bg-primary rounded-full flex items-center justify-center">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission Creation Demo */}
        <Card className="mt-12 bg-[hsl(var(--military-charcoal))]/30 border-[hsl(var(--military-sage))]/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Mission erstellen - Demo Flow</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {missionSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-bold mb-2 text-white">{step.title}</h4>
                    <p className="text-sm text-gray-300">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
