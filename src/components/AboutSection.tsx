import { Check } from "lucide-react";

export const AboutSection = () => {
  const benefits = [
    "Bis zu 25% weniger Gasverbrauch und bis zu 30% mehr Leistung bei den neuesten Gasherden.",
    "Einzigartige Brillanz und Langlebigkeit bei einfacher Reinigung, zertifiziert nach ISO 9001.",
    "Elegante und raffinierte Designs, die von Kunst und Schönheit inspiriert sind, geliebt von Architekten und Kunden.",
    "Reduzierung des Energieverbrauchs mit Produkten, die für bessere Ergonomie, Funktionalität und geringere Umweltauswirkungen entwickelt wurden.",
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <a href="https://fosterspa.com">
            <img
              src="/images/foster-kitchen.png"
              alt="Foster Spa Logo"
              className="shadow-xl h-full w-full"
            />
            </a>
          </div>
          <div className="animate-fade-in">
            <h2 className="text-4xl font-light uppercase mb-6">Warum Foster Küchen wählen?</h2>
            <p className="text-gray mb-8">
              Mit über drei Jahrzehnten Erfahrung haben wir die Kunst perfektioniert, außergewöhnliche Küchen zu kreieren, die beeindruckendes Design mit praktischer Funktionalität verbinden.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="text-primary" />
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
