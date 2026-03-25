import { ScrollReveal } from "@/components/ScrollReveal";
import workImg1 from "@/assets/work-1.jpg";
import workImg2 from "@/assets/work-2.jpg";
import workImg3 from "@/assets/work-3.jpg";
import workImg4 from "@/assets/work-4.jpg";
import workImg5 from "@/assets/work-5.jpg";
import { ArrowUpRight } from "lucide-react";

const featuredWork = {
  date: "Jun 2024",
  category: "PACKAGING",
  title: "Velocity Motors",
  description: "Una marca de alto rendimiento creada para una nueva era de deportivos eléctricos, rápida y cargada de emoción.",
  image: workImg1,
};

const secondWork = {
  date: "Feb 2025",
  category: "BRANDING",
  title: "Lumen Atelier",
  description: "Una marca de alto rendimiento creada para una nueva era de deportivos eléctricos, rápida y cargada de emoción.",
  image: workImg2,
};

const workList = [
  { title: "Nimble Apparel", date: "Ago 2024", category: "ILUSTRACIÓN", image: workImg3 },
  { title: "Heritage Motor", date: "Oct 2025", category: "BRANDING", image: workImg4 },
  { title: "Root & Rise", date: "Nov 2023", category: "BRANDING", image: workImg5 },
];

export function WorksSection() {
  return (
    <section id="trabajos" className="py-24 bg-primary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent mb-4 font-body">
            Trabajos Seleccionados
          </p>
          <h2 className="font-display font-black text-primary-foreground text-4xl md:text-7xl text-center italic mb-20 leading-tight">
            Nuestras mejores
            <br />
            creaciones
          </h2>
        </ScrollReveal>

        {/* Featured Work 1 */}
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="text-primary-foreground/60 text-sm font-body mb-2">
                {featuredWork.date} • {featuredWork.category}
              </p>
              <h3 className="font-display font-black text-primary-foreground text-4xl md:text-5xl italic mb-6">
                {featuredWork.title}
              </h3>
              <p className="text-primary-foreground/70 font-body leading-relaxed mb-6 max-w-md">
                {featuredWork.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary-foreground font-medium underline underline-offset-4 font-body">
                Ver proyecto <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden border border-primary-foreground/10">
              <img src={featuredWork.image} alt={featuredWork.title} loading="lazy" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </ScrollReveal>

        {/* Featured Work 2 */}
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded-3xl overflow-hidden border border-primary-foreground/10 order-2 lg:order-1">
              <img src={secondWork.image} alt={secondWork.title} loading="lazy" className="w-full h-[400px] object-cover" />
            </div>
            <div className="order-1 lg:order-2 lg:text-right">
              <p className="text-primary-foreground/60 text-sm font-body mb-2">
                {secondWork.date} • {secondWork.category}
              </p>
              <h3 className="font-display font-black text-primary-foreground text-4xl md:text-5xl italic mb-6">
                {secondWork.title}
              </h3>
              <p className="text-primary-foreground/70 font-body leading-relaxed mb-6 max-w-md lg:ml-auto">
                {secondWork.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary-foreground font-medium underline underline-offset-4 font-body">
                Ver proyecto <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Work List */}
        <div className="mt-12 space-y-0">
          {workList.map((work, i) => (
            <ScrollReveal key={work.title} delay={i * 100}>
              <div className="flex items-center justify-between py-8 border-t border-primary-foreground/15 group cursor-pointer hover:px-4 transition-all duration-300">
                <h4 className="font-display font-black text-primary-foreground text-2xl md:text-4xl italic">
                  {work.title}
                </h4>
                <div className="hidden md:flex items-center gap-12">
                  <span className="text-primary-foreground/60 text-sm font-body">{work.date}</span>
                  <span className="text-primary-foreground/60 text-sm font-body tracking-wider">{work.category}</span>
                </div>
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-primary-foreground/10">
                  <img src={work.image} alt={work.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-16">
            <a
              href="#"
              className="inline-block bg-accent text-accent-foreground font-semibold px-8 py-3 rounded-full hover:bg-accent/90 transition-colors font-body"
            >
              Descubrir más
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
