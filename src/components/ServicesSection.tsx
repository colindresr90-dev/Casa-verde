import { ScrollReveal } from "@/components/ScrollReveal";
import serviceImg1 from "@/assets/service-1.jpg";
import serviceImg2 from "@/assets/service-2.jpg";
import serviceImg3 from "@/assets/service-3.jpg";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Diseño Web",
    description: "Creamos experiencias digitales memorables que expresan la esencia de tu marca.",
    image: serviceImg1,
  },
  {
    title: "Marketing Digital",
    description: "Definimos la dirección, la voz y el posicionamiento para un impacto duradero.",
    image: serviceImg2,
  },
  {
    title: "Branding & Estrategia",
    description: "Guiamos la historia visual asegurando que cada detalle se alinee con tu misión.",
    image: serviceImg3,
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 px-6 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4 font-body">
            Nuestros Servicios
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <h2 className="font-display font-black text-foreground text-4xl md:text-6xl italic leading-tight">
              Cómo elevamos
              <br />
              tu marca
            </h2>
            <a
              href="#contacto"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-foreground font-medium underline underline-offset-4 hover:text-primary-medium transition-colors font-body"
            >
              Iniciar un proyecto <ArrowUpRight size={16} />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 150}>
              <div className="group relative rounded-3xl overflow-hidden h-[450px] cursor-pointer">
                <img
                  src={service.image.src}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display font-black text-primary-foreground text-2xl md:text-3xl italic mb-2">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm font-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
