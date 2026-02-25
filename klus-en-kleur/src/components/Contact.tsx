import { motion } from 'motion/react';
import { Send, Phone, MapPin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-primary text-brand-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Klaar voor een frisse start?
            </h2>
            <p className="text-brand-secondary text-lg mb-12 leading-relaxed">
              Neem contact op voor een vrijblijvende offerte of advies op maat. 
              Wij reageren doorgaans binnen één werkdag.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-accent/20 p-3 rounded-full">
                  <Phone className="text-brand-accent w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Bel ons</h3>
                  <p className="text-brand-secondary">06 1234 5678</p>
                  <p className="text-sm text-gray-400 mt-1">Ma - Vr: 08:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-accent/20 p-3 rounded-full">
                  <Mail className="text-brand-accent w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Mail ons</h3>
                  <p className="text-brand-secondary">info@klus-en-kleur.nl</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-accent/20 p-3 rounded-full">
                  <MapPin className="text-brand-accent w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Werkgebied</h3>
                  <p className="text-brand-secondary">Regio Amsterdam, Utrecht en omstreken</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-white text-brand-primary p-8 rounded-3xl shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Voornaam</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all bg-gray-50" placeholder="Jan" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Achternaam</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all bg-gray-50" placeholder="Jansen" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all bg-gray-50" placeholder="jan@voorbeeld.nl" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bericht</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all bg-gray-50" placeholder="Ik wil graag een offerte voor..." />
              </div>

              <button className="w-full bg-brand-accent text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                <span>Verstuur Bericht</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
