import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Crosshair, Award, RotateCw } from "lucide-react";

interface Target {
  id: number;
  x: number;
  y: number;
  hit: boolean;
}

export default function ArmyGame() {
  const [isGameActive, setIsGameActive] = useState(false);
  const [targets, setTargets] = useState<Target[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('army-game-high-score') || '0');
  });

  const generateTargets = useCallback(() => {
    const newTargets: Target[] = [];
    for (let i = 0; i < 5; i++) {
      newTargets.push({
        id: i,
        x: Math.random() * 80 + 10, // 10% to 90% of container width
        y: Math.random() * 70 + 15, // 15% to 85% of container height
        hit: false
      });
    }
    setTargets(newTargets);
  }, []);

  const startGame = () => {
    setIsGameActive(true);
    setGameStarted(true);
    setScore(0);
    setTimeLeft(30);
    generateTargets();
  };

  const endGame = () => {
    setIsGameActive(false);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('army-game-high-score', score.toString());
    }
  };

  const hitTarget = (targetId: number) => {
    if (!isGameActive) return;
    
    setTargets(prev => 
      prev.map(target => 
        target.id === targetId ? { ...target, hit: true } : target
      )
    );
    
    setScore(prev => prev + 10);
    
    // Generate new targets after a short delay
    setTimeout(() => {
      if (isGameActive) {
        generateTargets();
      }
    }, 500);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isGameActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            endGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isGameActive, timeLeft]);

  // Auto-generate new targets every 3 seconds during game
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isGameActive) {
      interval = setInterval(() => {
        generateTargets();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isGameActive, generateTargets]);

  return (
    <Card className="bg-[hsl(var(--military-charcoal))]/90 border-2 border-[hsl(var(--military-success))]/30 w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Crosshair className="w-6 h-6 text-[hsl(var(--military-success))]" />
            <h3 className="text-2xl font-bold military-heading text-white">TARGET PRACTICE</h3>
            <Target className="w-6 h-6 text-[hsl(var(--military-success))]" />
          </div>
          <p className="text-gray-300 font-mono text-sm">SCHARFSCHÜTZEN-TRAINING • TREFFE DIE ZIELE</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
          <div className="bg-[hsl(var(--military-dark))]/50 p-3 border border-gray-600">
            <div className="text-[hsl(var(--military-success))] font-mono text-lg font-bold">{score}</div>
            <div className="text-gray-400 text-xs font-mono">PUNKTE</div>
          </div>
          <div className="bg-[hsl(var(--military-dark))]/50 p-3 border border-gray-600">
            <div className="text-yellow-400 font-mono text-lg font-bold">{timeLeft}</div>
            <div className="text-gray-400 text-xs font-mono">SEKUNDEN</div>
          </div>
          <div className="bg-[hsl(var(--military-dark))]/50 p-3 border border-gray-600">
            <div className="text-orange-400 font-mono text-lg font-bold">{highScore}</div>
            <div className="text-gray-400 text-xs font-mono">REKORD</div>
          </div>
        </div>

        {!gameStarted || !isGameActive ? (
          <div className="text-center">
            <Button 
              onClick={startGame}
              className="bg-[hsl(var(--military-success))] hover:bg-[hsl(var(--military-success))]/90 text-white font-bold px-8 py-3 military-heading"
            >
              <Target className="w-4 h-4 mr-2" />
              {!gameStarted ? "MISSION STARTEN" : "ERNEUT SPIELEN"}
            </Button>
            {!gameStarted && (
              <p className="text-gray-400 text-xs mt-3 font-mono">
                INSTRUKTIONEN: KLICKE DIE ZIELE SO SCHNELL WIE MÖGLICH
              </p>
            )}
          </div>
        ) : (
          <div 
            className="relative bg-[hsl(var(--military-dark))]/30 border-2 border-gray-600 h-64 cursor-crosshair overflow-hidden"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }}
          >
            {targets.map((target) => (
              <button
                key={target.id}
                onClick={() => hitTarget(target.id)}
                className={`absolute w-8 h-8 rounded-full transition-all duration-300 ${
                  target.hit 
                    ? 'bg-red-500 scale-125 opacity-50' 
                    : 'bg-[hsl(var(--military-success))] hover:bg-[hsl(var(--military-success))]/80'
                } border-2 border-white flex items-center justify-center`}
                style={{
                  left: `${target.x}%`,
                  top: `${target.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <Target className="w-4 h-4 text-white" />
              </button>
            ))}
            
            {/* Crosshair */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute w-full h-0.5 bg-red-400 top-1/2 -translate-y-1/2 opacity-50"></div>
                <div className="absolute h-full w-0.5 bg-red-400 left-1/2 -translate-x-1/2 opacity-50"></div>
              </div>
            </div>
          </div>
        )}

        {!isGameActive && gameStarted && (
          <div className="text-center mt-4">
            <div className="bg-[hsl(var(--military-success))]/10 border border-[hsl(var(--military-success))]/30 p-4 mb-4">
              <Award className="w-8 h-8 text-[hsl(var(--military-success))] mx-auto mb-2" />
              <h4 className="text-white font-bold military-heading">MISSION BEENDET</h4>
              <p className="text-gray-300 font-mono text-sm">
                FINAL SCORE: <span className="text-[hsl(var(--military-success))]">{score} PUNKTE</span>
              </p>
              {score > highScore && (
                <p className="text-yellow-400 font-mono text-xs mt-1">★ NEUER REKORD! ★</p>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}