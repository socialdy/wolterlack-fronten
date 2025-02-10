import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Andreas Hofmann",
      role: "Innenarchitekt",
      quote: "Die Stone-Veneer-Fronten von Wolter sind einzigartig. Jedes Blatt hat eine individuelle Maserung, was meinen Projekten eine exklusive Note verleiht. Kunden sind begeistert von der natürlichen Optik und der hochwertigen Verarbeitung.",
    },
    {
      id: 2,
      name: "Sabine Keller",
      role: "Privatkunde",
      quote: "Wir haben uns für die Groove-Lackfronten entschieden, weil wir eine moderne Küche mit besonderen Akzenten wollten. Das Spiel mit Licht und Schatten durch die feine Struktur macht unsere Küche zu einem echten Blickfang.",
    },
    {
      id: 3,
      name: "Johannes Meier",
      role: "Schreinermeister",
      quote: "Wolter Lackfronten bietet eine Qualität, die man sieht und fühlt. Besonders beeindruckt bin ich von den Oslo-Fronten mit Edelstahlgriffen – edel, robust und absolut präzise verarbeitet.",
    },
    {
      id: 4,
      name: "Katrin Lehmann",
      role: "Möbeldesignerin",
      quote: "Die Metallic-Lackierungen von Wolter sind ein Traum für moderne Interieurs. Die Burnished Brush Oberfläche verleiht den Möbeln eine edle und zugleich industrielle Note – genau das, was meine Kunden suchen.",
    },
  ];

  return (
    <section className="py-20 bg-[#F4F4F4] text-white" id="referenzen">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-center mb-16">Referenzen</h2>
        <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto relative">
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white p-8 h-full animate-fade-in">
                  <div className="flex flex-col h-full justify-between">
                    <p className="mb-8">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -left-12 z-10 hover:bg-white/20 text-black" />
          <CarouselNext className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -right-12 z-10 hover:bg-white/20 text-black" />
        </Carousel>
      </div>
    </section>
  );
};
