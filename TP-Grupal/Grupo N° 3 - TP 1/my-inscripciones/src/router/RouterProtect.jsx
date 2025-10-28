import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RouterProtect({ children }) {
  const { usuario } = useAuth();

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
