export const CompanyIntro = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-10">
            <img 
              src="/foster-logo.png" 
              alt="Foster Kitchens Logo" 
              className="mx-auto h-20 w-auto"
            />
          </div>
          <h2 className="text-4xl font-light mb-8">About Foster</h2>
          <p className="text-gray text-lg leading-relaxed mb-6">
            Since 1990, Foster Kitchens has been at the forefront of innovative kitchen design, 
            transforming spaces into beautiful, functional environments where memories are made 
            and shared. Our journey began with a simple vision: to create kitchens that perfectly 
            blend form and function, reflecting the unique personality of each homeowner.
          </p>
          <p className="text-gray text-lg leading-relaxed">
            Today, we continue to push the boundaries of kitchen design, combining traditional 
            craftsmanship with modern innovation. Every Foster kitchen is a testament to our 
            commitment to quality, creativity, and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};