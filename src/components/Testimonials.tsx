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
      name: "Sarah Johnson",
      role: "Homeowner",
      quote: "The attention to detail and quality of work exceeded our expectations. The team was professional and completed the project on time.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Developer",
      quote: "Foster Kitchens delivered exceptional results for our luxury development project. Their expertise in modern design truly shows.",
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Interior Designer",
      quote: "Working with Foster Kitchens was a pleasure. Their innovative approach to kitchen design brings fresh perspectives to every project.",
    },
    {
      id: 4,
      name: "David Miller",
      role: "Restaurant Owner",
      quote: "The commercial kitchen they designed for us perfectly balances functionality and aesthetics. Couldn't be happier with the results.",
    },
  ];

  return (
    <section className="py-20 bg-primary-darker text-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-light text-center mb-16">Customer Reviews</h2>
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
          <CarouselPrevious className="border-0 -left-12 hover:bg-white/20" />
          <CarouselNext className="border-0 -right-12 hover:bg-white/20" />
        </Carousel>
      </div>
    </section>
  );
};