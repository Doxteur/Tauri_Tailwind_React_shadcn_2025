import { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

interface DashboardSectionProps {
  title: string;
  icon: ReactNode;
  iconBgClass?: string;
  iconTextClass?: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: ReactNode;
  showMoreButton?: boolean;
}

export default function DashboardSection({
  title,
  icon,
  iconBgClass = "bg-primary/10",
  iconTextClass = "text-primary",
  isExpanded,
  onToggle,
  children,
  showMoreButton = true
}: DashboardSectionProps) {
  return (
    <div className="bg-card rounded-xl shadow-sm border border-border">
      <div
        className="flex items-center justify-between p-4 border-b border-border cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center">
          <div className={`${iconBgClass} ${iconTextClass} p-2 rounded-lg mr-3`}>
            {icon}
          </div>
          <h3 className="font-semibold text-card-foreground">{title}</h3>
        </div>
        <ChevronDown
          size={18}
          className={`text-muted-foreground transition-transform ${isExpanded ? 'transform rotate-180' : ''}`}
        />
      </div>

      {isExpanded && (
        <div className="p-4">
          {children}

          {showMoreButton && (
            <div className="text-center pt-2">
              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                Afficher plus <ChevronDown size={14} className="ml-1" />
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
