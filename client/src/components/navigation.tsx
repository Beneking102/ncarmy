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
    <nav className="fixed top-0 w-full bg-[hsl(var(--military-dark))]/95 backdrop-blur-sm z-50 border-b border-[hsl(var(--military-sage))]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">NC-Army</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`hover:text-primary transition-colors ${
                  activeSection === item.href.substring(1) 
                    ? "text-primary" 
                    : "text-white"
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
