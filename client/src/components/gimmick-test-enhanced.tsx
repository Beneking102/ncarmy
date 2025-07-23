import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Zap, Shield, Code, Radar, MousePointer, Sparkles, Play, Pause, RotateCcw } from 'lucide-react';

export default function GimmickTestEnhanced() {
  const [testMode, setTestMode] = useState(false);
  const [activeEffects, setActiveEffects] = useState<string[]>([]);
  const [testHistory, setTestHistory] = useState<string[]>([]);
  const [autoTest, setAutoTest] = useState(false);

  const testGimmicks = [
    {
      name: 'Hacking Terminal',
      key: 'Ctrl+Shift+H',
      icon: Code,
      color: 'text-red-400',
      test: () => {
        const event = new KeyboardEvent('keydown', {
          key: 'H',
          ctrlKey: true,
          shiftKey: true,
          bubbles: true
        });
        window.dispatchEvent(event);
        addToHistory('Hacking Terminal aktiviert');
      }
    },
    {
      name: 'Night Vision',
      key: 'Alt+N',
      icon: Eye,
      color: 'text-green-400',
      test: () => {
        const event = new KeyboardEvent('keydown', {
          key: 'N',
          altKey: true,
          bubbles: true
        });
        window.dispatchEvent(event);
        addToHistory('Night Vision umgeschaltet');
      }
    },
    {
      name: 'Radar Sweep',
      key: 'Alt+R',
      icon: Radar,
      color: 'text-blue-400',
      test: () => {
        const event = new KeyboardEvent('keydown', {
          key: 'R',
          altKey: true,
          bubbles: true
        });
        window.dispatchEvent(event);
        addToHistory('Radar Sweep gestartet');
      }
    },
    {
      name: 'Code Rain',
      key: 'Shift+C',
      icon: Zap,
      color: 'text-cyan-400',
      test: () => {
        const event = new KeyboardEvent('keydown', {
          key: 'C',
          shiftKey: true,
          bubbles: true
        });
        window.dispatchEvent(event);
        addToHistory('Code Rain aktiviert');
      }
    },
    {
      name: 'Matrix Effect',
      key: 'Type: MATRIX',
      icon: Target,
      color: 'text-yellow-400',
      test: () => {
        'MATRIX'.split('').forEach((char, index) => {
          setTimeout(() => {
            const event = new KeyboardEvent('keydown', {
              key: char,
              bubbles: true
            });
            window.dispatchEvent(event);
          }, index * 100);
        });
        addToHistory('Matrix Sequenz getippt');
      }
    },
    {
      name: 'Glitch Mode',
      key: 'Doppelklick Überschrift',
      icon: Sparkles,
      color: 'text-purple-400',
      test: () => {
        const heading = document.querySelector('.military-heading');
        if (heading) {
          const event = new MouseEvent('dblclick', {
            bubbles: true,
            cancelable: true,
            view: window
          });
          heading.dispatchEvent(event);
          addToHistory('Glitch Mode per Doppelklick');
        } else {
          addToHistory('Keine military-heading gefunden');
        }
      }
    },
    {
      name: 'Mouse Trails',
      key: 'Mausbewegung Simulation',
      icon: MousePointer,
      color: 'text-orange-400',
      test: () => {
        for (let i = 0; i < 15; i++) {
          setTimeout(() => {
            const event = new MouseEvent('mousemove', {
              clientX: 300 + Math.sin(i * 0.5) * 100,
              clientY: 300 + Math.cos(i * 0.5) * 100,
              bubbles: true
            });
            document.dispatchEvent(event);
          }, i * 30);
        }
        addToHistory('Mouse Trails simuliert');
      }
    }
  ];

  const addToHistory = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setTestHistory(prev => [`${timestamp}: ${message}`, ...prev.slice(0, 9)]);
  };

  const runAllTests = () => {
    testGimmicks.forEach((gimmick, index) => {
      setTimeout(() => {
        gimmick.test();
      }, index * 1000);
    });
    addToHistory('Alle Tests gestartet');
  };

  const clearHistory = () => {
    setTestHistory([]);
  };

  useEffect(() => {
    if (autoTest) {
      const interval = setInterval(() => {
        const randomGimmick = testGimmicks[Math.floor(Math.random() * testGimmicks.length)];
        randomGimmick.test();
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [autoTest]);

  if (!testMode) {
    return (
      <div className="fixed top-4 left-4 z-50">
        <Button 
          onClick={() => setTestMode(true)}
          className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-2 font-mono"
        >
          [DEV] Advanced Gimmick Tester
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed top-4 left-4 z-50 max-w-md">
      <Card className="bg-black/95 border-[hsl(var(--military-success))] shadow-2xl">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold text-sm font-mono">ADVANCED GIMMICK TESTER</h3>
            <Button 
              onClick={() => setTestMode(false)}
              className="bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1"
            >
              ✕
            </Button>
          </div>
          
          {/* Control Panel */}
          <div className="flex space-x-2 mb-4">
            <Button 
              onClick={runAllTests}
              className="bg-[hsl(var(--military-success))] hover:bg-[hsl(var(--military-success))]/80 text-black text-xs px-2 py-1 flex items-center space-x-1"
            >
              <Play className="h-3 w-3" />
              <span>ALL</span>
            </Button>
            <Button 
              onClick={() => setAutoTest(!autoTest)}
              className={`text-xs px-2 py-1 flex items-center space-x-1 ${autoTest ? 'bg-orange-600 hover:bg-orange-700' : 'bg-gray-600 hover:bg-gray-700'} text-white`}
            >
              {autoTest ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
              <span>AUTO</span>
            </Button>
            <Button 
              onClick={clearHistory}
              className="bg-gray-600 hover:bg-gray-700 text-white text-xs px-2 py-1 flex items-center space-x-1"
            >
              <RotateCcw className="h-3 w-3" />
              <span>CLEAR</span>
            </Button>
          </div>
          
          {/* Gimmick Tests */}
          <div className="space-y-2 mb-4">
            {testGimmicks.map((gimmick, index) => {
              const Icon = gimmick.icon;
              return (
                <div key={index} className="flex items-center justify-between bg-gray-800/50 p-2 rounded">
                  <div className="flex items-center space-x-2">
                    <Icon className={`h-4 w-4 ${gimmick.color}`} />
                    <div>
                      <div className="text-white text-xs font-mono font-bold">{gimmick.name}</div>
                      <div className="text-gray-400 text-xs">{gimmick.key}</div>
                    </div>
                  </div>
                  <Button 
                    onClick={gimmick.test}
                    className="bg-[hsl(var(--military-success))] hover:bg-[hsl(var(--military-success))]/80 text-black text-xs px-2 py-1"
                  >
                    TEST
                  </Button>
                </div>
              );
            })}
          </div>
          
          {/* Test History */}
          <div className="border-t border-gray-600 pt-3">
            <h4 className="text-white text-xs font-mono font-bold mb-2">TEST HISTORY</h4>
            <div className="max-h-32 overflow-y-auto space-y-1">
              {testHistory.length === 0 ? (
                <div className="text-gray-500 text-xs font-mono">Keine Tests ausgeführt</div>
              ) : (
                testHistory.map((entry, index) => (
                  <div key={index} className="text-[hsl(var(--military-success))] text-xs font-mono">
                    {entry}
                  </div>
                ))
              )}
            </div>
          </div>
          
          <div className="mt-3 text-xs text-gray-400 font-mono">
            Status: {autoTest ? 'AUTO-TEST AKTIV' : 'MANUELL'} | Tests: {testHistory.length}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}