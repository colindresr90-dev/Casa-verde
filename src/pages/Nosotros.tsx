import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import aboutImg from "@/assets/about-hero.jpg";
import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";

const blocks = [
  {
    icon: Target,
    title: "Nuestra Misión",
    description:
      "Transformar ideas en marcas poderosas que conecten emocionalmente con las audiencias y generen resultados medibles para nuestros clientes.",
  },
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description:
      "Exploramos nuevas tendencias, herramientas y metodologías para ofrecer soluciones creativas que se adelanten al mercado.",
  },
  {
    icon: Users,
    title: "Equipo Multidisciplinario",
    description:
      "Diseñadores, estrategas, desarrolladores y storytellers trabajando juntos para crear experiencias integrales de marca.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Reales",
    description:
      "No nos conformamos con lo bonito. Medimos, optimizamos y entregamos impacto real en el crecimiento de tu negocio.",
  },
];

const Nosotros = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navbar />
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4 font-body">
              Sobre Nosotros
            </p>
            <h1 className="font-display font-black text-foreground text-4xl md:text-7xl italic leading-tight mb-8">
              Creatividad con
              <br />
              propósito
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-lg">
                Somos una agencia creativa con sede en Ciudad de México. Combinamos estrategia, diseño y tecnología para crear marcas que no solo se ven bien, sino que generan impacto real en el mercado. Cada proyecto es una oportunidad para superar expectativas.
              </p>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={aboutImg} alt="Equipo creativo" className="w-full h-[350px] object-cover" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 lg:px-16 bg-primary">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: "50+", label: "Proyectos Entregados" },
                { num: "98%", label: "Clientes Satisfechos" },
                { num: "5+", label: "Años de Experiencia" },
                { num: "12", label: "Creativos en Equipo" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display font-black text-primary-foreground text-5xl md:text-6xl">{s.num}</p>
                  <p className="text-primary-foreground/70 text-sm font-body mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4 Info Blocks */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <h2 className="font-display font-black text-foreground text-4xl md:text-6xl italic leading-tight text-center mb-16">
              Lo que nos define
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {blocks.map((block, i) => (
              <ScrollReveal key={block.title} delay={i * 100}>
                <div className="bg-card rounded-3xl p-10 border border-border/50 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <block.icon size={28} className="text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-2xl mb-4">{block.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{block.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Nosotros;
