import { useState, useEffect } from 'react';
import { Eye, Target, Zap, Shield } from 'lucide-react';

export default function EasterEggHints() {
  const [currentHint, setCurrentHint] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const hints = [
    { icon: Target, text: "Schießstand im Footer entdeckt?", color: "text-red-400" },
    { icon: Eye, text: "Beobachten Sie den Radar...", color: "text-[hsl(var(--military-success))]" },
    { icon: Zap, text: "Klicken Sie 5x auf das NC-Army Logo", color: "text-yellow-400" },
    { icon: Shield, text: "Konami-Code für Überraschung", color: "text-blue-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHint((prev) => (prev + 1) % hints.length);
      setIsVisible(true);
      
      setTimeout(() => setIsVisible(false), 4000);
    }, 10000);

    // Konami Code Easter Egg
    let sequence = '';
    const konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyA';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      sequence += e.code;
      if (sequence.length > konamiCode.length) {
        sequence = sequence.slice(-konamiCode.length);
      }
      
      if (sequence === konamiCode) {
        document.body.style.animation = 'rainbow-flash 2s infinite';
        setTimeout(() => {
          document.body.style.animation = '';
        }, 5000);
        sequence = '';
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isVisible) return null;

  const hint = hints[currentHint];
  const Icon = hint.icon;

  return (
    <div className="fixed bottom-32 right-4 z-40 animate-bounce">
      <div className={`flex items-center space-x-2 bg-[hsl(var(--military-dark))]/90 backdrop-blur-sm border border-[hsl(var(--military-success))]/30 p-3 rounded-none ${hint.color}`}>
        <Icon className="h-4 w-4" />
        <span className="text-sm font-mono">{hint.text}</span>
      </div>
    </div>
  );
}