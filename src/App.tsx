import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "./pages/auth/routes";
import { useMemo } from "react";
import { initCoreStores } from "./core/stores";


export const App = () => {
  useMemo(() => {
    initCoreStores();
  },[])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/*" element={<AuthRoutes />} />
      </Routes>
    </Router>
  );
};
