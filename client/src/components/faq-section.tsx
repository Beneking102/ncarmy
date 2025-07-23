import { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Target, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const faqs = [
  {
    category: "Bewerbung",
    icon: Shield,
    questions: [
      {
        q: "Wie bewerbe ich mich bei der NC-Army?",
        a: "Füllen Sie das digitale Bewerbungsformular im Recruitment-Bereich aus. Nach Prüfung durch die Personalabteilung werden Sie für den nächsten Schritt kontaktiert."
      },
      {
        q: "Welche Voraussetzungen muss ich erfüllen?",
        a: "Mindestens 18 Jahre, Visa-Level 10+, 14 Tage Straffreiheit und körperliche/geistige Eignung sind erforderlich."
      },
      {
        q: "Wie lange dauert der Bewerbungsprozess?",
        a: "Der gesamte Prozess dauert ca. 1-2 Wochen, von der digitalen Bewerbung bis zum finalen Interview."
      }
    ]
  },
  {
    category: "Ausbildung",
    icon: Target,
    questions: [
      {
        q: "Wie lange dauert die Grundausbildung?",
        a: "Die Grundausbildung dauert 5-7 Tage und umfasst alle wichtigen Basis-Module für den Dienst in der NC-Army."
      },
      {
        q: "Welche Sonderposten gibt es?",
        a: "Ausbilder, Leitstellenausbilder, Drill Sergeant, Abteilungsleitung und weitere spezialisierte Positionen stehen zur Verfügung."
      }
    ]
  },
  {
    category: "Dienst",
    icon: Users,
    questions: [
      {
        q: "In welchen Abteilungen kann ich dienen?",
        a: "Military Police (30 Plätze), SEALS (10 Plätze), Infanterie (20 Plätze) und Airforce (10 Plätze) stehen zur Auswahl."
      },
      {
        q: "Wie funktionieren Beförderungen?",
        a: "Beförderungen basieren auf Leistung, Dienstzeit und verfügbaren Positionen. Die Personalabteilung verwaltet alle Rangzuweisungen."
      }
    ]
  },
  {
    category: "Technical",
    icon: Clock,
    questions: [
      {
        q: "Welche Discord-Server werden verwendet?",
        a: "Alle Kommunikation läuft über den offiziellen NC-Army Discord Server. Der Link wird nach erfolgreicher Bewerbung bereitgestellt."
      },
      {
        q: "Gibt es mobile Unterstützung?",
        a: "Ja, die NC-Army Website ist vollständig responsive und für alle Geräte optimiert."
      }
    ]
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      newOpenItems.add(itemId);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 bg-[hsl(var(--military-charcoal))] tactical-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-4 flex justify-center">
            <div className="px-4 py-2 bg-[hsl(var(--military-success))]/10 border border-[hsl(var(--military-success))]/30">
              <span className="text-[hsl(var(--military-success))] font-mono text-sm uppercase tracking-widest">[FAQ]</span>
            </div>
          </div>
          <h2 className="military-heading text-5xl md:text-6xl mb-6 text-white">HÄUFIGE FRAGEN</h2>
          <div className="text-lg text-gray-300 max-w-4xl mx-auto font-mono leading-relaxed space-y-2">
            <p className="text-center">ANTWORTEN AUF DIE WICHTIGSTEN FRAGEN</p>
            <p className="text-center"><span className="text-[hsl(var(--military-success))]">KLICKEN SIE AUF EINE FRAGE FÜR DETAILLIERTE INFORMATIONEN</span></p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card key={categoryIndex} className="bg-[hsl(var(--military-dark))]/50 border-[hsl(var(--military-success))]/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Icon className="h-6 w-6 text-[hsl(var(--military-success))]" />
                    <h3 className="text-xl font-bold text-white military-heading">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const itemId = `${categoryIndex}-${faqIndex}`;
                      const isOpen = openItems.has(itemId);
                      
                      return (
                        <div key={faqIndex} className="border border-gray-600 hover:border-[hsl(var(--military-success))]/50 transition-colors">
                          <button
                            className="w-full p-4 flex items-center justify-between text-left hover:bg-[hsl(var(--military-success))]/5 transition-colors"
                            onClick={() => toggleItem(itemId)}
                          >
                            <span className="text-white font-mono text-sm">{faq.q}</span>
                            {isOpen ? 
                              <ChevronUp className="h-4 w-4 text-[hsl(var(--military-success))]" /> : 
                              <ChevronDown className="h-4 w-4 text-[hsl(var(--military-success))]" />
                            }
                          </button>
                          
                          {isOpen && (
                            <div className="p-4 pt-0 border-t border-gray-600">
                              <p className="text-gray-300 font-mono text-sm leading-relaxed">{faq.a}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}