import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Trabajos", href: "/trabajos" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-1 bg-primary rounded-full px-2 py-2 shadow-lg">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-1">
          <span className="font-display font-bold text-accent-foreground text-sm">✦</span>
        </div>
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium text-primary-foreground hover:shadow-[0_0_12px_hsl(var(--accent)/0.6)] transition-all duration-200 nav-flip",
              location.pathname === item.href && "bg-accent text-accent-foreground"
            )}
          >
            <span className="nav-flip-inner" data-text={item.label}>{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="bg-primary rounded-full p-3 shadow-lg text-primary-foreground"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        {open && (
          <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-primary rounded-2xl px-6 py-4 shadow-xl flex flex-col gap-2 min-w-[200px]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium text-primary-foreground hover:shadow-[0_0_12px_hsl(var(--accent)/0.6)] transition-all text-center nav-flip",
                  location.pathname === item.href && "bg-accent text-accent-foreground"
                )}
              >
                <span className="nav-flip-inner" data-text={item.label}>{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
