import heroImg1 from "@/assets/hero-1.jpg";
import heroImg2 from "@/assets/hero-2.jpg";
import heroMobileBg from "@/assets/hero-mobile-bg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-28 pb-20 px-6 lg:px-16">
      {/* Mobile background image */}
      <div className="absolute inset-0 lg:hidden">
        <img src={heroMobileBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h1 className="font-display font-black text-foreground text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight uppercase">
            Llevamos tu visión
            <br />
            al siguiente nivel.
          </h1>
          <p className="mt-8 text-muted-foreground text-lg md:text-xl max-w-lg font-body leading-relaxed">
            Donde la imaginación, la estrategia y el storytelling se unen para crear
            experiencias de marca inolvidables que impulsan negocios.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contacto">
              <Button variant="accent" size="lg">
                Trabajemos juntos
              </Button>
            </Link>
            <Link to="/trabajos">
              <Button variant="outlinePrimary" size="lg">
                Ver trabajos <ArrowUpRight className="ml-1" size={16} />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right - Layered Images */}
        <div className="relative h-[500px] md:h-[600px] hidden lg:block">
          <div className="absolute top-0 right-0 w-[70%] h-[55%] rounded-3xl overflow-hidden border-2 border-border/30 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
            <img src={heroImg1} alt="Visión creativa" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-[10%] w-[75%] h-[60%] rounded-3xl overflow-hidden border-2 border-border/30 shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-700">
            <img src={heroImg2} alt="Creatividad" className="w-full h-full object-cover" />
          </div>
          {/* Lightning accent */}
          <div className="absolute top-[40%] left-[30%] text-accent text-6xl font-black select-none">
            ⚡
          </div>
        </div>
      </div>
    </section>
  );
}
