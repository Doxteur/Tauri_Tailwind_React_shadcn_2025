import { LineChart } from "lucide-react";
import DashboardSection from "./DashboardSection";

// Données fictives pour les statistiques
const stats = [
  { label: "Visites", value: "1,245", percentage: 70 },
  { label: "Engagement", value: "42%", percentage: 42 },
  { label: "Nouveaux utilisateurs", value: "328", percentage: 55 },
  { label: "Temps moyen", value: "3m 24s", percentage: 30 }
];

interface OverviewSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export default function OverviewSection({ isExpanded, onToggle }: OverviewSectionProps) {
  return (
    <DashboardSection
      title="Vue d'ensemble"
      icon={<LineChart size={18} />}
      iconBgClass="bg-secondary/20"
      iconTextClass="text-secondary-foreground"
      isExpanded={isExpanded}
      onToggle={onToggle}
      showMoreButton={false}
    >
      <>
        <div className="h-40 flex items-center justify-center bg-muted rounded-lg border border-dashed border-border">
          <p className="text-muted-foreground">Graphique à venir</p>
        </div>
        <div className="mt-4 space-y-4">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">{stat.label}</span>
                <span className="text-card-foreground font-medium">{stat.value}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${stat.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </>
    </DashboardSection>
  );
}
