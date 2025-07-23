import { Shield, Target, Code, Heart } from "lucide-react";
import { useState, useEffect } from "react";
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
      { label: "Bewerbung", href: "#recruitment" },
      { label: "Training", href: "#training" },
      { label: "FAQ", href: "#faq" }
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
  const [beneClicks, setBeneClicks] = useState(0);
  const [showBeneEasterEgg, setShowBeneEasterEgg] = useState(false);

  const handleBeneClick = () => {
    setBeneClicks(prev => prev + 1);
    if (beneClicks === 4) { // After 5 clicks (0-based)
      setShowBeneEasterEgg(true);
      // Special effects
      document.body.style.background = 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ffff00, #ff00ff, #00ffff)';
      document.body.style.backgroundSize = '400% 400%';
      document.body.style.animation = 'rainbow-gradient 3s ease infinite';
      
      setTimeout(() => {
        document.body.style.background = '';
        document.body.style.backgroundSize = '';
        document.body.style.animation = '';
        setShowBeneEasterEgg(false);
        setBeneClicks(0);
      }, 5000);
    }
  };

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
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400 space-y-2">
          <p>&copy; 2025 NC-Army. Alle Rechte vorbehalten. | Narco City Roleplay</p>
          <div className="flex items-center justify-center space-x-2">
            <span>This page is made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>by</span>
            <button
              onClick={handleBeneClick}
              className="text-[hsl(var(--military-success))] hover:text-[hsl(var(--military-success))]/80 font-mono font-bold transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <Code className="w-4 h-4 inline mr-1" />
              BENE
            </button>
          </div>
          
          {showBeneEasterEgg && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
              <div className="bg-[hsl(var(--military-dark))] border-4 border-[hsl(var(--military-success))] p-8 text-center animate-pulse">
                <Code className="w-16 h-16 mx-auto mb-4 text-[hsl(var(--military-success))] animate-spin" />
                <h2 className="text-3xl font-bold text-white mb-4 military-heading">DEVELOPER MODE ACTIVATED</h2>
                <p className="text-[hsl(var(--military-success))] font-mono text-lg mb-4">
                  BENE.EXE SUCCESSFULLY LOADED
                </p>
                <p className="text-gray-300 font-mono text-sm">
                  MASTER OF CODE • ARCHITECT OF DIGITAL WARFARE<br />
                  CREATOR OF THE NC-ARMY EXPERIENCE
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                  <div className="text-xs text-gray-400">
                    <span className="text-[hsl(var(--military-success))]">SKILLS:</span> React, TypeScript, Design, Military UX
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
