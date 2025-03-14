import { Calendar } from "lucide-react";

export default function CalendarView() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Calendrier</h1>
          <p className="text-gray-500 mt-1">Gestion de vos événements</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="text-center p-8">
          <Calendar className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">Calendrier en développement</h3>
          <p className="text-gray-600">Cette fonctionnalité sera bientôt disponible</p>
        </div>
      </div>
    </>
  );
}
