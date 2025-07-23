import { useEffect, useState } from 'react';
import { Eye, Zap, Target, Shield } from 'lucide-react';

export default function AdvancedGimmicks() {
  const [matrixEffect, setMatrixEffect] = useState(false);
  const [glitchMode, setGlitchMode] = useState(false);
  const [hackingMode, setHackingMode] = useState(false);

  useEffect(() => {
    // Matrix Rain Easter Egg - Triggered by typing "MATRIX"
    let matrixSequence = '';
    const matrixCode = 'MATRIX';
    
    // Glitch Effect - Double click on any military heading
    const handleDoubleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('military-heading')) {
        setGlitchMode(true);
        setTimeout(() => setGlitchMode(false), 3000);
      }
    };

    // Multiple Easter Egg Combinations
    const handleKeyCombo = (e: KeyboardEvent) => {
      // Hacking Animation - Ctrl + Shift + H
      if (e.ctrlKey && e.shiftKey && e.key === 'H') {
        setHackingMode(true);
        setTimeout(() => setHackingMode(false), 5000);
      }
      
      // Secret Admin Mode - Alt + A + D + M + I + N
      if (e.altKey && e.key.toUpperCase() === 'A') {
        // Could trigger admin panel or special features
        console.log('Admin sequence started...');
      }
      
      // Matrix sequence detection
      matrixSequence += e.key.toUpperCase();
      if (matrixSequence.length > matrixCode.length) {
        matrixSequence = matrixSequence.slice(-matrixCode.length);
      }
      
      if (matrixSequence === matrixCode) {
        setMatrixEffect(true);
        setTimeout(() => setMatrixEffect(false), 10000);
        matrixSequence = '';
      }
    };

    // Mouse trail effect
    const createMouseTrail = (e: MouseEvent) => {
      if (Math.random() > 0.9) { // Only create trail occasionally
        const trail = document.createElement('div');
        trail.className = 'mouse-trail';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        document.body.appendChild(trail);
        
        setTimeout(() => {
          if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
          }
        }, 1000);
      }
    };

    document.addEventListener('keydown', handleKeyCombo);
    document.addEventListener('dblclick', handleDoubleClick);
    document.addEventListener('mousemove', createMouseTrail);

    return () => {
      document.removeEventListener('keydown', handleKeyCombo);
      document.removeEventListener('dblclick', handleDoubleClick);
      document.removeEventListener('mousemove', createMouseTrail);
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
        <div className="fixed top-4 left-4 bg-black/90 border border-[hsl(var(--military-success))] p-4 font-mono text-[hsl(var(--military-success))] text-xs z-50 max-w-md">
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
}