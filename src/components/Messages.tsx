import { Button } from "./ui/button";
import { UserCircle } from "lucide-react";

export default function Messages() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
          <p className="text-gray-500 mt-1">Vos messages récents</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-gray-800">Boîte de réception</h3>
          <Button variant="outline" size="sm">Nouveau message</Button>
        </div>

        <div className="space-y-4">
          <div className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <UserCircle size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Sophie Martin</p>
                  <p className="text-sm text-gray-500">À propos du projet</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">Aujourd'hui, 10:42</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
              Bonjour, je voulais savoir si vous aviez avancé sur la maquette du projet...
            </p>
          </div>

          <div className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <UserCircle size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Marc Dubois</p>
                  <p className="text-sm text-gray-500">Réunion hebdomadaire</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">Hier, 16:20</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
              La réunion est confirmée pour demain à 14h. N'oubliez pas de préparer...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
