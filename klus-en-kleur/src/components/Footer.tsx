export default function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-secondary py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-1">KLUS EN KLEUR</h3>
          <p className="text-sm opacity-60">Totaalonderhoud & Schilderwerken</p>
        </div>
        
        <div className="text-sm opacity-50 text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Klus en Kleur Totaalonderhoud.</p>
          <p>Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
