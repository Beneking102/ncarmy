import { Shield, Target } from "lucide-react";
import { useState } from "react";
import ArmyGame from "./army-game";

const footerSections = [
  {
    title: "Abteilungen",
    links: [
      { label: "Military Police", href: "#" },
      { label: "SEALs", href: "#" },
      { label: "Infanterie", href: "#" },
      { label: "Airforce", href: "#" }
    ]
  },
  {
    title: "Informationen",
    links: [
      { label: "Bewerbung", href: "#" },
      { label: "Training", href: "#" },
      { label: "Downloads", href: "#" },
      { label: "FAQ", href: "#" }
    ]
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Nutzungsbedingungen", href: "/nutzungsbedingungen" }
    ]
  }
];

export default function Footer() {
  const [showGame, setShowGame] = useState(false);

  return (
    <footer className="bg-[hsl(var(--military-dark))] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Easter Egg Game */}
        {showGame && (
          <div className="mb-12">
            <ArmyGame />
          </div>
        )}
        
        {/* Easter Egg Trigger */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowGame(!showGame)}
            className="text-gray-500 hover:text-[hsl(var(--military-success))] transition-colors text-xs font-mono opacity-20 hover:opacity-100"
          >
            <Target className="w-4 h-4 inline mr-1" />
            TRAINING MODE
          </button>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-white">NC-Army</span>
            </div>
            <p className="text-gray-300 text-sm">
              Stärke. Disziplin. Schutz.<br />
              Sicherheit für Narco City seit 2024.
            </p>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h5 className="font-bold mb-3 text-white">{section.title}</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('/') ? (
                      <a 
                        href={link.href} 
                        className="hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a 
                        href={link.href} 
                        className="hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 NC-Army. Alle Rechte vorbehalten. | Narco City Roleplay</p>
        </div>
      </div>
    </footer>
  );
}
