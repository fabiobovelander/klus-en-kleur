import { motion } from 'motion/react';

const projects = [
  {
    title: "Woonkamer Renovatie",
    category: "Binnen",
    image: "https://picsum.photos/seed/livingroom/600/400"
  },
  {
    title: "Gevel Restauratie",
    category: "Buiten",
    image: "https://picsum.photos/seed/house/600/400"
  },
  {
    title: "Kinderkamer Styling",
    category: "Styling",
    image: "https://picsum.photos/seed/kidsroom/600/400"
  },
  {
    title: "Kozijnen Lakwerk",
    category: "Onderhoud",
    image: "https://picsum.photos/seed/window/600/400"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">Onze Projecten</h2>
          <p className="text-lg text-gray-600">Een greep uit ons recente werk.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[16/10] cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-brand-accent font-medium text-sm tracking-wider uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
