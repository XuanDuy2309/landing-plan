import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthRoutes } from "./pages/auth/routes";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AuthRoutes />} />
      </Routes>
    </Router>
  );
};
