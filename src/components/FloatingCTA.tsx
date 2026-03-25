import { Link } from "react-router-dom";
import { CalendarCheck } from "lucide-react";

export function FloatingCTA() {
  return (
    <Link
      to="/contacto"
      className="fixed bottom-8 left-8 z-50 flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full shadow-lg font-body font-semibold text-sm hover:scale-105 transition-transform duration-200"
    >
      <CalendarCheck size={18} />
      Agenda tu cita
    </Link>
  );
}
