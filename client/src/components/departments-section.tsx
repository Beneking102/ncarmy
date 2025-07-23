import { useState, useEffect, useRef } from "react";
import { Badge, Target, Users, Plane, Shield, Crosshair } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const departments = [
  {
    id: "military-police",
    name: "MILITARY POLICE",
    code: "MP",
    icon: Badge,
    slots: 30,
    status: "AKTIV",
    classification: "OPERATIONAL",
    focus: "DURCHSETZUNG MILITÄRISCHER DISZIPLIN • SICHERUNG MILITÄRISCHER EINRICHTUNGEN • ERMITTLUNGEN",
    skills: [
      "FESTNAHME & VERHÖR",
      "OBJEKTSCHUTZ",
      "VERKEHRSKONTROLLE", 
      "ERMITTLUNGSARBEIT"
    ],
    color: "text-blue-400",
    borderColor: "border-blue-400",
    bgColor: "bg-blue-400/10"
  },
  {
    id: "seals",
    name: "SEALS",
    code: "SEALS",
    icon: Crosshair,
    slots: 10,
    status: "KLASSIFIZIERT",
    classification: "SPECIAL OPS",
    focus: "SPEZIALOPERATIONEN • VERDECKTE EINSÄTZE • RETTUNGSMISSIONEN • ANTI-TERROR-OPERATIONEN",
    skills: [
      "VERDECKTE OPERATIONEN",
      "PRÄZISIONSSCHIESSSEN",
      "SPRENGSTOFFENTSORGUNG",
      "NAHKAMPF"
    ],
    color: "text-red-400",
    borderColor: "border-red-400",
    bgColor: "bg-red-400/10"
  },
  {
    id: "infantry",
    name: "INFANTERIE",
    code: "INF",
    icon: Users,
    slots: 20,
    status: "AKTIV",
    classification: "GROUND FORCES",
    focus: "BODENTRUPPEN • DIREKTE KAMPFEINSÄTZE • PATROUILLEN • TERRITORIALKONTROLLE",
    skills: [
      "BODENKAMPF",
      "PATROUILLENDIENST",
      "TERRITORIALSICHERUNG",
      "TEAMKOORDINATION"
    ],
    color: "text-[hsl(var(--military-success))]",
    borderColor: "border-[hsl(var(--military-success))]",
    bgColor: "bg-[hsl(var(--military-success))]/10"
  },
  {
    id: "personnel",
    name: "PERSONALABTEILUNG",
    code: "HR",
    icon: Users,
    slots: 8,
    status: "AKTIV",
    classification: "ADMINISTRATION",
    focus: "PERSONALVERWALTUNG • REKRUTIERUNG • AUSBILDUNGSKOORDINATION • PERSONALENTWICKLUNG",
    skills: [
      "PERSONALPLANUNG",
      "REKRUTIERUNGSVERFAHREN",
      "AUSBILDUNGSORGANISATION",
      "PERSONALAKTEN-VERWALTUNG"
    ],
    color: "text-purple-400",
    borderColor: "border-purple-400",
    bgColor: "bg-purple-400/10"
  },
  {
    id: "airforce",
    name: "AIRFORCE",
    code: "AF",
    icon: Plane,
    slots: 10,
    status: "OPERATIONAL",
    classification: "AIR SUPPORT",
    focus: "LUFTÜBERWACHUNG • TRANSPORTMISSIONEN • LUFTUNTERSTÜTZUNG FÜR BODENTRUPPEN",
    skills: [
      "FLUGZEUGFÜHRUNG",
      "LUFTÜBERWACHUNG",
      "TRANSPORTLOGISTIK",
      "LUFTNAHUNTERSTÜTZUNG"
    ],
    color: "text-yellow-400",
    borderColor: "border-yellow-400",
    bgColor: "bg-yellow-400/10"
  }
];

export default function DepartmentsSection() {
  const [activeDepartment, setActiveDepartment] = useState("military-police");
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

  const currentDepartment = departments.find(d => d.id === activeDepartment);

  return (
    <section ref={sectionRef} id="departments" className="py-20 bg-[hsl(var(--military-dark))] tactical-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="mb-4 flex justify-center">
            <div className="px-4 py-2 bg-[hsl(var(--military-success))]/10 border border-[hsl(var(--military-success))]/30">
              <span className="text-[hsl(var(--military-success))] font-mono text-sm uppercase tracking-widest">[ABTEILUNGEN]</span>
            </div>
          </div>
          <h2 className="military-heading text-5xl md:text-6xl mb-6 text-white">SPEZIALABTEILUNGEN</h2>
          <div className="text-lg text-gray-300 max-w-4xl mx-auto font-mono leading-relaxed space-y-2">
            <p className="text-center">HOCHSPEZIALISIERTE EINHEITEN • VERSCHIEDENE EINSATZGEBIETE</p>
            <p className="text-center"><span className="text-[hsl(var(--military-success))]">WÄHLEN SIE IHRE ABTEILUNG FÜR DETAILLIERTE INFORMATIONEN</span></p>
            <p className="text-center text-purple-400">PERSONALABTEILUNG VERWALTET ALLE EINSTELLUNGEN UND TRANSFERS</p>
          </div>
        </div>

        {/* Department Selector */}
        <div className={`mb-16 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {departments.map((department, index) => {
              const Icon = department.icon;
              return (
                <Card
                  key={department.id}
                  className={`cursor-pointer transition-all duration-500 hover:scale-105 ${
                    activeDepartment === department.id
                      ? `${department.bgColor} border-2 ${department.borderColor}`
                      : "bg-[hsl(var(--military-charcoal))]/50 border border-gray-600 hover:border-gray-400"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setActiveDepartment(department.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div className={`w-16 h-16 ${department.bgColor} border-2 ${department.borderColor} flex items-center justify-center mx-auto mb-3`}>
                      <Icon className={`h-8 w-8 ${department.color}`} />
                    </div>
                    <h3 className="text-lg font-bold military-heading text-white">{department.code}</h3>
                    <p className="text-sm text-gray-300 font-mono">{department.name}</p>
                    <div className="mt-2 flex justify-center space-x-2">
                      <span className={`text-xs px-2 py-1 ${department.bgColor} ${department.color} font-mono`}>
                        {department.classification}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Department Details */}
        {currentDepartment && (
          <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <Card className={`${currentDepartment.bgColor} border-2 ${currentDepartment.borderColor}`}>
              <CardContent className="p-8">
                {/* Header */}
                <div className="mb-8 text-center">
                  <div className="flex justify-center items-center space-x-4 mb-4">
                    <div className={`w-20 h-20 ${currentDepartment.bgColor} border-2 ${currentDepartment.borderColor} flex items-center justify-center`}>
                      <currentDepartment.icon className={`h-10 w-10 ${currentDepartment.color}`} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white military-heading">{currentDepartment.name}</h3>
                      <div className="flex items-center justify-center space-x-4 mt-2">
                        <span className={`text-sm px-3 py-1 ${currentDepartment.bgColor} ${currentDepartment.color} font-mono border ${currentDepartment.borderColor}`}>
                          STATUS: {currentDepartment.status}
                        </span>
                        <span className="text-sm text-gray-300 font-mono">CLEARANCE: {currentDepartment.classification}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Mission Focus */}
                  <div>
                    <h4 className="font-bold text-xl mb-4 text-white military-heading flex items-center">
                      <Target className="w-5 h-5 mr-2 text-[hsl(var(--military-success))]" />
                      AUFGABENSCHWERPUNKT
                    </h4>
                    <p className="text-gray-300 font-mono leading-relaxed">{currentDepartment.focus}</p>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-bold text-xl mb-4 text-white military-heading flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-[hsl(var(--military-success))]" />
                      SPEZIALISIERUNGEN
                    </h4>
                    <div className="space-y-2">
                      {currentDepartment.skills.map((skill, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[hsl(var(--military-success))] rounded-full"></div>
                          <span className="text-gray-300 font-mono text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-8 p-6 bg-[hsl(var(--military-charcoal))]/50 border border-[hsl(var(--military-success))]/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white font-mono">{currentDepartment.slots}</div>
                      <div className="text-sm text-gray-300 font-mono uppercase">VERFÜGBARE PLÄTZE</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[hsl(var(--military-success))] font-mono">AKTIV</div>
                      <div className="text-sm text-gray-300 font-mono uppercase">REKRUTIERUNG</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400 font-mono">24/7</div>
                      <div className="text-sm text-gray-300 font-mono uppercase">EINSATZBEREIT</div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-8 text-center">
                  <Button 
                    onClick={() => {
                      const element = document.querySelector("#recruitment");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-[hsl(var(--military-success))] hover:bg-[hsl(var(--military-success))]/90 text-white font-bold px-8 py-3 military-heading text-lg"
                  >
                    JETZT BEWERBEN
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
