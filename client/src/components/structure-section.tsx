import { useState, useEffect, useRef } from "react";
import { Crown, Star, ChevronUp, Shield, User, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const ranks = [
  {
    id: "generaele",
    icon: Crown,
    title: "GENERÄLE",
    description: "SUPREME COMMAND • HÖCHSTE FÜHRUNGSEBENE",
    stars: "★★★★★",
    positions: "5 POSITIONEN",
    color: "border-red-400 text-red-400",
    bgColor: "bg-red-400/10",
    details: "VOLLSTÄNDIGE BEFEHLSGEWALT ÜBER ALLE EINHEITEN. STRATEGISCHE PLANUNG UND ENTSCHEIDUNGSFINDUNG AUF HÖCHSTER EBENE.",
    clearanceLevel: "COMMAND"
  },
  {
    id: "abteilungsleitung",
    icon: Star,
    title: "ABTEILUNGSLEITUNG",
    description: "DEPARTMENTAL COMMAND • FACHBEREICHSLEITUNG",
    stars: "★★★★",
    positions: "8 POSITIONEN",
    color: "border-yellow-400 text-yellow-400",
    bgColor: "bg-yellow-400/10",
    details: "VERANTWORTLICH FÜR STRATEGISCHE AUSRICHTUNG UND OPERATIVE FÜHRUNG DER JEWEILIGEN ABTEILUNGEN.",
    clearanceLevel: "EXECUTIVE"
  },
  {
    id: "drill-sergeants",
    icon: Target,
    title: "DRILL SERGEANTS",
    description: "TRAINING COMMAND • AUSBILDUNGSLEITUNG",
    stars: "★★★",
    positions: "10 POSITIONEN",
    color: "border-[hsl(var(--military-success))] text-[hsl(var(--military-success))]",
    bgColor: "bg-[hsl(var(--military-success))]/10",
    details: "AUSBILDUNG NEUER REKRUTEN UND KONTINUIERLICHE WEITERBILDUNG AKTIVER SOLDATEN.",
    clearanceLevel: "TRAINING"
  },
  {
    id: "soldaten",
    icon: Shield,
    title: "SOLDATEN",
    description: "FIELD OPERATIONS • AKTIVER DIENST",
    stars: "★★",
    positions: "UNBEGRENZT",
    color: "border-blue-400 text-blue-400",
    bgColor: "bg-blue-400/10",
    details: "OPERATIVE EINSÄTZE, PATROUILLENDIENST UND SICHERUNG VON NARCO CITY.",
    clearanceLevel: "OPERATIONAL"
  },
  {
    id: "recruits",
    icon: User,
    title: "REKRUTEN",
    description: "TRAINING PHASE • AUSBILDUNGSPHASE",
    stars: "★",
    positions: "15 AUSBILDUNGSPLÄTZE",
    color: "border-gray-400 text-gray-400",
    bgColor: "bg-gray-400/10",
    details: "GRUNDAUSBILDUNG UND BEWÄHRUNG FÜR DEN AUFSTIEG ZU SOLDATEN.",
    clearanceLevel: "RECRUIT"
  }
];

export default function StructureSection() {
  const [hoveredRank, setHoveredRank] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="structure" className="py-20 bg-[hsl(var(--military-charcoal))] tactical-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="mb-4 flex justify-center">
            <div className="px-4 py-2 bg-[hsl(var(--military-success))]/10 border border-[hsl(var(--military-success))]/30">
              <span className="text-[hsl(var(--military-success))] font-mono text-sm uppercase tracking-widest">[RANGSTRUKTUR]</span>
            </div>
          </div>
          <h2 className="military-heading text-5xl md:text-6xl mb-6 text-white">STRUKTUR & RÄNGE</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto font-mono leading-relaxed">
            HIERARCHISCHE KOMMANDOSTRUKTUR • KLARE BEFEHLSKETTE<br />
            <span className="text-[hsl(var(--military-success))]">INTERAKTIVE RANGLISTE MIT SICHERHEITSFREIGABEN</span>
          </p>
        </div>

        <div className="space-y-6">
          {ranks.map((rank, index) => {
            const Icon = rank.icon;
            return (
              <Tooltip key={rank.id}>
                <TooltipTrigger asChild>
                  <Card
                    className={`${rank.bgColor} border-2 ${rank.color.split(' ')[0]} transition-all cursor-pointer hover:scale-105 duration-500 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                    onMouseEnter={() => setHoveredRank(rank.id)}
                    onMouseLeave={() => setHoveredRank(null)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <div className={`w-16 h-16 ${rank.bgColor} border-2 ${rank.color.split(' ')[0]} flex items-center justify-center`}>
                            <Icon className={`h-8 w-8 ${rank.color.split(' ')[1]}`} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white military-heading">{rank.title}</h3>
                            <p className="text-gray-300 font-mono text-sm">{rank.description}</p>
                            <div className="mt-1 flex items-center space-x-2">
                              <span className="text-xs text-[hsl(var(--military-desert))] font-mono">CLEARANCE:</span>
                              <span className={`text-xs font-bold ${rank.color.split(' ')[1]} font-mono`}>{rank.clearanceLevel}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-3xl font-bold ${rank.color.split(' ')[1]} font-mono`}>{rank.stars}</div>
                          <p className="text-sm text-gray-400 font-mono uppercase tracking-wider">{rank.positions}</p>
                        </div>
                      </div>
                      {hoveredRank === rank.id && (
                        <div className="mt-6 p-4 bg-[hsl(var(--military-charcoal))]/50 border border-[hsl(var(--military-success))]/20">
                          <p className="text-sm text-gray-300 font-mono">{rank.details}</p>
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
