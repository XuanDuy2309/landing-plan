import { Routes, Route } from "react-router-dom";
import { LoginScreen } from "./screens/login-screen";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
};
