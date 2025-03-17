import { Button } from "./ui/button";
import { UserCircle } from "lucide-react";

export default function Messages() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Messages</h1>
          <p className="text-muted-foreground mt-1">Vos messages récents</p>
        </div>
      </div>

      <div className="bg-card rounded-xl shadow-sm border border-border p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-card-foreground">Boîte de réception</h3>
          <Button variant="outline" size="sm">Nouveau message</Button>
        </div>

        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg hover:bg-muted transition-colors cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="bg-primary/10 rounded-full p-2 mr-3">
                  <UserCircle size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Sophie Martin</p>
                  <p className="text-sm text-muted-foreground">À propos du projet</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">Aujourd'hui, 10:42</span>
            </div>
            <p className="mt-2 text-sm text-card-foreground/80 line-clamp-2">
              Bonjour, je voulais savoir si vous aviez avancé sur la maquette du projet...
            </p>
          </div>

          <div className="p-4 border border-border rounded-lg hover:bg-muted transition-colors cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="bg-secondary/20 rounded-full p-2 mr-3">
                  <UserCircle size={20} className="text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Marc Dubois</p>
                  <p className="text-sm text-muted-foreground">Réunion hebdomadaire</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">Hier, 16:20</span>
            </div>
            <p className="mt-2 text-sm text-card-foreground/80 line-clamp-2">
              La réunion est confirmée pour demain à 14h. N'oubliez pas de préparer...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
