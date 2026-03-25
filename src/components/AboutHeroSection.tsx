import { ScrollReveal } from "@/components/ScrollReveal";
import aboutImg from "@/assets/about-hero.jpg";

export function AboutHeroSection() {
  return (
    <section className="py-24 px-6 lg:px-16 bg-primary">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 font-body">
                Sobre Nosotros
              </p>
              <h2 className="font-display font-black text-primary-foreground text-4xl md:text-6xl italic leading-tight mb-6">
                Ideas convertidas
                <br />
                en impacto
              </h2>
              <p className="text-primary-foreground/80 font-body text-lg leading-relaxed max-w-lg">
                Somos un colectivo de diseñadores, estrategas y storytellers que transforman ideas audaces en expresiones de marca significativas. Nos asociamos con empresas ambiciosas para construir identidades, generar confianza y crear narrativas visuales que dejan una impresión duradera.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 right-[15%] text-accent text-4xl font-black select-none z-10">
                ✓✓
              </div>
              <div className="rounded-3xl overflow-hidden border-2 border-primary-foreground/10 shadow-2xl rotate-1">
                <img src={aboutImg} alt="Sobre nosotros" loading="lazy" className="w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
