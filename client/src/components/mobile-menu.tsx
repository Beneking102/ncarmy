import { useState } from 'react';
import { Menu, X, Shield, Target, Users, Phone, FileText, Zap, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mobileNavItems = [
  { id: 'about', label: 'ÜBER UNS', icon: Shield },
  { id: 'structure', label: 'STRUKTUR', icon: Target },
  { id: 'departments', label: 'ABTEILUNGEN', icon: Users },
  { id: 'recruitment', label: 'REKRUTIERUNG', icon: FileText },
  { id: 'training', label: 'AUSBILDUNG', icon: Zap },
  { id: 'contact', label: 'KONTAKT', icon: Phone }
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:text-[hsl(var(--military-success))] hover:bg-[hsl(var(--military-success))]/10"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-16 bg-[hsl(var(--military-dark))]/95 backdrop-blur-lg z-50 tactical-grid">
          <div className="flex flex-col items-center justify-center h-full space-y-6 p-8">
            {mobileNavItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-4 w-full max-w-xs p-4 bg-[hsl(var(--military-charcoal))]/50 border border-[hsl(var(--military-success))]/20 hover:border-[hsl(var(--military-success))] transition-all duration-300 hover:bg-[hsl(var(--military-success))]/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="h-6 w-6 text-[hsl(var(--military-success))]" />
                  <span className="text-white font-mono text-lg tracking-wider">{item.label}</span>
                </button>
              );
            })}
            
            {/* Quick Stats für Mobile */}
            <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-xs">
              <div className="bg-[hsl(var(--military-charcoal))]/70 p-3 border-l-4 border-[hsl(var(--military-success))]">
                <div className="text-xl font-bold text-white font-mono">24/7</div>
                <div className="text-xs text-gray-300 uppercase">Bereit</div>
              </div>
              <div className="bg-[hsl(var(--military-charcoal))]/70 p-3 border-l-4 border-yellow-400">
                <div className="text-xl font-bold text-white font-mono">100%</div>
                <div className="text-xs text-gray-300 uppercase">Erfolg</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}