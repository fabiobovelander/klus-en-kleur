import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
              Meer dan alleen schilderwerk
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Klus en Kleur Totaalonderhoud is uw partner voor hoogwaardig schilderwerk en woningonderhoud. 
              Wij begrijpen dat uw huis uw thuis is. Daarom werken wij niet alleen vakkundig, maar ook netjes en betrouwbaar.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Of het nu gaat om het opfrissen van uw woonkamer of het volledig renoveren van uw gevel, 
              ons team staat klaar met persoonlijk advies en een glimlach.
            </p>

            <div className="space-y-4">
              {[
                "Duidelijke en snelle communicatie",
                "Afspraak is afspraak",
                "Schoon en netjes werken",
                "Professioneel eindresultaat"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="text-brand-accent w-6 h-6 flex-shrink-0" />
                  <span className="text-brand-primary font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/seed/painter/800/600" 
                alt="Professionele schilder aan het werk in een woonkamer" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent mix-blend-multiply" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent/20 rounded-full blur-2xl -z-0" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-brand-accent-blue/20 rounded-full blur-3xl -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
