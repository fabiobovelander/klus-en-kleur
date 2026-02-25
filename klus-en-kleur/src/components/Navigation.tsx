import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { id: 'services', label: 'Diensten' },
  { id: 'about', label: 'Over Ons' },
  { id: 'portfolio', label: 'Projecten' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-brand-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="text-xl font-bold tracking-tight cursor-pointer flex flex-col leading-none"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-brand-primary">KLUS EN KLEUR</span>
            <span className="text-brand-accent text-xs tracking-widest uppercase">Totaalonderhoud</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-brand-primary hover:text-brand-accent transition-colors font-medium text-sm tracking-wide uppercase"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-brand-accent text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Offerte Aanvragen
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-brand-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-white pt-20 px-6 pb-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 items-center justify-center min-h-[60vh]">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-3xl font-bold text-brand-primary hover:text-brand-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="w-16 h-1 bg-brand-secondary my-8 rounded-full" />
              <div className="flex flex-col items-center space-y-4 text-brand-primary">
                <div className="flex items-center space-x-2">
                  <Phone size={20} className="text-brand-accent" />
                  <span>06 1234 5678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={20} className="text-brand-accent" />
                  <span>info@klus-en-kleur.nl</span>
                </div>
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="mt-8 bg-brand-accent text-white px-8 py-4 rounded-full text-xl font-bold w-full max-w-xs shadow-lg"
              >
                Offerte Aanvragen
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
