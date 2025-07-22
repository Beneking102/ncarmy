import { useState } from "react";
import { Check, Target, Users, Crown, Medal, Calendar, ChevronLeft, ChevronRight, Flag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const trainingModules = [
  {
    id: 1,
    title: "Modul 1: Grundlagen",
    description: "Disziplin, Hierarchie, Kommunikation",
    status: "completed"
  },
  {
    id: 2,
    title: "Modul 2: Waffentraining",
    description: "Sicherheit, Handhabung, Zieltechnik",
    status: "active"
  },
  {
    id: 3,
    title: "Modul 3: Taktik",
    description: "Teamwork, Strategien, Einsatzplanung",
    status: "locked"
  },
  {
    id: 4,
    title: "Modul 4: Spezialisierung",
    description: "Abteilungsspezifische Fähigkeiten",
    status: "locked"
  }
];

const achievements = [
  { icon: Medal, title: "Rekrut", earned: true },
  { icon: Target, title: "Scharfschütze", earned: false },
  { icon: Users, title: "Teamleader", earned: false },
  { icon: Crown, title: "Veteran", earned: false }
];

const upcomingEvents = [
  {
    title: "Wöchentliches Schießtraining",
    time: "Mittwoch, 20:00 Uhr",
    icon: Target,
    color: "text-primary"
  },
  {
    title: "Monatliche Großübung",
    time: "Samstag, 15:00 Uhr",
    icon: Flag,
    color: "text-yellow-500"
  }
];

export default function TrainingSection() {
  const [currentMonth] = useState("Dezember 2024");

  const getModuleStatus = (status: string) => {
    switch (status) {
      case "completed":
        return { bg: "bg-primary", text: "text-white", label: "Abgeschlossen", icon: Check };
      case "active":
        return { bg: "bg-yellow-500", text: "text-white", label: "Aktiv", icon: null };
      case "locked":
        return { bg: "bg-gray-600", text: "text-white", label: "Gesperrt", icon: null };
      default:
        return { bg: "bg-gray-600", text: "text-white", label: "Gesperrt", icon: null };
    }
  };

  return (
    <section id="training" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Ausbildung & Training</h2>
          <p className="text-xl text-gray-300">Strukturierte Ausbildung für maximale Einsatzbereitschaft</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Training Modules */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Grundausbildung (4 Module)</h3>
            <div className="space-y-4">
              {trainingModules.map((module) => {
                const statusConfig = getModuleStatus(module.status);
                const StatusIcon = statusConfig.icon;
                
                return (
                  <Card key={module.id} className="bg-[hsl(var(--military-dark))]/50 border-[hsl(var(--military-sage))]/20">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-8 h-8 ${statusConfig.bg} rounded-full flex items-center justify-center`}>
                            {StatusIcon ? (
                              <StatusIcon className="h-4 w-4 text-white" />
                            ) : (
                              <span className="text-white text-sm font-bold">{module.id}</span>
                            )}
                          </div>
                          <div>
                            <h4 className="font-bold text-white">{module.title}</h4>
                            <p className="text-sm text-gray-300">{module.description}</p>
                          </div>
                        </div>
                        <span className={`${statusConfig.bg} ${statusConfig.text} px-3 py-1 rounded text-sm font-bold`}>
                          {statusConfig.label}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Achievement Badges */}
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4 text-white">Errungenschaften</h4>
              <div className="grid grid-cols-4 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <Card 
                      key={index} 
                      className={`text-center p-3 ${
                        achievement.earned 
                          ? "bg-primary/20 border-primary" 
                          : "bg-gray-700 border-gray-600"
                      }`}
                    >
                      <CardContent className="p-0">
                        <Icon className={`h-8 w-8 mx-auto mb-2 ${
                          achievement.earned ? "text-primary" : "text-gray-500"
                        }`} />
                        <p className={`text-xs font-bold ${
                          achievement.earned ? "text-white" : "text-gray-500"
                        }`}>
                          {achievement.title}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Training Calendar */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Trainingskalender</h3>
            <Card className="bg-[hsl(var(--military-dark))]/50 border-[hsl(var(--military-sage))]/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white">{currentMonth}</h4>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" className="p-2">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="p-2">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 text-center text-sm mb-6">
                  {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map(day => (
                    <div key={day} className="font-bold p-2 text-white">{day}</div>
                  ))}
                  
                  {/* Sample calendar days */}
                  {[1, 2, 3, 4, 5, 6, 7].map(day => (
                    <div 
                      key={day} 
                      className={`p-2 rounded ${
                        day === 3 ? "bg-primary/30 border border-primary" :
                        day === 6 ? "bg-yellow-500/30 border border-yellow-500" :
                        "bg-gray-700"
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <div>
                  <h5 className="font-bold mb-3 text-white">Legende</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-primary rounded border border-primary"></div>
                      <span className="text-gray-300">Schießtraining</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-yellow-500 rounded border border-yellow-500"></div>
                      <span className="text-gray-300">Großübung</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-500 rounded border border-blue-500"></div>
                      <span className="text-gray-300">Sporttraining</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-4 text-white">Kommende Events</h4>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => {
                  const Icon = event.icon;
                  return (
                    <Card key={index} className="bg-[hsl(var(--military-dark))]/50 border-[hsl(var(--military-sage))]/20">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="font-bold text-white">{event.title}</h5>
                            <p className="text-sm text-gray-300">{event.time}</p>
                          </div>
                          <Icon className={`h-6 w-6 ${event.color}`} />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
