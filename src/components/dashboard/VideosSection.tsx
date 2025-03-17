import { LineChart } from "lucide-react";
import DashboardSection from "./DashboardSection";

interface VideosSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export default function VideosSection({ isExpanded, onToggle }: VideosSectionProps) {
  return (
    <DashboardSection
      title="Vidéos"
      icon={<LineChart size={18} />}
      iconBgClass="bg-accent/10"
      iconTextClass="text-accent-foreground"
      isExpanded={isExpanded}
      onToggle={onToggle}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="bg-muted rounded-lg aspect-video flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors">
            <p className="text-muted-foreground text-sm">Vidéo {i + 1}</p>
          </div>
        ))}
      </div>
    </DashboardSection>
  );
}
