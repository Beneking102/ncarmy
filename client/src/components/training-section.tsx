import { GraduationCap, Target, Users, Shield, Brain, Handshake, Crown, Medal, Award, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";

const trainingCategories = [
  {
    title: "GRUNDAUSBILDUNG",
    code: "BASIC",
    description: "ESSENTIELLE FÄHIGKEITEN FÜR ALLE REKRUTEN",
    icon: GraduationCap,
    color: "text-[hsl(var(--military-success))]",
    bgColor: "bg-[hsl(var(--military-success))]/10",
    borderColor: "border-[hsl(var(--military-success))]",
    duration: "5-7 TAGE",
    trainings: [
      "MILITÄRISCHE GRUNDLAGEN & HIERARCHIE",
      "KOMMUNIKATION & PROTOKOLLE", 
      "PHYSISCHE FITNESS & KONDITION",
      "ERSTE HILFE & NOTFALLMEDIZIN"
    ]
  },
  {
    title: "WAFFEN & TAKTIK",
    code: "COMBAT",
    description: "KAMPFTRAINING UND TAKTISCHE AUSBILDUNG", 
    icon: Target,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400",
    trainings: [
      "WAFFENSICHERHEIT & HANDHABUNG",
      "PRÄZISIONSSCHIESSSEN",
      "TAKTISCHE BEWEGUNGEN",
      "NAHKAMPFTECHNIKEN"
    ]
  },
  {
    title: "FÜHRUNG & TEAMWORK",
    code: "LEADER",
    description: "FÜHRUNGSQUALITÄTEN UND TEAMKOORDINATION",
    icon: Users,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10", 
    borderColor: "border-blue-400",
    trainings: [
      "TEAMFÜHRUNG & MOTIVATION",
      "KONFLIKTE LÖSEN",
      "EINSATZPLANUNG",
      "ENTSCHEIDUNGSFINDUNG UNTER DRUCK"
    ]
  },
  {
    title: "SPEZIALISIERUNGEN",
    code: "SPEC",
    description: "ABTEILUNGSSPEZIFISCHE FÄHIGKEITEN",
    icon: Shield,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400",
    trainings: [
      "MILITARY POLICE: ERMITTLUNGEN & FESTNAHMEN",
      "SEALS: VERDECKTE OPERATIONEN",
      "INFANTERIE: TERRITORIUMSKONTROLLE", 
      "AIRFORCE: FLUGZEUGFÜHRUNG & NAVIGATION"
    ]
  }
];

const sonderposten = [
  { icon: Medal, title: "GRUNDAUSBILDUNG", code: "001", description: "ALLE BASIS-MODULE ABGESCHLOSSEN", color: "text-[hsl(var(--military-success))]" },
  { icon: Target, title: "AUSBILDER", code: "002", description: "BERECHTIGUNG ZUR REKRUTENAUSBILDUNG", color: "text-red-400" },
  { icon: Users, title: "LEITSTELLENAUSBILDER", code: "003", description: "SPEZIALIST FÜR EINSATZKOORDINATION", color: "text-blue-400" },
  { icon: Crown, title: "AKTENKUNDE AUSBILDER", code: "004", description: "EXPERTE FÜR ADMINISTRATIVE VERFAHREN", color: "text-yellow-400" },
  { icon: Brain, title: "GWD-AUSBILDER", code: "005", description: "GRUNDWEHRDIENST AUSBILDUNGSLEITER", color: "text-purple-400" },
  { icon: Shield, title: "DRILL SERGEANT", code: "006", description: "ELITE AUSBILDUNGSFÜHRUNG", color: "text-orange-400" },
  { icon: Award, title: "ABTEILUNGSLEITUNG", code: "007", description: "FÜHRUNGSVERANTWORTUNG EINER ABTEILUNG", color: "text-cyan-400" }
];

export default function TrainingSection() {
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
    <section ref={sectionRef} id="training" className="py-20 bg-[hsl(var(--military-dark))] tactical-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="mb-4 flex justify-center">
            <div className="px-4 py-2 bg-[hsl(var(--military-success))]/10 border border-[hsl(var(--military-success))]/30">
              <span className="text-[hsl(var(--military-success))] font-mono text-sm uppercase tracking-widest">[AUSBILDUNG]</span>
            </div>
          </div>
          <h2 className="military-heading text-5xl md:text-6xl mb-6 text-white">AUSBILDUNGSPROGRAMM</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto font-mono leading-relaxed">
            UMFASSENDES AUSBILDUNGSPROGRAMM • HÖCHSTE MILITÄRISCHE STANDARDS<br />
            <span className="text-[hsl(var(--military-success))]">FORMT REKRUTEN ZU ELITESOLDATEN</span>
          </p>
        </div>

        {/* Training Categories */}
        <div className={`grid lg:grid-cols-2 gap-8 mb-16 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
          {trainingCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className={`${category.bgColor} ${category.borderColor} border-2 hover:scale-105 transition-all duration-500`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${category.bgColor} border-2 ${category.borderColor} flex items-center justify-center mr-4`}>
                      <Icon className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`text-sm px-3 py-1 ${category.bgColor} ${category.color} font-mono border ${category.borderColor}`}>
                          {category.code}
                        </span>
                        {category.duration && (
                          <span className="text-xs px-2 py-1 bg-gray-500/20 text-gray-400 border border-gray-500/30 font-mono">
                            {category.duration}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white military-heading">{category.title}</h3>
                      <p className="text-gray-300 text-sm font-mono">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.trainings.map((training, trainingIndex) => (
                      <div key={trainingIndex} className="flex items-center space-x-3 p-2 bg-[hsl(var(--military-charcoal))]/30 border border-gray-600">
                        <Zap className={`w-4 h-4 ${category.color} flex-shrink-0`} />
                        <span className="text-gray-300 font-mono text-sm">{training}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievement System */}
        <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <Card className="bg-[hsl(var(--military-charcoal))]/50 border-2 border-[hsl(var(--military-success))]/30">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[hsl(var(--military-success))]/20 border-2 border-[hsl(var(--military-success))] flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[hsl(var(--military-success))]" />
                </div>
                <h3 className="text-3xl font-bold military-heading text-white">SONDERPOSTEN</h3>
                <p className="text-gray-300 font-mono text-sm mt-2">SPEZIELLE POSITIONEN • FÜHRUNGSROLLEN • AUSBILDER</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {sonderposten.map((posten, index) => {
                  const Icon = posten.icon;
                  return (
                    <div key={index} className="text-center group bg-[hsl(var(--military-dark))]/50 p-4 border border-gray-600 hover:border-[hsl(var(--military-success))]/50 transition-all duration-300">
                      <div className="flex items-center justify-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-gray-700 border-2 border-gray-600 flex items-center justify-center group-hover:border-[hsl(var(--military-success))] transition-colors">
                          <Icon className={`h-6 w-6 ${posten.color} group-hover:text-[hsl(var(--military-success))] transition-colors`} />
                        </div>
                        <span className="text-xs px-2 py-1 bg-gray-500/20 text-gray-400 border border-gray-500/30 font-mono">
                          #{posten.code}
                        </span>
                      </div>
                      <h4 className="font-bold text-white mb-2 military-heading text-sm">{posten.title}</h4>
                      <p className="text-xs text-gray-400 font-mono">{posten.description}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
