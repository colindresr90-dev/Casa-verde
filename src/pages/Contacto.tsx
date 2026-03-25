import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
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
                        <p className="text-primary-foreground/70 font-body">Av. Reforma 222, Col. Juárez<br />Ciudad de México, CP 06600</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-3xl overflow-hidden border border-border/50 h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661036558697!2d-99.16869032414474!3d19.42702128186783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x789c3f1f4da9b0e2!2sAv.%20Paseo%20de%20la%20Reforma%2C%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
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

      <Footer />
    </main>
  );
};

export default Contacto;
