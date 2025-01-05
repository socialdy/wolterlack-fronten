import { Hero } from "@/components/Hero";
import { ProductSlider } from "@/components/ProductSlider";
import { AboutSection } from "@/components/AboutSection";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductSlider />
      <AboutSection />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Index;