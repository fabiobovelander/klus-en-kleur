import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Familie de Vries",
    role: "Huiseigenaar",
    text: "Klus en Kleur heeft onze hele benedenverdieping geschilderd. Wat een vakmensen! Alles netjes afgeplakt en keurig achtergelaten. Het resultaat is prachtig.",
    rating: 5
  },
  {
    name: "Mark Jansen",
    role: "Appartement eigenaar",
    text: "Duidelijke offerte en snelle communicatie. Ze kwamen hun afspraken na en dachten goed mee over de kleurkeuze voor de slaapkamer.",
    rating: 5
  },
  {
    name: "Sarah van den Berg",
    role: "Renovatie project",
    text: "De buitenkant van ons huis ziet er weer als nieuw uit. Erg blij met het advies en de uitvoering. Zeker een aanrader!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-beige relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#2C3E50 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-primary text-center mb-16">
          Wat klanten zeggen
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-white p-8 rounded-2xl shadow-sm border border-brand-secondary/50 flex flex-col"
            >
              <div className="flex space-x-1 mb-4 text-brand-accent">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.text}"</p>
              <div>
                <h4 className="font-bold text-brand-primary">{testimonial.name}</h4>
                <span className="text-sm text-gray-500">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
