import Cal from "@calcom/embed-react";


export const ContactForm = () => {

  return (
    <section className="py-20 bg-gray-50" id="beratung">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Buchen Sie jetzt Ihren Termin!</h2>
          <p className="text-gray-600 mb-7">
            Lassen Sie uns Ihre Traumküche planen! Füllen Sie das Formular aus und buchen Sie einen Termin, der Ihnen passt.
          </p>
          <Cal calLink="rick/get-rick-rolled" config={{ theme: "light" }}></Cal>
        </div>
      </div>
    </section>
  );
};
