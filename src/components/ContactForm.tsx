import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import DateTimePicker from "react-datetime-picker"; // Importieren des DateTimePickers
import { format } from "date-fns"; // Importieren von date-fns für das Formatieren des Datums
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';



export const ContactForm = () => {
  const { toast } = useToast();
  const [dateTime, setDateTime] = useState<Date | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const handleProductChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedProducts((prev) =>
      checked ? [...prev, value] : prev.filter((product) => product !== value)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Beratungstermin erfolgreich gebucht",
      description: "Wir bestätigen Ihren Termin und Ihre Produktwahl innerhalb der nächsten 24 Stunden.",
    });
  };

  return (
    <section className="py-20 bg-gray-50" id="beratung">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Buchen Sie jetzt Ihren Beratungstermin!</h2>
          <p className="text-gray-600">
            Lassen Sie uns Ihre Traumküche planen! Füllen Sie das Formular aus und buchen Sie einen Termin, der Ihnen passt.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="first-name" className="text-sm font-medium text-gray-700">Vorname</label>
              <Input id="first-name" placeholder="Vorname" required className="border-gray-300 focus:ring-primary focus:border-primary" />
            </div>
            <div className="space-y-2">
              <label htmlFor="last-name" className="text-sm font-medium text-gray-700">Nachname</label>
              <Input id="last-name" placeholder="Nachname" required className="border-gray-300 focus:ring-primary focus:border-primary" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">E-Mail-Adresse</label>
            <Input id="email" type="email" placeholder="E-Mail-Adresse" required className="border-gray-300 focus:ring-primary focus:border-primary" />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Telefonnummer</label>
            <Input id="phone" placeholder="Telefonnummer" required className="border-gray-300 focus:ring-primary focus:border-primary" />
          </div>

          {/* Auswahl der Produkte */}
          <div className="space-y-4">
            <label className="block text-left text-sm font-medium text-gray-700">An welchen Produkten sind Sie interessiert?</label>
            <div className="space-y-3">
              {[ 
                "Küchenspülen", 
                "Mischbatterien", 
                "Induktionskochfelder", 
                "Gas-Kochfelder", 
                "Dunstabzugshauben", 
                "Backöfen und koordinierte Produkte", 
                "Outdoor-Produkte", 
                "Rangetop und Top inox", 
                "Geschirrspüler", 
                "Zubehör & Ergänzungen", 
                "Einbausteckdosen", 
                "Ausgestattete Becken", 
                "Zubehör für ausgestattete Becken" 
              ].map((product) => (
                <div key={product} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    value={product}
                    onChange={handleProductChange}
                    className="form-checkbox text-primary border-gray-300 focus:ring-primary"
                  />
                  <span className="text-gray-700">{product}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Datum auswählen */}
          <div className="space-y-2">
      <label className="block text-left text-sm font-medium text-gray-700">Bevorzugtes Datum wählen</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className="w-full justify-start text-left font-normal text-gray-700 border-gray-300 focus:ring-primary focus:border-primary"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateTime ? format(dateTime, "PPP, HH:mm") : <span>Datum und Uhrzeit auswählen</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[500px] p-0 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="relative">
            <DateTimePicker
              value={dateTime}
              onChange={setDateTime}
              disableClock={false} // Uhrzeit aktivieren
              clearIcon={null}
              format="y-MM-dd HH:mm"  // Datum und Uhrzeit anzeigen
              minDate={new Date()}
              className="w-full text-sm p-4 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>

          {/* Projektbeschreibung */}
          <div className="space-y-2">
            <label htmlFor="project-description" className="text-sm font-medium text-gray-700">Erzählen Sie uns von Ihrem Projekt</label>
            <Textarea
              id="project-description"
              placeholder="Beschreiben Sie Ihr Projekt im Detail"
              required
              className="border-gray-300 focus:ring-primary focus:border-primary"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white py-6"
          >
            Termin jetzt buchen
          </Button>
        </form>
      </div>
    </section>
  );
};
