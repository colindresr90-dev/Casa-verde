import { ScrollReveal } from "@/components/ScrollReveal";

export function AboutSection() {
  return (
    <section id="nosotros" className="relative py-24 px-6 lg:px-16 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/about-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4 font-body">
            Sobre Nosotros
          </p>
        </ScrollReveal>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="font-display font-black text-foreground text-4xl md:text-6xl italic leading-tight">
              Somos un equipo creativo enfocado en resultados.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="space-y-6 font-body text-muted-foreground text-lg leading-relaxed">
              <p>
                Combinamos estrategia, diseño y tecnología para crear marcas que no solo se ven bien,
                sino que generan impacto real en el mercado.
              </p>
              <p>
                Cada proyecto es una oportunidad para superar expectativas y entregar algo
                verdaderamente extraordinario.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div>
                  <p className="font-display font-black text-foreground text-4xl">50+</p>
                  <p className="text-sm text-muted-foreground mt-1">Proyectos</p>
                </div>
                <div>
                  <p className="font-display font-black text-foreground text-4xl">98%</p>
                  <p className="text-sm text-muted-foreground mt-1">Satisfacción</p>
                </div>
                <div>
                  <p className="font-display font-black text-foreground text-4xl">5+</p>
                  <p className="text-sm text-muted-foreground mt-1">Años</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
