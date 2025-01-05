export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2968&auto=format&fit=crop",
      quote: "The attention to detail and quality of work exceeded our expectations.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Developer",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2968&auto=format&fit=crop",
      quote: "Foster Kitchens delivered exceptional results for our luxury development project.",
    },
  ];

  return (
    <section className="py-20 bg-primary-darker text-white">
      <div className="container">
        <h2 className="text-4xl font-light text-center mb-12">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 p-8 rounded-lg animate-fade-in">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-300">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};