import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "./App.css";
import { MainLayout } from "./core/layout";

import Dashboard from "./components/Dashboard";
import Messages from "./components/Messages";
import CalendarView from "./components/Calendar";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/search" element={<div>Page de recherche</div>} />
          <Route path="/settings" element={<div>Paramètres</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
