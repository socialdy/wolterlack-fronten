export const CompanyIntro = () => {
  return (
    <section className="py-20 bg-white" id="ueber-foster">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">

          <img 
            src="src/images/fosterlogo.png" 
            alt="Foster Kitchens Logo" 
            className="h-10 w-auto"
          />
          
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray text-lg leading-relaxed mb-6">
            Foster ist eine italienische Marke, die weltweit in über 50 Ländern vertreten ist. Gegründet im Jahr 1973, steht Foster für höchste Handwerkskunst, modernes Design und eine starke Verbindung zur italienischen Tradition. Mit vier hochspezialisierten Produktionsstätten und einem integrierten Ansatz bietet Foster innovative Küchenlösungen, die Technologie, Nachhaltigkeit und Ästhetik vereinen.
          </p>
        </div>
      </div>
    </section>
  );
};
