import { useState } from "react";
import { Badge, Target, Users, Plane } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const departments = [
  {
    id: "military-police",
    name: "Military Police",
    icon: Badge,
    slots: 20,
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    focus: "Durchsetzung militärischer Disziplin, Sicherung militärischer Einrichtungen, Ermittlungen bei militärischen Vergehen",
    skills: [
      "Festnahme und Verhör",
      "Objektschutz",
      "Verkehrskontrolle",
      "Ermittlungsarbeit"
    ]
  },
  {
    id: "seals",
    name: "SEALs",
    icon: Target,
    slots: 10,
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    focus: "Spezialoperationen, verdeckte Einsätze, Rettungsmissionen und Anti-Terror-Operationen",
    skills: [
      "Verdeckte Operationen",
      "Präzisionsschießen",
      "Sprengstoffentsorgung",
      "Nahkampf"
    ]
  },
  {
    id: "infantry",
    name: "Infanterie",
    icon: Users,
    slots: 10,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    focus: "Bodentruppen für direkte Kampfeinsätze, Patrouillen und Territorialkontrolle",
    skills: [
      "Bodenkampf",
      "Patrouillendienst",
      "Territorialsicherung",
      "Teamkoordination"
    ]
  },
  {
    id: "airforce",
    name: "Luftwaffe",
    icon: Plane,
    slots: 5,
    image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    focus: "Luftüberwachung, Transportmissionen und Luftunterstützung für Bodentruppen",
    skills: [
      "Flugzeugführung",
      "Luftüberwachung",
      "Transportlogistik",
      "Luftnahunterstützung"
    ]
  }
];

export default function DepartmentsSection() {
  const [activeDepartment, setActiveDepartment] = useState("military-police");

  const currentDepartment = departments.find(d => d.id === activeDepartment);

  return (
    <section id="departments" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Abteilungen</h2>
          <p className="text-xl text-gray-300">Spezialisierte Einheiten für verschiedene Einsatzgebiete</p>
        </div>

        {/* Department Tabs */}
        <div className="flex flex-wrap justify-center mb-8 bg-[hsl(var(--military-charcoal))]/30 rounded-lg p-2">
          {departments.map((department) => (
            <Button
              key={department.id}
              onClick={() => setActiveDepartment(department.id)}
              className={`px-6 py-3 rounded-lg font-bold m-1 transition-all ${
                activeDepartment === department.id
                  ? "department-tab active text-white"
                  : "bg-transparent text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {department.name}
            </Button>
          ))}
        </div>

        {/* Department Content */}
        {currentDepartment && (
          <Card className="bg-[hsl(var(--military-dark))]/50 border-[hsl(var(--military-sage))]/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img 
                  src={currentDepartment.image} 
                  alt={`${currentDepartment.name} operation`} 
                  className="rounded-lg shadow-lg w-full h-64 object-cover" 
                />
                <div>
                  <div className="flex items-center mb-4">
                    <currentDepartment.icon className="h-12 w-12 text-primary mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">{currentDepartment.name}</h3>
                      <p className="text-primary">{currentDepartment.slots} verfügbare Plätze</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-white">Aufgabenschwerpunkt</h4>
                      <p className="text-gray-300">{currentDepartment.focus}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-white">Fähigkeiten</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {currentDepartment.skills.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      onClick={() => {
                        const element = document.querySelector("#recruitment");
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="bg-primary hover:bg-primary/90 text-white font-bold"
                    >
                      Jetzt Bewerben
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
