import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Modern Minimalist",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2968&auto=format&fit=crop",
    description: "Clean lines and contemporary design",
  },
  {
    id: 2,
    name: "Classic Elegance",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2968&auto=format&fit=crop",
    description: "Timeless beauty meets modern functionality",
  },
  {
    id: 3,
    name: "Urban Industrial",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2968&auto=format&fit=crop",
    description: "Bold designs for contemporary living",
  },
];

export const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 2 >= products.length ? 0 : current + 2));
  };

  const prev = () => {
    setCurrentIndex((current) => (current - 2 < 0 ? products.length - 2 : current - 2));
  };

  return (
    <section className="py-20 bg-gray-light">
      <div className="container">
        <h2 className="text-4xl font-light text-center mb-12">Our Collections</h2>
        <div className="relative">
          <div className="flex gap-8">
            {products.slice(currentIndex, currentIndex + 2).map((product) => (
              <div key={product.id} className="flex-1 animate-fade-in">
                <div className="bg-white shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-light mb-2">{product.name}</h3>
                    <p className="text-gray mb-4">{product.description}</p>
                    <Button 
                      variant="outline" 
                      className="hover:bg-primary hover:text-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};