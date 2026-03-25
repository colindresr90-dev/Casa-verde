import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 px-6 lg:px-16 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4 font-body">
              Contacto
            </p>
            <h2 className="font-display font-black text-foreground text-4xl md:text-7xl italic leading-tight mb-6">
              ¿Listo para empezar?
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-10">
              Hablemos sobre tu próximo proyecto. Estamos listos para llevar tu marca al siguiente nivel.
            </p>
            <Button variant="accent" size="lg" className="rounded-full text-base px-10">
              Trabajemos juntos <ArrowUpRight className="ml-2" size={18} />
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16 text-muted-foreground font-body text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>hola@agencia.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>San Salvador, El Salvador</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
