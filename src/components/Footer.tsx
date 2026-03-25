export function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-16 bg-primary">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-primary-foreground/60 text-sm font-body">
          © 2025 Agencia Creativa. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 text-primary-foreground/60 text-sm font-body">
          <a href="#" className="hover:text-primary-foreground transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary-foreground transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary-foreground transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
