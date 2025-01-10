import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_background.png"
          alt="Luxury Kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="max-w-7xl animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 uppercase">
  Exklusive Küchenlösungen von Foster
</h1>
<p className="text-lg md:text-xl text-gray-200 font-bold"><span className="text-lg md:text-xl mb-4 text-gray-200 font-[200]">Entdecken Sie **Foster**-Designs im Premium Brand Store in **Bergheim** –</span>
<br></br>Qualität und Innovation für Ihre Traumküche
</p>

            <a href="/#beratung">
            <Button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 text-lg mt-9">
            Beratungstermin buchen
          </Button>
            </a>

       
        </div>
      </div>
    </section>
  );
};
