import { Scale, Shield, Users, Target, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const missions = [
  {
    icon: Scale,
    title: "Ordnung",
    description: "Aufrechterhaltung von Recht und Ordnung"
  },
  {
    icon: Shield,
    title: "Grenzschutz",
    description: "Sicherung der Stadtgrenzen"
  },
  {
    icon: Users,
    title: "Zivile Unterstützung",
    description: "Hilfe für die Bevölkerung"
  },
  {
    icon: Target,
    title: "Spezialoperationen",
    description: "Gezielte Einsätze"
  },
  {
    icon: GraduationCap,
    title: "Ausbildung",
    description: "Training und Entwicklung"
  }
];

const generals = [
  { name: "General Alpha", department: "Military Police" },
  { name: "General Bravo", department: "SEALs" },
  { name: "General Charlie", department: "Infanterie" },
  { name: "General Delta", department: "Luftwaffe" },
  { name: "General Echo", department: "Ausbildung" }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Mandat & Aufgabenprofil</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Die NC-Army ist die zentrale Sicherheitsorganisation von Narco City mit umfassenden Befugnissen für innere und äußere Sicherheit.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <Card 
                key={index} 
                className="text-center p-6 bg-[hsl(var(--military-dark))]/50 border-[hsl(var(--military-sage))]/20 hover:bg-[hsl(var(--military-dark))]/70 transition-all"
              >
                <CardContent className="p-0">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2 text-white">{mission.title}</h3>
                  <p className="text-sm text-gray-300">{mission.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Command Structure */}
        <Card className="bg-[hsl(var(--military-charcoal))]/30 border-[hsl(var(--military-sage))]/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Kommandostruktur</h3>
            <div className="grid md:grid-cols-5 gap-6">
              {/* Army-01 commanding officer */}
              <div className="col-span-5 text-center mb-8">
                <div className="w-32 h-32 bg-[hsl(var(--military-dark))] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-16 w-16 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-white">Army-01</h4>
                <p className="text-primary">Oberkommandierender</p>
              </div>
              
              {/* Four generals */}
              {generals.map((general, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 bg-[hsl(var(--military-olive))] rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h5 className="font-bold text-white">{general.name}</h5>
                  <p className="text-sm text-gray-300">{general.department}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
