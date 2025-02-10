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
          <div>
            <video controls className="shadow-xl h-full w-full">
              <source src="https://www.wolter-lackfronten.de/wp-content/uploads/2020/10/Wolter_Lackfronten_GmbH_Handwerker.mp4" type="video/mp4" />
              Dein Browser unterstützt kein Video-Tag.
            </video>
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
