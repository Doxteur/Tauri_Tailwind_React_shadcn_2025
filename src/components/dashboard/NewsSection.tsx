import { FileText, ExternalLink } from "lucide-react";
import DashboardSection from "./DashboardSection";

// Données fictives pour les actualités
const newsItems = [
  {
    id: 1,
    title: "Wealthfolio: Private, open-source investment tracker",
    link: "wealthfolio.app",
    points: 389,
    comments: 130,
    time: "6h"
  },
  {
    id: 2,
    title: "Nginx has moved to GitHub",
    link: "mailman.nginx.org",
    points: 180,
    comments: 64,
    time: "3h"
  },
  {
    id: 3,
    title: "Infinity - Realistic AI characters that can speak",
    link: "",
    points: 71,
    comments: 75,
    time: "2h"
  },
  {
    id: 4,
    title: "Did Sandia use a thermonuclear secondary in a product logo?",
    link: "blog.nuclearsecrecy.com",
    points: 482,
    comments: 159,
    time: "11h"
  },
  {
    id: 5,
    title: "2M users but no money in the bank",
    link: "exercism.org",
    points: 217,
    comments: 156,
    time: "12h"
  }
];

interface NewsSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export default function NewsSection({ isExpanded, onToggle }: NewsSectionProps) {
  return (
    <DashboardSection
      title="Actualités"
      icon={<FileText size={18} />}
      isExpanded={isExpanded}
      onToggle={onToggle}
    >
      <div className="space-y-3">
        {newsItems.map(item => (
          <div key={item.id} className="border-b border-border last:border-0 pb-3 last:pb-0">
            <div className="flex items-start">
              <div className="flex-1">
                <p className="text-card-foreground text-sm font-medium">{item.title}</p>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <span>{item.time}</span>
                  <span className="mx-1">•</span>
                  <span>{item.points} points</span>
                  <span className="mx-1">•</span>
                  <span>{item.comments} commentaires</span>
                  {item.link && (
                    <>
                      <span className="mx-1">•</span>
                      <a href="#" className="text-primary flex items-center">
                        {item.link} <ExternalLink size={10} className="ml-1" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardSection>
  );
}
