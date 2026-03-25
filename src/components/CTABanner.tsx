import { ScrollReveal } from "@/components/ScrollReveal";
import { Phone, Mail } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-24 px-6 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="bg-accent rounded-3xl p-10 md:p-16 text-center">
            <h2 className="font-display font-black text-accent-foreground text-3xl md:text-5xl italic mb-4">
              Tu próximo proyecto empieza aquí
            </h2>
            <p className="text-accent-foreground/80 font-body text-lg max-w-xl mx-auto mb-8">
              Agenda una llamada sin compromiso y descubre cómo podemos ayudarte a crecer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+50378901234"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold hover:scale-105 transition-transform"
              >
                <Phone size={18} /> Llámanos ahora
              </a>
              <a
                href="mailto:hola@agencia.com"
                className="inline-flex items-center justify-center gap-2 bg-accent-foreground text-accent px-8 py-4 rounded-full font-body font-semibold hover:scale-105 transition-transform"
              >
                <Mail size={18} /> Escríbenos
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
