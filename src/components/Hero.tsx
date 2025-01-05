import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2968&auto=format&fit=crop"
          alt="Luxury Kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container relative z-10 text-white">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            Crafting Your Dream Kitchen
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Experience the perfect blend of design and functionality with our custom kitchen solutions.
          </p>
          <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg">
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};