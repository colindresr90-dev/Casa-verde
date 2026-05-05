import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-28 pb-20 px-6 lg:px-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg.src} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/75" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex items-center justify-center text-center">
        <div className="max-w-3xl">
          <h1 className="font-display font-black text-foreground text-4xl md:text-5xl lg:text-7xl leading-[0.95] tracking-tight uppercase">
            Llevamos tu visión
            <br />
            al siguiente nivel.
          </h1>
          <p className="mt-6 text-muted-foreground text-lg md:text-xl mx-auto max-w-xl font-body leading-relaxed">
            Donde la imaginación, la estrategia y el storytelling se unen para crear
            experiencias de marca inolvidables que impulsan negocios.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contacto">
              <Button variant="accent" size="lg">
                Trabajemos juntos
              </Button>
            </Link>
            <Link href="/trabajos">
              <Button variant="outlinePrimary" size="lg">
                Ver trabajos <ArrowUpRight className="ml-1" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
