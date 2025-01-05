import { Check } from "lucide-react";

export const AboutSection = () => {
  const benefits = [
    "30+ Years of Excellence",
    "Custom Design Solutions",
    "Premium Materials",
    "Expert Craftsmanship",
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2968&auto=format&fit=crop"
              alt="Craftsmanship"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="animate-fade-in">
            <h2 className="text-4xl font-light mb-6">Why Choose Foster Kitchens</h2>
            <p className="text-gray mb-8">
              With over three decades of experience, we've perfected the art of creating
              exceptional kitchens that combine stunning design with practical functionality.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <Check className="text-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};