import { useEffect, useState } from 'react';
import { Eye, Zap, Target, Shield } from 'lucide-react';

export default function AdvancedGimmicks() {
  const [matrixEffect, setMatrixEffect] = useState(false);
  const [glitchMode, setGlitchMode] = useState(false);
  const [hackingMode, setHackingMode] = useState(false);
  const [nightVision, setNightVision] = useState(false);
  const [radarSweep, setRadarSweep] = useState(false);
  const [codeRain, setCodeRain] = useState(false);

  useEffect(() => {
    let matrixSequence = '';
    const matrixCode = 'MATRIX';
    
    const handleKeyPress = (e: KeyboardEvent) => {
      console.log('Key pressed:', e.key, e.ctrlKey, e.shiftKey, e.altKey);
      
      // Prevent default for all our shortcuts
      const key = e.key.toUpperCase();
      
      // Simple key combinations
      if (e.ctrlKey && e.shiftKey && key === 'H') {
        e.preventDefault();
        console.log('Activating hacking mode');
        setHackingMode(true);
        setTimeout(() => setHackingMode(false), 5000);
      }
      
      if (e.altKey && key === 'N' && !e.ctrlKey && !e.shiftKey) {
        e.preventDefault();
        console.log('Toggling night vision');
        setNightVision(prev => {
          if (!prev) {
            setTimeout(() => setNightVision(false), 8000);
          }
          return !prev;
        });
      }
      
      if (e.altKey && key === 'R' && !e.ctrlKey && !e.shiftKey) {
        e.preventDefault();
        console.log('Starting radar sweep');
        setRadarSweep(true);
        setTimeout(() => setRadarSweep(false), 6000);
      }
      
      if (e.shiftKey && key === 'C' && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        console.log('Starting code rain');
        setCodeRain(true);
        setTimeout(() => setCodeRain(false), 10000);
      }
      
      // Matrix sequence
      if (!e.ctrlKey && !e.shiftKey && !e.altKey) {
        matrixSequence += key;
        if (matrixSequence.length > matrixCode.length) {
          matrixSequence = matrixSequence.slice(-matrixCode.length);
        }
        if (matrixSequence === matrixCode) {
          console.log('Matrix effect activated');
          setMatrixEffect(true);
          setTimeout(() => setMatrixEffect(false), 10000);
          matrixSequence = '';
        }
      }
    };

    const handleDoubleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('military-heading')) {
        console.log('Glitch mode activated by double click');
        setGlitchMode(true);
        setTimeout(() => setGlitchMode(false), 3000);
      }
    };

    // Add event listeners
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('dblclick', handleDoubleClick);
    
    console.log('Advanced Gimmicks initialized');

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('dblclick', handleDoubleClick);
    };
  }, []);

  return (
    <>
      {/* Matrix Rain Effect */}
      {matrixEffect && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden matrix-rain">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-[hsl(var(--military-success))] font-mono text-sm animate-pulse"
              style={{
                left: `${i * 5}%`,
                animationDuration: `${2 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j} className="block">
                  {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Glitch Effect */}
      {glitchMode && (
        <div className="fixed inset-0 pointer-events-none z-40">
          <div className="glitch-overlay animate-pulse"></div>
        </div>
      )}

      {/* Hacking Terminal Effect */}
      {hackingMode && (
        <div className="fixed bottom-4 left-4 bg-black/90 border border-[hsl(var(--military-success))] p-4 font-mono text-[hsl(var(--military-success))] text-xs z-50 max-w-md">
          <div className="mb-2">
            <span className="text-red-400">[SYSTEM BREACH DETECTED]</span>
          </div>
          <div className="space-y-1">
            <div>$ accessing nc_army_database...</div>
            <div>$ bypassing security protocols...</div>
            <div>$ downloading classified files...</div>
            <div className="text-yellow-400">DOWNLOAD COMPLETE: 847 FILES</div>
            <div className="text-red-400">TERMINATING CONNECTION...</div>
          </div>
        </div>
      )}

      {/* Night Vision Effect */}
      {nightVision && (
        <div className="fixed inset-0 pointer-events-none z-30">
          <div className="night-vision-overlay w-full h-full"></div>
          <div className="fixed top-4 right-4 text-[hsl(var(--military-success))] font-mono text-sm">
            <div className="bg-black/80 p-2 border border-[hsl(var(--military-success))]">
              NIGHT VISION: ACTIVE
            </div>
          </div>
        </div>
      )}

      {/* Tactical Radar Sweep */}
      {radarSweep && (
        <div className="fixed inset-0 pointer-events-none z-20">
          <div className="radar-sweep-container">
            <div className="radar-sweep-line"></div>
          </div>
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-[hsl(var(--military-success))] font-mono text-sm">
            <div className="bg-black/80 p-2 border border-[hsl(var(--military-success))]">
              TACTICAL RADAR: SCANNING...
            </div>
          </div>
        </div>
      )}

      {/* Code Rain Effect */}
      {codeRain && (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-[hsl(var(--military-success))] font-mono text-xs opacity-70 code-rain-column"
              style={{
                left: `${i * 3.33}%`,
                animationDuration: `${1 + Math.random() * 2}s`,
                animationDelay: `${Math.random() * 1}s`
              }}
            >
              {Array.from({ length: 25 }).map((_, j) => (
                <div key={j} className="block">
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Hidden achievement system */}
      <div className="hidden" id="achievement-system">
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[hsl(var(--military-success))]/10 border border-[hsl(var(--military-success))] p-6 z-50">
          <div className="text-center text-white">
            <Shield className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--military-success))]" />
            <h3 className="text-xl font-bold mb-2">ACHIEVEMENT UNLOCKED</h3>
            <p className="text-sm text-gray-300">SECRET AGENT STATUS</p>
          </div>
        </div>
      </div>
    </>
  );
}console.log('Advanced Gimmicks loaded successfully');
