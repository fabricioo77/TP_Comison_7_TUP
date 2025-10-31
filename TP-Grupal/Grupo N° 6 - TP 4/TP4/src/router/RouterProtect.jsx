import { Navigate, useLocation } from "react-router-dom";
import { getAuth } from "../utils/auth";

/** Protege rutas: si no hay auth → /login */
export default function RouterProtect({ children }) {
  const auth = getAuth();
  const location = useLocation();
  if (!auth?.token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
}
