import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTABanner } from "@/components/CTABanner";
import workImgPizza from "@/assets/work-pizza.jpg";
import workImg2 from "@/assets/work-2.jpg";
import workImg3 from "@/assets/work-3.jpg";
import workImg4 from "@/assets/work-4.jpg";
import workImg5 from "@/assets/work-5.jpg";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "La Bella Napoli",
    category: "BRANDING",
    date: "Mar 2025",
    description:
      "Identidad visual completa para una pizzería artesanal que fusiona la tradición italiana con un toque contemporáneo y auténtico. Desde el logotipo hasta el packaging, cada elemento refleja calidez y sabor.",
    image: workImgPizza,
    services: ["Identidad Visual", "Packaging", "Fotografía", "Menú Digital"],
  },
  {
    title: "Lumen Atelier",
    category: "BRANDING",
    date: "Feb 2025",
    description:
      "Una marca de alto rendimiento creada para una nueva era de deportivos eléctricos. Diseño minimalista con toques futuristas que transmiten velocidad, innovación y emoción.",
    image: workImg2,
    services: ["Branding", "Sitio Web", "Estrategia Digital", "Motion Graphics"],
  },
  {
    title: "Nimble Apparel",
    category: "ILUSTRACIÓN",
    date: "Ago 2024",
    description:
      "Marca de ropa urbana con identidad fresca y juvenil. Creamos un sistema visual versátil con ilustraciones personalizadas, patrones únicos y una presencia digital que conecta con la generación Z.",
    image: workImg3,
    services: ["Ilustración", "Branding", "Social Media", "E-commerce"],
  },
  {
    title: "Heritage Motor",
    category: "BRANDING",
    date: "Oct 2025",
    description:
      "Rebranding completo para un taller de autos clásicos. Combinamos la nostalgia del automovilismo vintage con un diseño contemporáneo que transmite confianza y pasión por los detalles.",
    image: workImg4,
    services: ["Rebranding", "Señalización", "Sitio Web", "Fotografía"],
  },
  {
    title: "Root & Rise",
    category: "BRANDING",
    date: "Nov 2023",
    description:
      "Identidad de marca para una startup de bienestar y nutrición. Un diseño orgánico y cálido que refleja sus valores de sostenibilidad, salud y conexión con la naturaleza.",
    image: workImg5,
    services: ["Identidad Visual", "Packaging", "Estrategia de Marca", "Redes Sociales"],
  },
];

const Trabajos = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navbar />
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4 font-body">
              Portfolio
            </p>
            <h1 className="font-display font-black text-foreground text-4xl md:text-7xl italic leading-tight mb-6">
              Nuestras mejores
              <br />
              creaciones
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Cada proyecto es una historia de colaboración, creatividad y resultados tangibles.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-24 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto space-y-32">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
                <div className={i % 2 === 1 ? "order-2" : ""}>
                  <span className="text-muted-foreground text-sm font-body">
                    {project.date} • {project.category}
                  </span>
                  <h2 className="font-display font-black text-foreground text-4xl md:text-5xl italic mt-2 mb-6">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="bg-primary/10 text-foreground text-xs font-body font-medium px-4 py-2 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-foreground font-medium underline underline-offset-4 font-body">
                    Ver proyecto completo <ArrowUpRight size={16} />
                  </a>
                </div>
                <div className={`rounded-3xl overflow-hidden shadow-xl border border-border/30 ${i % 2 === 1 ? "order-1" : ""}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Trabajos;
