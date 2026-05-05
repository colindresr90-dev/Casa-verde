"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Básico",
    desc: "Perfecto para equipos pequeños explorando soporte creativo.",
    monthly: 350,
    yearly: 280,
    features: [
      "Hasta 3 activos de marca",
      "Plantillas de diseño básicas",
      "Comentarios en proyectos",
      "Soporte por comunidad",
    ],
    featured: false,
  },
  {
    name: "Profesional",
    desc: "Diseñado para marcas en crecimiento que necesitan producción creativa constante.",
    monthly: 550,
    yearly: 440,
    features: [
      "Activos de marca ilimitados",
      "Colaboración hasta 5 miembros",
      "Librería de componentes",
      "Revisiones prioritarias",
    ],
    featured: true,
  },
  {
    name: "Premium",
    desc: "Asociación creativa integral para negocios en crecimiento.",
    monthly: 800,
    yearly: 640,
    features: [
      "Miembros ilimitados",
      "Dashboards personalizados",
      "Automatización avanzada",
      "Especialista dedicado",
    ],
    featured: false,
  },
];

export function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="py-24 bg-primary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={cn("text-sm font-body", !yearly ? "text-primary-foreground" : "text-primary-foreground/50")}>
              Mensual
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className={cn(
                "w-14 h-7 rounded-full relative transition-colors",
                yearly ? "bg-accent" : "bg-primary-foreground/20"
              )}
            >
              <div
                className={cn(
                  "w-5 h-5 rounded-full bg-primary-foreground absolute top-1 transition-transform",
                  yearly ? "translate-x-8" : "translate-x-1"
                )}
              />
            </button>
            <span className={cn("text-sm font-body", yearly ? "text-primary-foreground" : "text-primary-foreground/50")}>
              Anual
            </span>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 150}>
              <div className="bg-card rounded-3xl p-8 flex flex-col h-full">
                <h3 className="font-body font-semibold text-card-foreground text-xl mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-sm font-body mb-6">{plan.desc}</p>
                <div className="mb-8">
                  <span className="font-display font-black text-foreground text-5xl">
                    ${yearly ? plan.yearly : plan.monthly}
                  </span>
                  <span className="text-muted-foreground text-sm font-body ml-1">/mes</span>
                </div>
                <div className="border-t border-border mb-6" />
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm font-body text-card-foreground">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.featured ? "accent" : "outlinePrimary"}
                  size="lg"
                  className="mt-8 w-full rounded-full"
                >
                  ¡Colaboremos!
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
