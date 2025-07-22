import { Button } from "@/components/ui/button";
import { Shield, Users, Target, Radar, Zap, Award, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(var(--military-dark))] via-[hsl(var(--military-charcoal))] to-black tactical-grid">
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/40" />
      
      {/* Military HUD overlay */}
      <div className="absolute top-4 left-4 text-[hsl(var(--military-success))] font-mono text-sm">
        <div className="flex items-center space-x-2 mb-1">
          <div className="status-indicator"></div>
          <span>SYSTEM STATUS: OPERATIONAL</span>
        </div>
        <div>TIME: {currentTime.toLocaleTimeString('de-DE', { hour12: false })}</div>
      </div>

      {/* Radar indicator - Eye Catcher */}
      <div className="absolute top-4 right-4">
        <div className="w-16 h-16 border-2 border-[hsl(var(--military-success))] rounded-full relative">
          <div className="absolute inset-2 border border-[hsl(var(--military-success))] rounded-full opacity-50"></div>
          <div className="absolute inset-4 border border-[hsl(var(--military-success))] rounded-full opacity-25"></div>
          <Radar className="w-6 h-6 text-[hsl(var(--military-success))] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 radar-sweep" />
        </div>
      </div>
      
      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        {/* Status Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center space-x-2 bg-[hsl(var(--military-success))]/10 border-2 border-[hsl(var(--military-success))]/30 rounded-none px-6 py-3 text-sm text-[hsl(var(--military-success))] font-bold uppercase tracking-widest military-pulse">
            <Zap className="w-4 h-4" />
            <span>REKRUTIERUNG AKTIV</span>
            <Zap className="w-4 h-4" />
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-8 scale-in-center">
          <h1 className="military-heading text-6xl md:text-8xl mb-4 leading-none text-white">
            <span className="text-[hsl(var(--military-success))] drop-shadow-lg">NC-ARMY</span>
          </h1>
          <div className="text-2xl md:text-3xl font-bold text-[hsl(var(--military-desert))] uppercase tracking-wider">
            ELITEEINHEIT • NARCO CITY
          </div>
        </div>

        {/* Military Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-mono">
          [KLASSIFIZIERT] Hochspezialisierte Militäreinheit mit strengsten Auswahlkriterien.<br />
          Mission: Aufrechterhaltung von Ordnung und Sicherheit in der Konfliktzone Narco City.<br />
          <span className="text-[hsl(var(--military-success))]">Nur die Besten werden zugelassen.</span>
        </p>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-[hsl(var(--military-charcoal))]/50 border-l-4 border-[hsl(var(--military-success))] p-6 slide-in-left">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-8 w-8 text-[hsl(var(--military-success))] mr-3" />
              <span className="text-4xl font-bold text-white">50+</span>
            </div>
            <p className="text-[hsl(var(--military-desert))] font-bold uppercase tracking-wide">SOLDATEN</p>
          </div>
          
          <div className="bg-[hsl(var(--military-charcoal))]/50 border-l-4 border-[hsl(var(--military-success))] p-6 slide-in-left" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center justify-center mb-2">
              <Shield className="h-8 w-8 text-[hsl(var(--military-success))] mr-3" />
              <span className="text-4xl font-bold text-white">24/7</span>
            </div>
            <p className="text-[hsl(var(--military-desert))] font-bold uppercase tracking-wide">BEREITSCHAFT</p>
          </div>
          
          <div className="bg-[hsl(var(--military-charcoal))]/50 border-l-4 border-[hsl(var(--military-success))] p-6 slide-in-left" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center justify-center mb-2">
              <Target className="h-8 w-8 text-[hsl(var(--military-success))] mr-3" />
              <span className="text-4xl font-bold text-white">100%</span>
            </div>
            <p className="text-[hsl(var(--military-desert))] font-bold uppercase tracking-wide">PRÄZISION</p>
          </div>
          
          <div className="bg-[hsl(var(--military-charcoal))]/50 border-l-4 border-[hsl(var(--military-success))] p-6 slide-in-left" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center justify-center mb-2">
              <Award className="h-8 w-8 text-[hsl(var(--military-success))] mr-3" />
              <span className="text-4xl font-bold text-white">ELITE</span>
            </div>
            <p className="text-[hsl(var(--military-desert))] font-bold uppercase tracking-wide">STATUS</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center slide-in-right">
          <Button 
            size="lg" 
            className="military-button text-white px-10 py-6 text-lg font-bold border-none"
            onClick={() => scrollToSection('recruitment')}
          >
            <Shield className="mr-3 h-6 w-6" />
            REKRUTIERUNG STARTEN
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <Button 
            size="lg" 
            className="bg-transparent border-2 border-[hsl(var(--military-success))] text-[hsl(var(--military-success))] hover:bg-[hsl(var(--military-success))]/10 px-10 py-6 text-lg font-bold uppercase tracking-wider"
            onClick={() => scrollToSection('about')}
          >
            <Users className="mr-3 h-6 w-6" />
            EINHEIT ERKUNDEN
          </Button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-0.5 h-12 bg-gradient-to-b from-[hsl(var(--military-success))] to-transparent rounded-full military-pulse"></div>
          <div className="text-[hsl(var(--military-success))] text-xs font-mono uppercase tracking-widest">SCROLL</div>
        </div>
      </div>
    </section>
  );
}
