import { useState } from "react";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";
import { useAppSelector, useAppDispatch } from '@/core/store/hooks';
import { addNotification } from '@/features/ui/uiSlice';

import NewsSection from "./dashboard/NewsSection";
import VideosSection from "./dashboard/VideosSection";
import OverviewSection from "./dashboard/OverviewSection";
import RssFeedSection from "./dashboard/RssFeedSection";
import CalendarSection from "./dashboard/CalendarSection";
import WeatherSection from "./dashboard/WeatherSection";

// Liste de toutes les sections disponibles
const allSections = ['news', 'videos', 'overview', 'rss', 'calendar', 'weather'];

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);

  // Utiliser un objet pour suivre l'état de chaque section individuellement
  // Initialiser avec toutes les sections ouvertes
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
    allSections.reduce((acc, section) => ({ ...acc, [section]: true }), {})
  );

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleAddNotification = () => {
    dispatch(addNotification({
      message: 'Nouvelle notification de test',
      type: 'info'
    }));
  };

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Tableau de bord</h1>
          <p className="text-muted-foreground mt-1">
            {user ? `Bienvenue, ${user.name}` : 'Bienvenue sur votre espace personnel'}
          </p>
        </div>

        <Button
          onClick={handleAddNotification}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Bell className="mr-2" size={16} />
          Créer notification
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Colonne de gauche */}
        <div className="lg:col-span-2 space-y-6">
          <NewsSection
            isExpanded={expandedSections.news}
            onToggle={() => toggleSection('news')}
          />
          <VideosSection
            isExpanded={expandedSections.videos}
            onToggle={() => toggleSection('videos')}
          />
          <OverviewSection
            isExpanded={expandedSections.overview}
            onToggle={() => toggleSection('overview')}
          />
        </div>

        {/* Colonne de droite */}
        <div className="space-y-6">
          <RssFeedSection
            isExpanded={expandedSections.rss}
            onToggle={() => toggleSection('rss')}
          />
          <CalendarSection
            isExpanded={expandedSections.calendar}
            onToggle={() => toggleSection('calendar')}
          />
          <WeatherSection
            isExpanded={expandedSections.weather}
            onToggle={() => toggleSection('weather')}
          />
        </div>
      </div>
    </>
  );
}
