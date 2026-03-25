import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto cuesta un proyecto?",
    a: "Cada proyecto es único. Ofrecemos presupuestos personalizados según tus necesidades, desde proyectos puntuales hasta retainers mensuales.",
  },
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Los tiempos varían según la complejidad. Un branding completo puede tomar 4-6 semanas, mientras que un sitio web puede estar listo en 2-4 semanas.",
  },
  {
    q: "¿Qué incluye cada paquete?",
    a: "Cada paquete incluye consultoría inicial, diseño, revisiones y entrega final. Los detalles específicos se definen en nuestra propuesta personalizada.",
  },
  {
    q: "¿Trabajan con todo tipo de negocios?",
    a: "Trabajamos con empresas de todos los tamaños, desde startups hasta marcas establecidas. Lo importante es compartir la visión de crear algo excepcional.",
  },
  {
    q: "¿Puedo personalizar mi paquete?",
    a: "Absolutamente. Nuestros paquetes son puntos de partida. Nos adaptamos completamente a lo que tu negocio necesita.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 font-body">
                FAQs
              </p>
              <h2 className="font-display font-black text-primary-foreground text-4xl md:text-6xl leading-tight">
                ¿Tienes
                <br />
                preguntas?
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-primary-medium/50 rounded-2xl border-none px-6"
                >
                  <AccordionTrigger className="text-primary-foreground font-body text-base md:text-lg hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-primary-foreground/70 font-body pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-8 flex items-center justify-between text-primary-foreground/60 text-sm font-body">
              <span>¿No encuentras lo que buscas?</span>
              <a href="#contacto" className="inline-flex items-center gap-1 text-primary-foreground font-semibold">
                Contáctanos <ArrowUpRight size={14} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
