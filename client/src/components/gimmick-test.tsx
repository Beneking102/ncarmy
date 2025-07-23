import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Zap, Shield, Code, Radar, Gamepad2, MousePointer, Sparkles } from 'lucide-react';

export default function GimmickTest() {
  const [testMode, setTestMode] = useState(false);
  const [activeEffects, setActiveEffects] = useState<string[]>([]);

  const testGimmicks = [
    {
      name: 'Hacking Terminal',
      key: 'Ctrl+Shift+H',
      icon: Code,
      test: () => {
        const event = new KeyboardEvent('keydown', {
          key: 'H',
          ctrlKey: true,
          shiftKey: true,
          bubbles: true
        });
        window.dispatchEvent(event);
      }
    },
    {
      name: 'Night Vision',
      key: 'Alt+N',
      icon: Eye,
      test: () => {
        const event = new KeyboardEvent('keydown', {
          key: 'N',
          altKey: true,
          bubbles: true
        });
        window.dispatchEvent(event);
      }
    },
    {
      name: 'Radar Sweep',
      key: 'Alt+R',
      icon: Radar,
      test: () => {
        const event = new KeyboardEvent('keydown', {
          key: 'R',
          altKey: true,
          bubbles: true
        });
        window.dispatchEvent(event);
      }
    },
    {
      name: 'Code Rain',
      key: 'Shift+C',
      icon: Zap,
      test: () => {
        const event = new KeyboardEvent('keydown', {
          key: 'C',
          shiftKey: true,
          bubbles: true
        });
        window.dispatchEvent(event);
      }
    },
    {
      name: 'Matrix Effect',
      key: 'Type: MATRIX',
      icon: Target,
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
      }
    }
  ];

  if (!testMode) {
    return (
      <div className="fixed top-4 left-4 z-50">
        <Button 
          onClick={() => setTestMode(true)}
          className="bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1"
        >
          [DEV] Test Gimmicks
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed top-4 left-4 z-50 max-w-sm">
      <Card className="bg-black/90 border-[hsl(var(--military-success))]">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold text-sm">GIMMICK TESTER</h3>
            <Button 
              onClick={() => setTestMode(false)}
              className="bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1"
            >
              ✕
            </Button>
          </div>
          
          <div className="space-y-2">
            {testGimmicks.map((gimmick, index) => {
              const Icon = gimmick.icon;
              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon className="h-4 w-4 text-[hsl(var(--military-success))]" />
                    <div>
                      <div className="text-white text-xs font-mono">{gimmick.name}</div>
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
          
          <div className="mt-4 text-xs text-gray-400 font-mono">
            Nutzen Sie die Tastenkombinationen direkt oder klicken Sie TEST
          </div>
        </CardContent>
      </Card>
    </div>
  );
}