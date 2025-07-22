import { Button } from "@/components/ui/button";
import { UserPlus, Info } from "lucide-react";

export default function HeroSection() {
  const handleRecruit = () => {
    const element = document.querySelector("#recruitment");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLearnMore = () => {
    const element = document.querySelector("#about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-primary">Stärke.</span>{" "}
          <span className="text-white">Disziplin.</span>{" "}
          <span className="text-[hsl(var(--military-sage))]">Schutz.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Wir sichern Narco City – an Land, zu Wasser und in der Luft. 
          Unsere Mission ist der Schutz der Bürger und die Wahrung der Ordnung.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleRecruit}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold text-lg transform hover:scale-105 shadow-lg"
            size="lg"
          >
            <UserPlus className="mr-2 h-5 w-5" />
            Jetzt Rekrutieren
          </Button>
          <Button
            onClick={handleLearnMore}
            variant="outline"
            className="border-2 border-[hsl(var(--military-sage))] text-[hsl(var(--military-sage))] hover:bg-[hsl(var(--military-sage))] hover:text-white px-8 py-4 rounded-lg font-bold text-lg"
            size="lg"
          >
            <Info className="mr-2 h-5 w-5" />
            Erfahre mehr
          </Button>
        </div>
      </div>
    </section>
  );
}
