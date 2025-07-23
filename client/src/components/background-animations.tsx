import { useEffect, useState } from 'react';
import PulseIndicator from './pulse-indicator';

export default function BackgroundAnimations() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Erstelle animierte Partikel
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 10
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Tactical Grid Background */}
      <div className="absolute inset-0 tactical-grid opacity-10"></div>
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-[hsl(var(--military-success))] rounded-full opacity-30 animate-ping"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: '4s'
          }}
        />
      ))}

      {/* Radar Sweep Lines */}
      <div className="absolute inset-0">
        <div className="radar-sweep opacity-5"></div>
        <div className="radar-sweep-2 opacity-5"></div>
      </div>

      {/* Subtle Moving Lines */}
      <div className="absolute inset-0">
        <div className="moving-line-1"></div>
        <div className="moving-line-2"></div>
        <div className="moving-line-3"></div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[hsl(var(--military-success))]/20"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[hsl(var(--military-success))]/20"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[hsl(var(--military-success))]/20"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[hsl(var(--military-success))]/20"></div>
      
      {/* Additional Pulse Indicators */}
      <PulseIndicator />
    </div>
  );
}