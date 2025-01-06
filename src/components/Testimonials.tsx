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
      name: "Stefan Müller",
      role: "Privatkunde",
      quote: "Die neuen Gasherde von Foster haben unser Kochen revolutioniert! Die High Efficiency Brenner reduzieren den Gasverbrauch um bis zu 25% und bieten gleichzeitig bis zu 30% mehr Leistung. Einfach beeindruckend.",
    },
    {
      id: 2,
      name: "Laura Schmitt",
      role: "Immobilienentwicklerin",
      quote: "Foster Küchen haben nicht nur durch ihr modernes Design überzeugt, sondern auch durch ihre Energieeffizienz. Die neuesten Geräte erreichen die höchste Energieklasse A+++, was sie perfekt für unsere Luxusimmobilien macht.",
    },
    {
      id: 3,
      name: "Janine Becker",
      role: "Innenarchitektin",
      quote: "Die elegante Verarbeitung des Stahls in den Foster Küchen ist unverkennbar. Die Materialien sind nicht nur ästhetisch, sondern auch sehr pflegeleicht – das ist ein perfektes Zusammenspiel von Funktionalität und Design.",
    },
    {
      id: 4,
      name: "Maximilian Schwarz",
      role: "Restaurantbesitzer",
      quote: "Foster hat uns eine kommerzielle Küche geliefert, die sowohl funktional als auch ästhetisch ansprechend ist. Die Geräte bieten uns hohe Leistung bei niedrigerem Energieverbrauch, was in unserem Betrieb einen großen Unterschied macht.",
    },
  ];

  return (
    <section className="py-20 bg-primary-darker text-white" id="referenzen">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-light text-center mb-16 uppercase">Referenzen</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white/10 p-8 h-full animate-fade-in">
                  <div className="flex flex-col h-full justify-between">
                    <p className="text-lg mb-8 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-300">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-0 -left-12 hover:bg-white/20 text-black" />
          <CarouselNext className="border-0 -right-12 hover:bg-white/20 text-black" />
        </Carousel>
      </div>
    </section>
  );
};
