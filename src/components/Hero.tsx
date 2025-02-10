import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_bg.jpg"
          alt="Wolter Lackfronten Küche"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="max-w-7xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6  max-w-screen-lg break-words font-roboto">
            Maßgeschneiderte Küchenfronten von Wolter Lackfronten
          </h1>

          <p className=" text-white">
            Entdecken Sie exklusive Küchenfronten von Wolter Lackfronten –{' '}
            <br />
            Qualität und Innovation für Ihre Traumküche im Küchenstudio Bergheim
          </p>

          <a href="/#beratung">
            <Button className="bg-[#469CE9] hover:bg-[#469CE9]/80 text-white px-6 py-3 mt-9">
              Beratungstermin buchen
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
