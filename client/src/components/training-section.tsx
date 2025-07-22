import { GraduationCap, Target, Users, Shield, Brain, Handshake, Crown, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const trainingCategories = [
  {
    title: "Grundausbildung",
    description: "Essentielle Fähigkeiten für alle Rekruten",
    icon: GraduationCap,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    trainings: [
      "Militärische Grundlagen & Hierarchie",
      "Kommunikation & Protokolle", 
      "Physische Fitness & Kondition",
      "Erste Hilfe & Notfallmedizin"
    ]
  },
  {
    title: "Waffen & Taktik",
    description: "Kampftraining und taktische Ausbildung", 
    icon: Target,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    trainings: [
      "Waffensicherheit & Handhabung",
      "Präzisionsschießen",
      "Taktische Bewegungen",
      "Nahkampftechniken"
    ]
  },
  {
    title: "Teamwork & Führung",
    description: "Führungsqualitäten und Teamkoordination",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10", 
    borderColor: "border-blue-500/20",
    trainings: [
      "Teamführung & Motivation",
      "Konflikte lösen",
      "Einsatzplanung",
      "Entscheidungsfindung unter Druck"
    ]
  },
  {
    title: "Spezialisierungen",
    description: "Abteilungsspezifische Fähigkeiten",
    icon: Shield,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
    trainings: [
      "Military Police: Ermittlungen & Festnahmen",
      "SEALs: Verdeckte Operationen",
      "Infanterie: Territoriumskontrolle", 
      "Luftwaffe: Flugzeugführung & Navigation"
    ]
  }
];

const achievements = [
  { icon: Medal, title: "Grundausbildung", description: "Alle Basis-Module abgeschlossen" },
  { icon: Target, title: "Scharfschütze", description: "Präzisionsschießen gemeistert" },
  { icon: Users, title: "Teamleader", description: "Führungsqualifikation erhalten" },
  { icon: Crown, title: "Veteran", description: "Elite-Status erreicht" },
  { icon: Brain, title: "Stratege", description: "Taktische Meisterschaft" },
  { icon: Handshake, title: "Diplomat", description: "Verhandlungsexperte" }
];

export default function TrainingSection() {
  return (
    <section id="training" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Ausbildung & Training</h2>
          <p className="text-xl text-gray-300">Umfassende Ausbildungsprogramme für alle Karrierestufen</p>
        </div>

        {/* Training Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {trainingCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className={`${category.bgColor} ${category.borderColor} border-2 hover:scale-105 transition-transform`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-full flex items-center justify-center mr-4`}>
                      <Icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                      <p className="text-gray-300">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {category.trainings.map((training, trainingIndex) => (
                      <div key={trainingIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 ${category.color.replace('text-', 'bg-')} rounded-full`}></div>
                        <span className="text-gray-300">{training}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievement System */}
        <Card className="bg-[hsl(var(--military-dark))]/50 border-[hsl(var(--military-sage))]/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Leistungsabzeichen & Zertifizierungen</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="font-bold text-white mb-1">{achievement.title}</h4>
                    <p className="text-sm text-gray-400">{achievement.description}</p>
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
