import { useEffect, useState } from 'react';

export default function PulseIndicator() {
  const [pulses, setPulses] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const createPulse = () => {
      const newPulse = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100
      };
      
      setPulses(prev => [...prev, newPulse]);
      
      setTimeout(() => {
        setPulses(prev => prev.filter(pulse => pulse.id !== newPulse.id));
      }, 3000);
    };

    const interval = setInterval(createPulse, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {pulses.map(pulse => (
        <div
          key={pulse.id}
          className="absolute w-2 h-2 bg-[hsl(var(--military-success))]/30 rounded-full animate-ping"
          style={{
            left: `${pulse.x}%`,
            top: `${pulse.y}%`,
            animationDuration: '3s'
          }}
        />
      ))}
    </div>
  );
}