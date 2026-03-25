import { ScrollReveal } from "@/components/ScrollReveal";
import testimonialImg from "@/assets/testimonial-1.jpg";
import { ArrowUpRight } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 lg:px-16 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-foreground mb-4 font-body">
            Testimonios
          </p>
          <h2 className="font-display font-black text-foreground text-4xl md:text-7xl text-center italic mb-20 leading-tight">
            Lo que dicen
            <br />
            nuestros clientes
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="font-display italic text-foreground text-lg mb-6">StyleStack</p>
              <blockquote className="font-body text-foreground text-xl md:text-2xl leading-relaxed mb-8">
                "Elevaron nuestra marca más allá de lo esperado. La campaña que crearon se sintió auténtica, fresca y exactamente lo que nuestra audiencia necesitaba."
              </blockquote>
              <a href="#contacto" className="inline-flex items-center gap-2 text-foreground font-medium underline underline-offset-4 font-body">
                Iniciar un proyecto <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="relative">
              <div className="absolute -top-6 left-1/3 text-accent text-5xl font-black select-none z-10">
                ✓✓
              </div>
              <div className="rounded-3xl overflow-hidden border-2 border-border/30 shadow-xl rotate-2">
                <img src={testimonialImg} alt="Cliente satisfecho" loading="lazy" className="w-full h-[400px] object-cover" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display font-bold text-primary-foreground text-lg drop-shadow-lg">Yakoub Kashmiri</p>
                  <p className="text-primary-foreground/80 text-sm font-body drop-shadow-lg">Director de Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
