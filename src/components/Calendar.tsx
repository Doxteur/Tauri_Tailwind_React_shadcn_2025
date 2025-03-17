import { Calendar } from "lucide-react";

export default function CalendarView() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Calendrier</h1>
          <p className="text-muted-foreground mt-1">Gestion de vos événements</p>
        </div>
      </div>

      <div className="bg-card rounded-xl shadow-sm border border-border p-6">
        <div className="text-center p-8">
          <Calendar className="w-16 h-16 mx-auto text-primary mb-4" />
          <h3 className="text-lg font-medium text-card-foreground mb-2">Calendrier en développement</h3>
          <p className="text-muted-foreground">Cette fonctionnalité sera bientôt disponible</p>
        </div>
      </div>
    </>
  );
}
