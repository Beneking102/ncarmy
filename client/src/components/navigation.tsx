import { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollspy } from "@/hooks/use-scrollspy";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Über uns" },
  { href: "#structure", label: "Struktur" },
  { href: "#departments", label: "Abteilungen" },
  { href: "#recruitment", label: "Recruitment" },
  { href: "#training", label: "Training" },
  { href: "#tools", label: "Tools" },
  { href: "#contact", label: "Kontakt" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollspy(navItems.map(item => item.href.substring(1)));

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[hsl(var(--military-dark))]/95 backdrop-blur-sm z-50 border-b-2 border-[hsl(var(--military-success))]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3" onClick={(e) => {
            if (e.detail === 5) {
              document.body.style.transform = 'rotate(360deg)';
              document.body.style.transition = 'transform 2s';
              setTimeout(() => {
                document.body.style.transform = '';
                document.body.style.transition = '';
              }, 2000);
            }
          }}>
            <div className="w-12 h-12 bg-[hsl(var(--military-success))]/20 border-2 border-[hsl(var(--military-success))] flex items-center justify-center cursor-pointer">
              <Shield className="h-6 w-6 text-[hsl(var(--military-success))]" />
            </div>
            <div>
              <span className="text-2xl font-bold military-heading text-white">NC-ARMY</span>
              <div className="text-xs text-[hsl(var(--military-desert))] font-mono uppercase tracking-widest">ELITE FORCE</div>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 font-mono text-sm uppercase tracking-widest font-bold border-l-2 transition-all duration-300 ${
                  activeSection === item.href.substring(1) 
                    ? "text-[hsl(var(--military-success))] border-[hsl(var(--military-success))] bg-[hsl(var(--military-success))]/10" 
                    : "text-gray-300 border-transparent hover:text-white hover:border-[hsl(var(--military-success))]/50 hover:bg-[hsl(var(--military-success))]/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-[hsl(var(--military-sage))]/20">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "text-primary bg-primary/10"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
