import DashboardSection from "./DashboardSection";
import { Cloud } from "../ui/icons";

interface WeatherSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export default function WeatherSection({ isExpanded, onToggle }: WeatherSectionProps) {
  return (
    <DashboardSection
      title="Météo"
      icon={<Cloud size={18} />}
      iconBgClass="bg-secondary/20"
      iconTextClass="text-secondary-foreground"
      isExpanded={isExpanded}
      onToggle={onToggle}
      showMoreButton={false}
    >
      <div className="text-center">
        <p className="text-card-foreground text-lg font-medium">Partiellement nuageux</p>
        <p className="text-primary text-3xl font-bold my-2">16°C</p>
        <p className="text-muted-foreground text-sm">Ressenti comme 14°C</p>

        <div className="mt-4 grid grid-cols-5 gap-2">
          {['6am', '2pm', '10pm'].map((time, i) => (
            <div key={i} className="text-center">
              <p className="text-xs text-muted-foreground">{time}</p>
              <div className="h-20 bg-muted rounded-md mt-1 relative">
                <div
                  className="absolute bottom-0 w-full bg-primary rounded-b-md"
                  style={{ height: `${[30, 70, 50][i]}%` }}
                ></div>
              </div>
              <p className="text-xs text-card-foreground mt-1">{[12, 17, 14][i]}°</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardSection>
  );
}
