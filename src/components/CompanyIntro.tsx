export const CompanyIntro = () => {
  return (
    <section className="py-20 bg-white" id="ueber-wolter">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img 
            src="/images/wf_logo.png" 
            alt="Wolter Lackfronten Logo" 
            className="h-20 w-auto"
          />
        </div>

        <div className="mt-6 text-center">
          <p className=" mb-6">
            Seit über 50 Jahren fertigt Wolter Lackfronten hochwertige Lackoberflächen für Möbel und Innenausbau. In dritter Generation setzt das Unternehmen Maßstäbe in Qualität, Präzision und Design. Mit modernster Technik auf 3000 qm Produktionsfläche entstehen individuelle Lösungen – von Einzelstücken bis hin zur Serienfertigung. Durch jahrelange Erfahrung und enge Zusammenarbeit mit Industrie, Handwerk und Innenarchitekten garantiert Wolter höchste Flexibilität und exzellente Ergebnisse.
          </p>
        </div>
      </div>
    </section>
  );
};
