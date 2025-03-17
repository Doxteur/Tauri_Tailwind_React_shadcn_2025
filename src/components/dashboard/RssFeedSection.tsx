import { Rss } from "lucide-react";
import DashboardSection from "./DashboardSection";

// Données fictives pour les articles
const articles = [
  {
    id: 1,
    title: "CSS display contents",
    author: "Ahmad Shadeed",
    time: "1d"
  },
  {
    id: 2,
    title: "CSS @property and the New Style",
    author: "Ryan Mulligan",
    time: "6d"
  },
  {
    id: 3,
    title: "Center Items in First Row with Grid",
    author: "Ryan Mulligan",
    time: "16d"
  },
  {
    id: 4,
    title: "Notes on handling events in Web Components",
    author: "Ryan Mulligan",
    time: "1mo"
  }
];

interface RssFeedSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export default function RssFeedSection({ isExpanded, onToggle }: RssFeedSectionProps) {
  return (
    <DashboardSection
      title="RSS Feed"
      icon={<Rss size={18} />}
      isExpanded={isExpanded}
      onToggle={onToggle}
    >
      <div className="space-y-3">
        {articles.map(article => (
          <div key={article.id} className="border-b border-border last:border-0 pb-3 last:pb-0">
            <p className="text-card-foreground text-sm font-medium">{article.title}</p>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <span>{article.time}</span>
              <span className="mx-1">•</span>
              <span>{article.author}</span>
            </div>
          </div>
        ))}
      </div>
    </DashboardSection>
  );
}
