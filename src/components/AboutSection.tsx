import { Check } from "lucide-react";

export const AboutSection = () => {
  const benefits = [
    "Über 50 Jahre Erfahrung in der Lackfrontenfertigung – Qualität aus Tradition.",
    "Hochmoderne Produktionsanlagen auf 3000 qm für präzise und langlebige Oberflächen.",
    "Maßgeschneiderte Lösungen für Industrie, Handwerk und Innenausbau.",
    "Individuelle Farbgestaltung mit einer jährlich aktualisierten Farbpalette.",
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
          <iframe
                width="100%"
              height="370"
  src="https://www.youtube.com/embed/uEV559c8qzI"
  title="YouTube Video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

          </div>
          <div className="animate-fade-in">
            <h2 className="mb-6">Warum Wolter Lackfronten?</h2>
            <p className="mb-8">
              Wolter Lackfronten vereint langjährige Erfahrung mit modernster Technik. Unser Anspruch ist höchste Präzision, Qualität und Flexibilität – von Einzelstücken bis hin zur Serienfertigung.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
