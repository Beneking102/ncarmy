import { useState } from "react";
import { Clock, Mail, Users, NotebookPen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const trainingTimes = [
  { label: "Schießtraining:", time: "Mittwochs, 20:00 Uhr" },
  { label: "Sporttraining:", time: "Freitags, 19:30 Uhr" },
  { label: "Großübungen:", time: "Jeden ersten Samstag im Monat, 15:00 Uhr" }
];

const stats = [
  { value: "127", label: "Aktive Mitglieder" },
  { value: "89", label: "Missionen diesen Monat" },
  { value: "1,243", label: "Trainingsstunden" },
  { value: "99.8%", label: "System-Uptime" }
];

export default function ContactSection() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Nachricht gesendet",
        description: "Ihre Nachricht wurde erfolgreich übermittelt. Wir melden uns in Kürze bei Ihnen.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Bei der Übermittlung Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Kontakt & Support</h2>
          <p className="text-xl text-gray-300">Haben Sie Fragen? Wir sind für Sie da.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-[hsl(var(--military-dark))]/50 border-[hsl(var(--military-sage))]/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Kontaktformular</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="contact-name" className="text-white">Name</Label>
                  <Input
                    id="contact-name"
                    {...register("name", { required: "Name ist erforderlich" })}
                    placeholder="Ihr Name"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="contact-email" className="text-white">E-Mail</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    {...register("email", { 
                      required: "E-Mail ist erforderlich",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Ungültige E-Mail-Adresse"
                      }
                    })}
                    placeholder="ihre.email@beispiel.de"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="contact-subject" className="text-white">Betreff</Label>
                  <Select {...register("subject", { required: "Betreff auswählen" })}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Betreff auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Allgemeine Frage</SelectItem>
                      <SelectItem value="application">Bewerbung</SelectItem>
                      <SelectItem value="support">Technischer Support</SelectItem>
                      <SelectItem value="complaint">Beschwerde</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
                </div>
                <div>
                  <Label htmlFor="contact-message" className="text-white">Nachricht</Label>
                  <Textarea
                    id="contact-message"
                    rows={5}
                    {...register("message", { required: "Nachricht ist erforderlich" })}
                    placeholder="Ihre Nachricht..."
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 font-bold"
                >
                  <NotebookPen className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-[hsl(var(--military-dark))]/50 border-[hsl(var(--military-sage))]/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 flex items-center text-white">
                  <Clock className="text-primary mr-3 h-6 w-6" />
                  Trainingszeiten
                </h4>
                <div className="space-y-2 text-gray-300">
                  {trainingTimes.map((training, index) => (
                    <p key={index}>
                      <span className="font-bold">{training.label}</span> {training.time}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[hsl(var(--military-dark))]/50 border-[hsl(var(--military-sage))]/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 flex items-center text-white">
                  <Mail className="text-primary mr-3 h-6 w-6" />
                  Support
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[hsl(var(--military-sage))]" />
                    <span className="text-gray-300">support@nc-army.narco-city.de</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-500" />
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                      NC-Army Discord Server
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[hsl(var(--military-dark))]/50 border-[hsl(var(--military-sage))]/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 flex items-center text-white">
                  <Users className="text-primary mr-3 h-6 w-6" />
                  Generalstab
                </h4>
                <p className="text-gray-300 mb-3">
                  Für wichtige Anliegen wenden Sie sich direkt an unseren Generalstab. 
                  Antwortzeit: 24-48 Stunden.
                </p>
                <Button className="bg-[hsl(var(--military-olive))] hover:bg-[hsl(var(--military-olive))]/80 text-white font-bold">
                  <Users className="mr-2 h-4 w-4" />
                  Direktkontakt
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-[hsl(var(--military-charcoal))]/30 border-[hsl(var(--military-sage))]/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 text-white">Aktuelle Zahlen</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
