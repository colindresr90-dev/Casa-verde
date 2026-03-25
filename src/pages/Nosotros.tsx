import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTABanner } from "@/components/CTABanner";
import aboutImg from "@/assets/about-hero.jpg";
import valuesBg from "@/assets/values-bg.jpg";
import { Target, Lightbulb, Users, TrendingUp, Heart, Zap, Globe, Award } from "lucide-react";

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

const values = [
  { icon: Heart, title: "Pasión", desc: "Amamos lo que hacemos y eso se refleja en cada proyecto." },
  { icon: Zap, title: "Agilidad", desc: "Procesos eficientes para entregas rápidas sin sacrificar calidad." },
  { icon: Globe, title: "Visión Global", desc: "Pensamos en grande, desde El Salvador para el mundo." },
  { icon: Award, title: "Excelencia", desc: "Cada detalle importa. Buscamos la perfección en todo." },
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
                Somos una agencia creativa con sede en San Salvador, El Salvador. Combinamos estrategia, diseño y tecnología para crear marcas que no solo se ven bien, sino que generan impacto real en el mercado. Cada proyecto es una oportunidad para superar expectativas.
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

      {/* Values */}
      <section className="py-24 px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={valuesBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70 mb-4 font-body">
                Nuestros Valores
              </p>
              <h2 className="font-display font-black text-primary-foreground text-4xl md:text-6xl italic">
                Lo que nos mueve
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 text-center h-full border border-primary-foreground/10">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-5">
                    <v.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-primary-foreground text-xl mb-2">{v.title}</h3>
                  <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4 font-body">
                Nuestro Proceso
              </p>
              <h2 className="font-display font-black text-foreground text-4xl md:text-6xl italic">
                Cómo trabajamos
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Descubrimiento", desc: "Entendemos tu marca, tus objetivos y tu audiencia a profundidad." },
              { step: "02", title: "Estrategia", desc: "Diseñamos un plan de acción claro con métricas y entregables definidos." },
              { step: "03", title: "Creación", desc: "Nuestro equipo da vida a la visión con diseño, código y contenido." },
              { step: "04", title: "Lanzamiento", desc: "Entregamos, medimos resultados y optimizamos continuamente." },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div className="text-center">
                  <span className="font-display font-black text-accent text-5xl">{item.step}</span>
                  <h3 className="font-display font-bold text-foreground text-xl mt-4 mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
};

export default Nosotros;
