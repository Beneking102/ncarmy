import { FileText, ClipboardList, ArrowUp, AlertTriangle, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const templates = [
  {
    icon: FileText,
    title: "Operationsplan",
    description: "Vorlage für Missionsplanung",
    color: "text-red-500",
    bgColor: "bg-red-500"
  },
  {
    icon: ClipboardList,
    title: "Einsatzbericht",
    description: "Nachbereitung von Operationen",
    color: "text-blue-500",
    bgColor: "bg-blue-500"
  },
  {
    icon: ArrowUp,
    title: "Beförderungsvorlage",
    description: "Antrag auf Rangerhöhung",
    color: "text-primary",
    bgColor: "bg-primary"
  },
  {
    icon: AlertTriangle,
    title: "Disziplinarvorlage",
    description: "Dokumentation von Vergehen",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500"
  }
];

export default function DownloadsSection() {
  const handleDownload = (templateName: string) => {
    // In a real implementation, this would trigger a file download
    console.log(`Downloading ${templateName} template`);
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Downloads & Vorlagen</h2>
          <p className="text-xl text-gray-300">Professionelle Templates für alle Verwaltungsabläufe</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => {
            const Icon = template.icon;
            return (
              <Card 
                key={index} 
                className="bg-[hsl(var(--military-dark))]/50 border-[hsl(var(--military-sage))]/20 hover:bg-[hsl(var(--military-dark))]/70 transition-all cursor-pointer group"
              >
                <CardContent className="p-6 text-center">
                  <Icon className={`h-12 w-12 ${template.color} mx-auto mb-4`} />
                  <h4 className="font-bold mb-2 text-white">{template.title}</h4>
                  <p className="text-sm text-gray-300 mb-4">{template.description}</p>
                  <Button 
                    onClick={() => handleDownload(template.title)}
                    className={`${template.bgColor} hover:opacity-90 text-white text-sm font-bold transition-all group-hover:scale-105`}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    PDF
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
