import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  {
    id: 1,
    name: "Edelstahlspülen",
    image: "public/images/edelstahlspühle.jpg", // Ersetze dies durch das echte Bild
    description: "Robuste und pflegeleichte Edelstahlspülen, die Ihre Küche funktional und stilvoll bereichern. Perfekt für moderne Haushalte, die Qualität und Langlebigkeit schätzen.",
  },
  {
    id: 2,
    name: "Mischbatterien",
    image: "public/images/mischbatterien.jpg", // Ersetze dies durch das echte Bild
    description: "Elegante Mischbatterien für Ihre Küche: Hohe Funktionalität trifft auf modernes Design. Perfekt für anspruchsvolle Haushalte, die Wert auf Komfort und Stil legen.",
  },
  {
    id: 3,
    name: "Induktionskochfelder",
    image: "public/images/induktionskochfelder.jpg", // Ersetze dies durch das echte Bild
    description: "Energieeffiziente Induktionskochfelder für präzises Kochen mit schneller Hitzeentwicklung und gleichmäßiger Temperaturverteilung – ideal für Ihre moderne Küche.",
  },
  {
    id: 4,
    name: "Gaskochfelder",
    image: "public/images/gaskochfolder.jpg", // Ersetze dies durch das echte Bild
    description: "Professionelle Gaskochfelder für passionierte Köche, die das authentische Kocherlebnis mit präziser Flammenkontrolle schätzen. Ideal für schnelle und gleichmäßige Erwärmung.",
  },
  {
    id: 5,
    name: "Dunstabzugshauben",
    image: "public/images/dunstabzugshaube.jpg", // Ersetze dies durch das echte Bild
    description: "Effiziente Dunstabzugshauben, die unangenehme Dämpfe und Gerüche zuverlässig entfernen und gleichzeitig Ihre Küche mit stilvollem Design ergänzen.",
  },
  {
    id: 6,
    name: "Backöfen und Zubehör",
    image: "public/images/backofen.jpg", // Ersetze dies durch das echte Bild
    description: "Innovative Backöfen mit fortschrittlichen Funktionen und hochwertigem Zubehör, die das Backen und Kochen zu einem mühelosen und genussvollen Erlebnis machen.",
  },
  {
    id: 7,
    name: "Outdoor",
    image: "public/images/outdoor_v2.jpg", // Ersetze dies durch das echte Bild
    description: "Küchengeräte für den Outdoor-Bereich: Robuste, wetterfeste Geräte, die Ihnen ermöglichen, auch im Freien leckere Mahlzeiten zuzubereiten – perfekt für Grillabende und Outdoor-Events.",
  },
  {
    id: 8,
    name: "Aufsatzgerät und Edelstahl-Arbeitsplatte",
    image: "public/images/aufsatzgerät.jpg", // Ersetze dies durch das echte Bild
    description: "Praktische Aufsatzgeräte und elegante Edelstahl-Arbeitsplatten, die nicht nur funktional sind, sondern auch einen modernen Touch in Ihre Küche bringen.",
  },
  {
    id: 9,
    name: "Geschirrspüler",
    image: "public/images/geschirrspüler.jpg", // Ersetze dies durch das echte Bild
    description: "Hightech-Geschirrspüler, die mit modernster Technologie ausgestattet sind, um Ihnen eine mühelose und effiziente Reinigung zu ermöglichen. Für glänzende Sauberkeit ohne Aufwand.",
  },
  {
    id: 10,
    name: "Steckdosen",
    image: "public/images/steckdosen.jpg", // Ersetze dies durch das echte Bild
    description: "Hightech-Geschirrspüler, die mit modernster Technologie ausgestattet sind, um Ihnen eine mühelose und effiziente Reinigung zu ermöglichen. Für glänzende Sauberkeit ohne Aufwand.",
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
    <section className="py-20 bg-gray-light" id="produkte">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-light text-center mb-12 uppercase">Produkte</h2>
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
                      <h3 className="text-xl lowercase font-[500] md:text-2xl mb-2">{product.name}</h3>
                      <p className="text-gray mb-4">{product.description}</p>
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