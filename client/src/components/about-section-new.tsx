import { Shield, Target, Users, Zap, Award, Crosshair, Eye, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Shield,
    title: "OPERATIVE SICHERHEIT",
    description: "Hochspezialisierte Einheiten für kritische Einsätze in urbanen Konfliktgebieten.",
    color: "text-[hsl(var(--military-success))]",
    bgColor: "bg-[hsl(var(--military-success))]/10",
    borderColor: "border-[hsl(var(--military-success))]/30"
  },
  {
    icon: Target,
    title: "TAKTISCHE PRÄZISION", 
    description: "Millimetergenau geplante Operationen mit minimalen Kollateralschäden.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/30"
  },
  {
    icon: Users,
    title: "EINHEITSKOHÄSION",
    description: "Unerschütterliche Kameradschaft und absolute Loyalität zur Truppe.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/30"
  },
  {
    icon: Zap,
    title: "RAPID RESPONSE",
    description: "Einsatzbereitschaft innerhalb von 60 Sekunden nach Alarmierung.",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/30"
  }
];

const militaryStats = [
  { label: "EINSÄTZE ERFOLGREICH", value: "100%", icon: Award },
  { label: "REAKTIONSZEIT", value: "<60s", icon: Clock },
  { label: "TREFFERQUOTE", value: "99.7%", icon: Crosshair },
  { label: "ÜBERWACHUNG", value: "24/7", icon: Eye }
];

export default function AboutSection() {
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
    <section ref={sectionRef} id="about" className="py-20 bg-[hsl(var(--military-dark))] tactical-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="mb-4 flex justify-center">
            <div className="px-4 py-2 bg-[hsl(var(--military-success))]/10 border border-[hsl(var(--military-success))]/30 rounded-none">
              <span className="text-[hsl(var(--military-success))] font-mono text-sm uppercase tracking-widest">[KLASSIFIZIERT]</span>
            </div>
          </div>
          <h2 className="military-heading text-5xl md:text-6xl mb-6 text-white">ÜBER DIE NC-ARMY</h2>
          <div className="text-lg text-gray-300 max-w-4xl mx-auto font-mono leading-relaxed space-y-2">
            <p className="text-center">HOCHKLASSIFIZIERTE MILITÄREINHEIT • GEGRÜNDET FÜR SPEZIALOPERATIONEN</p>
            <p className="text-center"><span className="text-[hsl(var(--military-success))]">ZUGANG NUR FÜR AUTORISIERTES PERSONNEL</span></p>
            <p className="text-center text-[hsl(var(--military-desert))]">PERSONALABTEILUNG KOORDINIERT ALLE REKRUTIERUNGSPROZESSE</p>
          </div>
        </div>

        {/* Military Stats Bar */}
        <div className={`mb-16 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {militaryStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-[hsl(var(--military-charcoal))]/70 border-l-4 border-[hsl(var(--military-success))] p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="h-6 w-6 text-[hsl(var(--military-success))]" />
                    <span className="text-2xl font-bold text-white font-mono">{stat.value}</span>
                  </div>
                  <p className="text-[hsl(var(--military-desert))] text-xs uppercase tracking-wide font-bold">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className={`${feature.bgColor} ${feature.borderColor} border-2 hover:scale-105 transition-all duration-500 ${isVisible ? 'scale-in-center' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-20 h-20 ${feature.bgColor} border-2 ${feature.borderColor} flex items-center justify-center mx-auto mb-6`}>
                    <Icon className={`h-10 w-10 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-white military-heading">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed font-mono text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Mission Statement */}
        <div className={`mt-20 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <Card className="bg-[hsl(var(--military-charcoal))]/50 border-2 border-[hsl(var(--military-success))]/30">
            <CardContent className="p-12 text-center relative">
              {/* Military decoration corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[hsl(var(--military-success))]"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[hsl(var(--military-success))]"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[hsl(var(--military-success))]"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[hsl(var(--military-success))]"></div>

              <div className="mb-6">
                <div className="w-16 h-16 bg-[hsl(var(--military-success))]/20 border-2 border-[hsl(var(--military-success))] rounded-none flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-[hsl(var(--military-success))]" />
                </div>
                <h3 className="military-heading text-4xl mb-2 text-white">UNSER AUFTRAG</h3>
                <div className="w-24 h-0.5 bg-[hsl(var(--military-success))] mx-auto"></div>
              </div>
              
              <div className="space-y-4 max-w-4xl mx-auto">
                <p className="text-xl text-[hsl(var(--military-desert))] leading-relaxed font-mono">
                  [OPERATIONSBEFEHL #001]
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-mono">
                  "Aufrechterhaltung der territorialen Integrität von Narco City durch präventive und reaktive Sicherheitsmaßnahmen. 
                  Schutz ziviler Infrastruktur und Gewährleistung der öffentlichen Ordnung unter Einsatz aller verfügbaren Mittel."
                </p>
                <div className="pt-6">
                  <p className="text-[hsl(var(--military-success))] font-bold text-xl military-heading">
                    SEMPER FIDELIS • IMMER TREU
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}