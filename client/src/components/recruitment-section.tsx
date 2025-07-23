import { useState, useEffect, useRef } from "react";
import { Laptop, Brain, Map, Handshake, Clock, NotebookPen, Check, Shield, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { 
    icon: Laptop, 
    title: "DIGITAL APPLICATION", 
    code: "STEP 01",
    description: "AUSFÜLLEN DES DIGITALEN BEWERBUNGSFORMULARS", 
    active: true,
    color: "text-[hsl(var(--military-success))]",
    bgColor: "bg-[hsl(var(--military-success))]/10",
    borderColor: "border-[hsl(var(--military-success))]"
  },
  { 
    icon: Brain, 
    title: "THEORY ASSESSMENT", 
    code: "STEP 02",
    description: "NACHWEIS VON GRUNDKENNTNISSEN UND STRATEGISCHEM DENKEN", 
    active: false,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400"
  },
  { 
    icon: Map, 
    title: "TACTICAL SIMULATION", 
    code: "STEP 03",
    description: "PRAKTISCHE SITUATIONSBEWERTUNG UND LAGESPIEL", 
    active: false,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400"
  },
  { 
    icon: Handshake, 
    title: "COMMAND INTERVIEW", 
    code: "STEP 04",
    description: "PERSÖNLICHES AUSWAHLGESPRÄCH MIT DER FÜHRUNGSEBENE", 
    active: false,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400"
  },
  { 
    icon: Shield, 
    title: "PROBATIONARY PERIOD", 
    code: "STEP 05",
    description: "BEWÄHRUNG IM AKTIVEN DIENST UND FINALBEURTEILUNG", 
    active: false,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400"
  }
];

const requirements = [
  { text: "MINDESTENS 18 JAHRE ALT", priority: "KRITISCH" },
  { text: "VISA-LEVEL MINDESTENS 10", priority: "KRITISCH" },
  { text: "EMPFEHLUNGSSCHREIBEN VON AKTIVEN MITGLIEDERN", priority: "BEVORZUGT" },
  { text: "BEREITSCHAFT ZU REGELMÄßIGEM TRAINING", priority: "ERFORDERLICH" },
  { text: "14 TAGE STRAFFREIHEIT", priority: "KRITISCH" },
  { text: "KÖRPERLICHE UND GEISTIGE EIGNUNG", priority: "ERFORDERLICH" }
];

interface ApplicationForm {
  name: string;
  gameInfo: string;
  preferredUnit: string;
  visaLevel: string;
  motivation: string;
}

export default function RecruitmentSection() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ApplicationForm>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const onSubmit = async (data: ApplicationForm) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      toast({
        title: "Bewerbung eingereicht",
        description: "Ihre Bewerbung wurde erfolgreich übermittelt. Sie erhalten in Kürze eine Bestätigung.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Bei der Übermittlung Ihrer Bewerbung ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="recruitment" className="py-20 bg-[hsl(var(--military-charcoal))] tactical-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="mb-4 flex justify-center">
            <div className="px-4 py-2 bg-[hsl(var(--military-success))]/10 border border-[hsl(var(--military-success))]/30">
              <span className="text-[hsl(var(--military-success))] font-mono text-sm uppercase tracking-widest">[REKRUTIERUNG]</span>
            </div>
          </div>
          <h2 className="military-heading text-5xl md:text-6xl mb-6 text-white">RECRUITMENT PROCESS</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto font-mono leading-relaxed">
            MEHRSTUFIGES AUSWAHLVERFAHREN • HÖCHSTE STANDARDS<br />
            <span className="text-[hsl(var(--military-success))]">NUR DIE BESTEN WERDEN TEIL DER NC-ARMY</span>
          </p>
        </div>

        {/* Process Steps */}
        <div className={`mb-16 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index} 
                  className={`${step.bgColor} border-2 ${step.borderColor} transition-all duration-500 hover:scale-105`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-6">
                      <div className={`w-20 h-20 ${step.bgColor} border-2 ${step.borderColor} flex items-center justify-center`}>
                        <Icon className={`h-10 w-10 ${step.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`text-sm px-3 py-1 ${step.bgColor} ${step.color} font-mono border ${step.borderColor}`}>
                            {step.code}
                          </span>
                          {step.active && (
                            <span className="text-xs px-2 py-1 bg-[hsl(var(--military-success))]/20 text-[hsl(var(--military-success))] border border-[hsl(var(--military-success))]/30 font-mono">
                              AKTIV
                            </span>
                          )}
                        </div>
                        <h4 className="text-xl font-bold text-white military-heading">{step.title}</h4>
                        <p className="text-gray-300 font-mono text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Requirements */}
        <div className={`mb-16 ${isVisible ? 'slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <Card className="bg-[hsl(var(--military-charcoal))]/50 border-2 border-[hsl(var(--military-success))]/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white military-heading mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-[hsl(var(--military-success))]" />
                ANFORDERUNGEN & VORAUSSETZUNGEN
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-[hsl(var(--military-dark))]/50 border border-gray-600">
                    <div className="w-3 h-3 bg-[hsl(var(--military-success))] rounded-full"></div>
                    <span className="text-gray-300 font-mono text-sm flex-1">{req.text}</span>
                    <span className={`text-xs px-2 py-1 font-mono ${
                      req.priority === 'KRITISCH' 
                        ? 'bg-red-400/20 text-red-400 border border-red-400/30' 
                        : req.priority === 'ERFORDERLICH'
                        ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                        : 'bg-blue-400/20 text-blue-400 border border-blue-400/30'
                    }`}>
                      {req.priority}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Application Form */}
        <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <Card className="bg-[hsl(var(--military-charcoal))]/50 border-2 border-[hsl(var(--military-success))]/30 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[hsl(var(--military-success))]/20 border-2 border-[hsl(var(--military-success))] flex items-center justify-center mx-auto mb-4">
                  <NotebookPen className="h-8 w-8 text-[hsl(var(--military-success))]" />
                </div>
                <h3 className="text-3xl font-bold military-heading text-white">BEWERBUNGSFORMULAR</h3>
                <p className="text-gray-300 font-mono text-sm mt-2">VERTRAULICH • NUR FÜR AUTORISIERTE BEWERBER</p>
              </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-white font-mono uppercase tracking-wide">VOLLSTÄNDIGER NAME *</Label>
                  <Input
                    id="name"
                    {...register("name", { required: "Name ist erforderlich" })}
                    placeholder="MAX MUSTERMANN"
                    className="bg-[hsl(var(--military-dark))] border-[hsl(var(--military-success))]/30 text-white font-mono placeholder:text-gray-500 focus:border-[hsl(var(--military-success))] focus:ring-[hsl(var(--military-success))]"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1 font-mono">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="gameInfo" className="text-white font-mono uppercase tracking-wide">IN-GAME NAME *</Label>
                  <Input
                    id="gameInfo"
                    {...register("gameInfo", { required: "In-Game Name ist erforderlich" })}
                    placeholder="PLAYER123"
                    className="bg-[hsl(var(--military-dark))] border-[hsl(var(--military-success))]/30 text-white font-mono placeholder:text-gray-500 focus:border-[hsl(var(--military-success))] focus:ring-[hsl(var(--military-success))]"
                  />
                  {errors.gameInfo && <p className="text-red-400 text-sm mt-1 font-mono">{errors.gameInfo.message}</p>}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="preferredUnit" className="text-white font-mono uppercase tracking-wide">BEVORZUGTE EINHEIT *</Label>
                  <select
                    {...register("preferredUnit", { required: "Einheit auswählen" })}
                    className="w-full p-3 bg-[hsl(var(--military-dark))] border border-[hsl(var(--military-success))]/30 text-white font-mono rounded-lg focus:ring-2 focus:ring-[hsl(var(--military-success))] focus:border-[hsl(var(--military-success))]"
                  >
                    <option value="">EINHEIT AUSWÄHLEN</option>
                    <option value="military-police">MILITARY POLICE</option>
                    <option value="seals">SEALS</option>
                    <option value="infantry">INFANTERIE</option>
                    <option value="airforce">AIRFORCE</option>
                  </select>
                  {errors.preferredUnit && <p className="text-red-400 text-sm mt-1 font-mono">{errors.preferredUnit.message}</p>}
                </div>
                <div>
                  <Label htmlFor="visaLevel" className="text-white font-mono uppercase tracking-wide">AKTUELLER VISA-LEVEL *</Label>
                  <Input
                    id="visaLevel"
                    type="number"
                    min="10"
                    max="20"
                    {...register("visaLevel", { 
                      required: "Visa-Level ist erforderlich",
                      min: { value: 10, message: "Mindestens Level 10" },
                      max: { value: 20, message: "Maximal Level 20" }
                    })}
                    placeholder="10"
                    className="bg-[hsl(var(--military-dark))] border-[hsl(var(--military-success))]/30 text-white font-mono placeholder:text-gray-500 focus:border-[hsl(var(--military-success))] focus:ring-[hsl(var(--military-success))]"
                  />
                  {errors.visaLevel && <p className="text-red-400 text-sm mt-1 font-mono">{errors.visaLevel.message}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="motivation" className="text-white font-mono uppercase tracking-wide">MOTIVATIONSSCHREIBEN *</Label>
                <Textarea
                  id="motivation"
                  rows={5}
                  {...register("motivation", { 
                    required: "Motivationsschreiben ist erforderlich",
                    minLength: { value: 50, message: "Mindestens 50 Zeichen erforderlich" }
                  })}
                  placeholder="ERKLÄREN SIE IHRE MOTIVATION, DER NC-ARMY BEIZUTRETEN..."
                  className="bg-[hsl(var(--military-dark))] border-[hsl(var(--military-success))]/30 text-white font-mono placeholder:text-gray-500 focus:border-[hsl(var(--military-success))] focus:ring-[hsl(var(--military-success))]"
                />
                {errors.motivation && <p className="text-red-400 text-sm mt-1 font-mono">{errors.motivation.message}</p>}
              </div>

              {/* Discord Integration Notice */}
              <div className="bg-blue-500/10 border border-blue-500/30 p-4 mb-6">
                <h4 className="text-blue-400 font-bold mb-2 military-heading text-sm">DISCORD INTEGRATION</h4>
                <p className="text-gray-300 text-xs font-mono leading-relaxed">
                  BEWERBUNGEN WERDEN AUTOMATISCH AN UNSER DISCORD-SYSTEM WEITERGELEITET.<br />
                  STELLEN SIE SICHER, DASS IHR DISCORD-NAME MIT IHREM IN-GAME NAME ÜBEREINSTIMMT.
                </p>
              </div>

              <div className="pt-6 border-t border-[hsl(var(--military-success))]/20">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[hsl(var(--military-success))] hover:bg-[hsl(var(--military-success))]/90 text-white py-4 font-bold text-lg military-heading"
                >
                  <NotebookPen className="mr-2 h-5 w-5" />
                  {isSubmitting ? "WIRD ÜBERMITTELT..." : "BEWERBUNG EINREICHEN"}
                </Button>
              </div>
            </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
