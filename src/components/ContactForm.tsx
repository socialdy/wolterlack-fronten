import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <section className="py-20">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light mb-4">Book a Consultation</h2>
          <p className="text-gray">
            Let's discuss your dream kitchen. Fill out the form below and we'll get back to
            you shortly.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input placeholder="First Name" required />
            <Input placeholder="Last Name" required />
          </div>
          <Input type="email" placeholder="Email Address" required />
          <Input placeholder="Phone Number" required />
          <Textarea
            placeholder="Tell us about your project"
            className="min-h-[150px]"
            required
          />
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white py-6"
          >
            Submit Request
          </Button>
        </form>
      </div>
    </section>
  );
};