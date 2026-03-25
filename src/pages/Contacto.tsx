import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTABanner } from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Por favor completa los campos requeridos", variant: "destructive" });
      return;
    }
    toast({ title: "¡Mensaje enviado!", description: "Nos pondremos en contacto pronto." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="bg-background overflow-x-hidden">
      <Navbar />
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4 font-body">
              Contacto
            </p>
            <h1 className="font-display font-black text-foreground text-4xl md:text-7xl italic leading-tight mb-6">
              ¿Listo para
              <br />
              empezar?
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Hablemos sobre tu próximo proyecto. Estamos listos para llevar tu marca al siguiente nivel.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollReveal>
              <div className="bg-card rounded-3xl p-8 md:p-10 border border-border/50">
                <h2 className="font-display font-bold text-foreground text-2xl mb-8">Envíanos un mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-2 block">Nombre *</label>
                    <Input
                      placeholder="Tu nombre completo"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="rounded-xl bg-background border-border/50 h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-2 block">Correo *</label>
                    <Input
                      type="email"
                      placeholder="tu@correo.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="rounded-xl bg-background border-border/50 h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-2 block">Teléfono</label>
                    <Input
                      type="tel"
                      placeholder="+503 7890 1234"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="rounded-xl bg-background border-border/50 h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-2 block">Mensaje *</label>
                    <Textarea
                      placeholder="Cuéntanos sobre tu proyecto..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="rounded-xl bg-background border-border/50 min-h-[140px]"
                    />
                  </div>
                  <Button variant="accent" size="lg" type="submit" className="w-full rounded-full text-base">
                    Enviar mensaje <ArrowUpRight className="ml-2" size={18} />
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Info + Map */}
            <ScrollReveal delay={200}>
              <div className="space-y-8">
                {/* Company Info */}
                <div className="bg-primary rounded-3xl p-8 md:p-10">
                  <h3 className="font-display font-bold text-primary-foreground text-2xl mb-8">Datos de contacto</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
                        <Mail size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-primary-foreground font-body font-medium">Correo electrónico</p>
                        <p className="text-primary-foreground/70 font-body">hola@agencia.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
                        <Phone size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-primary-foreground font-body font-medium">Teléfono</p>
                        <p className="text-primary-foreground/70 font-body">+503 7890 1234</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
                        <MapPin size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-primary-foreground font-body font-medium">Ubicación</p>
                        <p className="text-primary-foreground/70 font-body">Blvd. Los Héroes, Col. San Benito<br />San Salvador, El Salvador</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-3xl overflow-hidden border border-border/50 h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.2!2d-89.2272!3d13.6929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633067e22a1e7d%3A0x2f26e1d119097b91!2sBlvd.%20Los%20H%C3%A9roes%2C%20San%20Salvador!5e0!3m2!1ses!2ssv!4v1700000000000!5m2!1ses!2ssv"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de la agencia"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="pb-24 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="bg-primary rounded-3xl p-10 md:p-16">
              <div className="text-center mb-12">
                <h2 className="font-display font-black text-primary-foreground text-3xl md:text-5xl italic mb-4">
                  ¿Por qué elegirnos?
                </h2>
                <p className="text-primary-foreground/70 font-body text-lg max-w-xl mx-auto">
                  Más que una agencia, somos tu socio estratégico de crecimiento.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { number: "01", title: "Respuesta rápida", desc: "Te respondemos en menos de 24 horas con una propuesta clara y sin compromiso." },
                  { number: "02", title: "Resultados medibles", desc: "Cada proyecto incluye métricas y reportes para que veas el impacto real." },
                  { number: "03", title: "Acompañamiento total", desc: "Desde la estrategia hasta la ejecución, estamos contigo en cada paso." },
                ].map((item) => (
                  <div key={item.number} className="text-center md:text-left">
                    <span className="text-accent font-display font-black text-4xl">{item.number}</span>
                    <h3 className="font-display font-bold text-primary-foreground text-xl mt-3 mb-2">{item.title}</h3>
                    <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="pb-24 px-6 lg:px-16">
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
                <a href="tel:+50378901234" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold hover:scale-105 transition-transform">
                  <Phone size={18} /> Llámanos ahora
                </a>
                <a href="mailto:hola@agencia.com" className="inline-flex items-center justify-center gap-2 bg-accent-foreground text-accent px-8 py-4 rounded-full font-body font-semibold hover:scale-105 transition-transform">
                  <Mail size={18} /> Escríbenos
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contacto;
