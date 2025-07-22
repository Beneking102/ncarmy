import { useState } from "react";
import { Laptop, Brain, Map, Handshake, Clock, NotebookPen, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { icon: Laptop, title: "Online-Bewerbung", description: "Ausfüllen des digitalen Bewerbungsformulars", active: true },
  { icon: Brain, title: "Theorietest", description: "Nachweis von Grundkenntnissen", active: false },
  { icon: Map, title: "Lagespiel", description: "Praktische Situationsbewertung", active: false },
  { icon: Handshake, title: "Vor-Ort-Auswahl", description: "Persönliches Auswahlgespräch", active: false },
  { icon: Clock, title: "Probezeit", description: "Bewährung im aktiven Dienst", active: false }
];

const requirements = [
  "Mindestens 18 Jahre alt",
  "Visa-Level mindestens 3",
  "Empfehlungsschreiben von aktiven Mitgliedern bevorzugt",
  "Bereitschaft zu regelmäßigem Training"
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
    <section id="recruitment" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Recruitment</h2>
          <p className="text-xl text-gray-300">Ihr Weg zur NC-Army in fünf strukturierten Schritten</p>
        </div>

        {/* Progress Steps */}
        <div className="flex flex-wrap justify-center items-center mb-12 space-x-2 sm:space-x-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg mb-2 sm:mb-0 ${
                  step.active 
                    ? "progress-step active bg-primary text-white" 
                    : "bg-gray-600 text-gray-300"
                }`}>
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block w-8 h-1 ${
                    step.active ? "bg-[hsl(var(--military-sage))]" : "bg-gray-600"
                  }`} />
                )}
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-5 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className={`text-center p-6 ${
                  step.active 
                    ? "bg-primary/20 border-primary" 
                    : "bg-[hsl(var(--military-dark))]/50 border-[hsl(var(--military-sage))]/20"
                }`}
              >
                <CardContent className="p-0">
                  <Icon className={`h-12 w-12 mx-auto mb-3 ${
                    step.active ? "text-primary" : "text-gray-400"
                  }`} />
                  <h4 className="font-bold mb-2 text-white">{step.title}</h4>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Application Form */}
        <Card className="bg-[hsl(var(--military-dark))]/50 border-[hsl(var(--military-sage))]/20 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Bewerbungsformular</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-white">Vollständiger Name *</Label>
                  <Input
                    id="name"
                    {...register("name", { required: "Name ist erforderlich" })}
                    placeholder="Max Mustermann"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="gameInfo" className="text-white">In-Game Name *</Label>
                  <Input
                    id="gameInfo"
                    {...register("gameInfo", { required: "In-Game Name ist erforderlich" })}
                    placeholder="Player123"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                  {errors.gameInfo && <p className="text-red-400 text-sm mt-1">{errors.gameInfo.message}</p>}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="preferredUnit" className="text-white">Bevorzugte Einheit *</Label>
                  <select
                    {...register("preferredUnit", { required: "Einheit auswählen" })}
                    className="w-full p-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Einheit auswählen</option>
                    <option value="military-police">Military Police</option>
                    <option value="seals">SEALs</option>
                    <option value="infantry">Infanterie</option>
                    <option value="airforce">Luftwaffe</option>
                  </select>
                  {errors.preferredUnit && <p className="text-red-400 text-sm mt-1">{errors.preferredUnit.message}</p>}
                </div>
                <div>
                  <Label htmlFor="visaLevel" className="text-white">Aktueller Visa-Level *</Label>
                  <Input
                    id="visaLevel"
                    type="number"
                    min="1"
                    max="10"
                    {...register("visaLevel", { 
                      required: "Visa-Level ist erforderlich",
                      min: { value: 1, message: "Mindestens Level 1" },
                      max: { value: 10, message: "Maximal Level 10" }
                    })}
                    placeholder="5"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                  {errors.visaLevel && <p className="text-red-400 text-sm mt-1">{errors.visaLevel.message}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="motivation" className="text-white">Motivationsschreiben *</Label>
                <Textarea
                  id="motivation"
                  rows={5}
                  {...register("motivation", { 
                    required: "Motivationsschreiben ist erforderlich",
                    minLength: { value: 50, message: "Mindestens 50 Zeichen erforderlich" }
                  })}
                  placeholder="Erklären Sie Ihre Motivation, der NC-Army beizutreten..."
                  className="bg-gray-700 border-gray-600 text-white"
                />
                {errors.motivation && <p className="text-red-400 text-sm mt-1">{errors.motivation.message}</p>}
              </div>

              <Card className="bg-[hsl(var(--military-charcoal))]/30 border-[hsl(var(--military-sage))]/20">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2 text-white">Voraussetzungen</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {requirements.map((requirement, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 font-bold text-lg"
              >
                <NotebookPen className="mr-2 h-5 w-5" />
                {isSubmitting ? "Wird übermittelt..." : "Bewerbung einreichen"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
