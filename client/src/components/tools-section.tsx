import { Monitor, MessageSquare, Users, TrendingUp, Settings, Zap, Shield, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const digitalTools = [
  {
    icon: MessageSquare,
    title: "Discord Integration",
    description: "Nahtlose Kommunikation und Koordination",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    features: [
      { icon: Users, text: "Automatisches Rollenmanagement" },
      { icon: TrendingUp, text: "Einsatzstatus-Tracking" },
      { icon: Settings, text: "Channel-Automatisierung" },
      { icon: Zap, text: "Instant-Benachrichtigungen" }
    ]
  },
  {
    icon: Monitor,
    title: "Web-Dashboard",
    description: "Zentrale Verwaltung aller Operationen",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    features: [
      { icon: Users, text: "Personalakte-Verwaltung" },
      { icon: TrendingUp, text: "Performance-Analytics" },
      { icon: Database, text: "Dokumenten-Management" },
      { icon: Shield, text: "Sicherheitsberichte" }
    ]
  },
  {
    icon: Database,
    title: "Einsatz-System",
    description: "Missionsverwaltung und Planung",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
    features: [
      { icon: Settings, text: "Mission-Planer" },
      { icon: Users, text: "Team-Koordination" },
      { icon: TrendingUp, text: "Fortschritts-Tracking" },
      { icon: Shield, text: "Sicherheits-Protokolle" }
    ]
  }
];

export default function ToolsSection() {
  const handleDiscordLink = () => {
    window.open('https://discord.gg/jnMEj7w8Cs', '_blank');
  };

  return (
    <section id="tools" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Digitale Tools</h2>
          <p className="text-xl text-gray-300">Modernste Technologie für maximale Effizienz</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {digitalTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Card 
                key={index} 
                className={`${tool.bgColor} ${tool.borderColor} border-2 hover:scale-105 transition-all duration-300`}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${tool.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`h-8 w-8 ${tool.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{tool.title}</h3>
                    <p className="text-gray-300">{tool.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {tool.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={featureIndex} className="flex items-center space-x-3 p-2 bg-gray-800/50 rounded">
                          <FeatureIcon className={`h-4 w-4 ${tool.color}`} />
                          <span className="text-gray-300 text-sm">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <Card className="bg-[hsl(var(--military-dark))]/50 border-[hsl(var(--military-sage))]/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Bereit für den Einsatz?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Tritt unserem Discord-Server bei und erlebe modernste militärische Organisation hautnah. 
              Alle Tools und Systeme sind vollständig integriert für maximale Effizienz.
            </p>
            <Button 
              onClick={handleDiscordLink}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 text-lg"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Discord beitreten
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
