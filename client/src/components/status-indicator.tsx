import { Shield, Zap, Users, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function StatusIndicator() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [onlineCount, setOnlineCount] = useState(47);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const countTimer = setInterval(() => {
      setOnlineCount(prev => prev + Math.floor(Math.random() * 3 - 1)); // Random fluctuation
    }, 30000);

    // Show after 2 seconds
    const showTimer = setTimeout(() => setIsVisible(true), 2000);

    return () => {
      clearInterval(timer);
      clearInterval(countTimer);
      clearTimeout(showTimer);
    };
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 z-40 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
      <Card className="bg-[hsl(var(--military-dark))]/90 border-2 border-[hsl(var(--military-success))]/30 backdrop-blur-sm">
        <CardContent className="p-4 min-w-[280px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[hsl(var(--military-success))] rounded-full military-pulse"></div>
              <span className="text-[hsl(var(--military-success))] font-mono text-sm uppercase tracking-widest font-bold">
                SYSTEM STATUS
              </span>
            </div>
            <Shield className="w-5 h-5 text-[hsl(var(--military-success))]" />
          </div>

          {/* Status Items */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-[hsl(var(--military-success))]" />
                <span className="text-gray-300 font-mono text-xs">OPERATIONAL</span>
              </div>
              <span className="text-[hsl(var(--military-success))] font-mono text-xs font-bold">100%</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 font-mono text-xs">ONLINE</span>
              </div>
              <span className="text-blue-400 font-mono text-xs font-bold">{onlineCount}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300 font-mono text-xs">ZEIT</span>
              </div>
              <span className="text-yellow-400 font-mono text-xs font-bold">
                {currentTime.toLocaleTimeString('de-DE', { hour12: false })}
              </span>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="mt-3 pt-2 border-t border-[hsl(var(--military-success))]/20">
            <div className="text-center">
              <span className="text-[hsl(var(--military-desert))] font-mono text-xs uppercase tracking-widest">
                NC-ARMY • AKTIV
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}