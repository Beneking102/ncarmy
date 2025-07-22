import { useState } from "react";
import { Crown, Star, ChevronUp, Shield, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const ranks = [
  {
    id: "oberkommando",
    icon: Crown,
    title: "Oberkommando",
    description: "Höchste Führungsebene der NC-Army",
    stars: "★★★★",
    positions: "1 Position",
    color: "border-red-500 text-red-500",
    details: "Vollständige Befehlsgewalt über alle Einheiten. Strategische Planung und Entscheidungsfindung auf höchster Ebene."
  },
  {
    id: "abteilungsleitung",
    icon: Star,
    title: "Abteilungsleitung",
    description: "Leitung der einzelnen Fachbereiche",
    stars: "★★★",
    positions: "5 Positionen",
    color: "border-yellow-500 text-yellow-500",
    details: "Verantwortlich für die strategische Ausrichtung und operative Führung ihrer jeweiligen Abteilungen."
  },
  {
    id: "drill-sergeants",
    icon: ChevronUp,
    title: "Drill Sergeants / Ausbilder",
    description: "Verantwortlich für Training und Ausbildung",
    stars: "★★",
    positions: "10 Positionen",
    color: "border-primary text-primary",
    details: "Ausbildung neuer Rekruten und kontinuierliche Weiterbildung aktiver Soldaten."
  },
  {
    id: "active-duty",
    icon: Shield,
    title: "Active Duty Soldiers",
    description: "Vollwertige Soldaten im aktiven Dienst",
    stars: "★",
    positions: "Unbegrenzt",
    color: "border-blue-500 text-blue-500",
    details: "Operative Einsätze, Patrouillendienst und Sicherung von Narco City."
  },
  {
    id: "recruits",
    icon: User,
    title: "Rekruten",
    description: "Neue Mitglieder in der Ausbildung",
    stars: "○",
    positions: "Ausbildungsphase",
    color: "border-gray-500 text-gray-500",
    details: "Grundausbildung und Bewährung für den Aufstieg zu Active Duty Soldiers."
  }
];

export default function StructureSection() {
  const [hoveredRank, setHoveredRank] = useState<string | null>(null);

  return (
    <section id="structure" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Struktur & Ränge</h2>
          <p className="text-xl text-gray-300">Interaktive Rangliste mit detaillierten Informationen zu jedem Dienstgrad</p>
        </div>

        <div className="space-y-4">
          {ranks.map((rank) => {
            const Icon = rank.icon;
            return (
              <Tooltip key={rank.id}>
                <TooltipTrigger asChild>
                  <Card
                    className={`rank-card bg-[hsl(var(--military-dark))] border-l-4 ${rank.color.split(' ')[0]} transition-all cursor-pointer hover:shadow-xl`}
                    onMouseEnter={() => setHoveredRank(rank.id)}
                    onMouseLeave={() => setHoveredRank(null)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Icon className={`h-8 w-8 ${rank.color.split(' ')[1]}`} />
                          <div>
                            <h3 className="text-xl font-bold text-white">{rank.title}</h3>
                            <p className="text-gray-300">{rank.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${rank.color.split(' ')[1]}`}>{rank.stars}</div>
                          <p className="text-sm text-gray-400">{rank.positions}</p>
                        </div>
                      </div>
                      {hoveredRank === rank.id && (
                        <div className="mt-4 p-4 bg-gray-800 rounded transition-all">
                          <p className="text-sm text-gray-300">{rank.details}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{rank.details}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </section>
  );
}
