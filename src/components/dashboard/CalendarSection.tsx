import { Calendar } from "lucide-react";
import DashboardSection from "./DashboardSection";

interface CalendarSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export default function CalendarSection({ isExpanded, onToggle }: CalendarSectionProps) {
  return (
    <DashboardSection
      title="Calendrier"
      icon={<Calendar size={18} />}
      iconBgClass="bg-accent/10"
      iconTextClass="text-accent-foreground"
      isExpanded={isExpanded}
      onToggle={onToggle}
      showMoreButton={false}
    >
      <>
        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
          {['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'].map(day => (
            <div key={day} className="text-muted-foreground">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className={`aspect-square flex items-center justify-center text-xs rounded-md cursor-pointer
                ${i === 15 ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </>
    </DashboardSection>
  );
}
