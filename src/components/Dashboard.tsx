import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { Button } from "./ui/button";
import { Calendar, LineChart, UserCircle, Inbox, Bell } from "lucide-react";
import { useAppSelector, useAppDispatch } from '@/core/store/hooks';
import { addNotification } from '@/features/ui/uiSlice';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const { notifications } = useAppSelector(state => state.ui);
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

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
          <h1 className="text-2xl font-bold text-gray-800">Tableau de bord</h1>
          <p className="text-gray-500 mt-1">
            {user ? `Bienvenue, ${user.name}` : 'Bienvenue sur votre espace personnel'}
          </p>
        </div>

        <Button
          onClick={handleAddNotification}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Bell className="mr-2" size={16} />
          Créer notification
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
              <UserCircle size={20} />
            </div>
            <h3 className="font-semibold text-gray-800">Informations</h3>
          </div>

          <div className={`${greetMsg ? 'p-3 bg-blue-50 rounded-lg mb-4 text-blue-700' : ''}`}>
            {greetMsg && <p>{greetMsg}</p>}
          </div>

          <div className="space-y-3">
            <input
              id="name"
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Entrez votre nom..."
              className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
            <Button onClick={greet} className="w-full bg-blue-600 hover:bg-blue-700">Saluer</Button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-100 text-indigo-600 p-2 rounded-lg mr-3">
              <LineChart size={20} />
            </div>
            <h3 className="font-semibold text-gray-800">Statistiques</h3>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Visites</span>
              <span className="text-gray-800 font-medium">1,245</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '70%' }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Engagement</span>
              <span className="text-gray-800 font-medium">42%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '42%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 text-orange-600 p-2 rounded-lg mr-3">
              <Inbox size={20} />
            </div>
            <h3 className="font-semibold text-gray-800">Activités récentes</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <UserCircle size={16} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-700">Pierre a commenté votre publication</p>
                <p className="text-xs text-gray-500">Il y a 2 heures</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <Calendar size={16} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-700">Réunion planifiée avec l'équipe</p>
                <p className="text-xs text-gray-500">Demain à 10:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
        <h3 className="font-semibold text-gray-800 mb-4">Vue d'ensemble</h3>
        <div className="h-40 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">Graphique à venir</p>
        </div>
      </div>
    </>
  );
}
