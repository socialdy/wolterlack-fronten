import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  {
    id: 1,
    name: "METALL",
    image: "/images/metall.png", 
    description: "Burnished Brush",
  },
  {
    id: 2,
    name: "OSLO",
    image: "/images/oslo.png", 
    description: "Griffe aus Edelstahl, Lack und Glas – Griffausschnitt farbig wählbar",
  },
  {
    id: 3,
    name: "GROOVE",
    image: "/images/groove.png", 
    description: "Lineare Struktur – ein Spiel mit Licht und Schatten",
  },
  {
    id: 4,
    name: "SIENA",
    image: "/images/siena.png", 
    description: "Moderne Landhausfronten – eine zeitgemäße Variante traditioneller Landhausstil-Architektur",
  },
  {
    id: 5,
    name: "STONE-VENEER",
    image: "/images/stone-veneer.png", 
    description: "Ein Hauch von Stein – jedes Blatt ein Unikat",
  },
  {
    id: 6,
    name: "BETON",
    image: "/images/beton.png", 
    description: "Beton und Holz – in Kombination mit Cover-Griffleiste",
  },
];




export const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const slidesPerView = isMobile ? 1 : 2;

  const next = () => {
    setCurrentIndex((current) => 
      (current + slidesPerView >= products.length ? 0 : current + slidesPerView)
    );
  };

  const prev = () => {
    setCurrentIndex((current) => 
      (current - slidesPerView < 0 ? Math.max(0, products.length - slidesPerView) : current - slidesPerView)
    );
  };

  return (
    <section className="py-20 bg-white" id="produkte">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className=" text-center mb-12 ">Produkte</h2>
        <div className="relative">
          <div className="flex gap-4 md:gap-8">
            {products
              .slice(currentIndex, currentIndex + slidesPerView)
              .map((product) => (
                <div key={product.id} className="flex-1 animate-fade-in">
                  <div className="bg-white shadow-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className=""
                    />
                    <div className="p-6 md:p-8 text-center">
                      <h3 className=" mb-2">{product.name}</h3>
                      <p className=" mb-4">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};