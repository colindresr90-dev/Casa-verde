import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import serviceImg1 from "@/assets/service-1.jpg";
import serviceImg2 from "@/assets/service-2.jpg";
import serviceImg3 from "@/assets/service-3.jpg";

const services = [
  {
    title: "Diseño Web",
    description:
      "Creamos sitios web modernos, rápidos y optimizados que reflejan la esencia de tu marca. Desde landing pages hasta plataformas complejas, cada pixel está pensado para convertir visitantes en clientes.",
    features: ["Diseño UI/UX personalizado", "Desarrollo responsive", "Optimización SEO", "Integración con CMS"],
    image: serviceImg1,
  },
  {
    title: "Marketing Digital",
    description:
      "Estrategias de marketing basadas en datos que maximizan tu presencia digital. Gestionamos campañas en redes sociales, Google Ads y email marketing para generar resultados medibles.",
    features: ["Estrategia de contenido", "Campañas publicitarias", "Email marketing", "Analítica avanzada"],
    image: serviceImg2,
  },
  {
    title: "Branding & Estrategia",
    description:
      "Definimos la identidad visual y verbal de tu marca. Desde el logotipo hasta la guía de estilo completa, creamos sistemas de marca coherentes que transmiten confianza y profesionalismo.",
    features: ["Identidad visual", "Manual de marca", "Naming y tagline", "Dirección creativa"],
    image: serviceImg3,
  },
];

const Servicios = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navbar />
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4 font-body">
              Nuestros Servicios
            </p>
            <h1 className="font-display font-black text-foreground text-4xl md:text-7xl italic leading-tight mb-6">
              Soluciones creativas
              <br />
              para tu marca
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Ofrecemos un ecosistema completo de servicios diseñados para llevar tu negocio al siguiente nivel.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-24 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto space-y-24">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={100}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "direction-rtl" : ""}`}>
                <div className={i % 2 === 1 ? "order-2 lg:order-2" : ""}>
                  <h2 className="font-display font-black text-foreground text-3xl md:text-5xl italic mb-6">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 font-body text-foreground">
                        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-3xl overflow-hidden shadow-xl ${i % 2 === 1 ? "order-1 lg:order-1" : ""}`}>
                  <img src={service.image} alt={service.title} loading="lazy" className="w-full h-[400px] object-cover" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Servicios;
