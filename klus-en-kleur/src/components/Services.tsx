import { motion } from 'motion/react';
import { Paintbrush, Home, Ruler, Palette } from 'lucide-react';

const services = [
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: "Binnenschilderwerk",
    description: "Van woonkamers tot trappenhuizen. Wij zorgen voor strakke muren, plafonds en kozijnen met hoogwaardige verf en precisie."
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Buitenschilderwerk",
    description: "Bescherm uw woning tegen weer en wind. Wij schilderen gevels, kozijnen en deuren voor een duurzaam en stralend resultaat."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Kleuradvies & Styling",
    description: "Twijfelt u over de kleur? Wij adviseren u graag over combinaties die passen bij uw interieur en persoonlijke smaak."
  },
  {
    icon: <Ruler className="w-8 h-8" />,
    title: "Totaalonderhoud",
    description: "Naast schilderen verzorgen wij ook klein timmerwerk en wandafwerking, zodat alles er weer als nieuw uitziet."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-primary mb-4"
          >
            Onze Diensten
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Vakmanschap voor elke klus. Wij leveren kwaliteit en service waar u op kunt bouwen.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-brand-beige p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-brand-secondary/50 group"
            >
              <div className="bg-brand-white w-16 h-16 rounded-full flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Wavy Background Element */}
      <div className="absolute top-1/2 left-0 w-full h-64 -translate-y-1/2 bg-gradient-to-r from-brand-secondary/20 to-transparent skew-y-3 pointer-events-none" />
    </section>
  );
}
