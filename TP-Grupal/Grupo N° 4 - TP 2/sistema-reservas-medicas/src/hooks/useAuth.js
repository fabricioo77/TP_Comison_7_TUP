import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    verifySession();
  }, []);

  const verifySession = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await authService.verifySession();

      if (result.isValid && result.user) {
        setUser(result.user);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.error("Error al verificar sesión:", err);
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(async (credentials) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await authService.login(credentials);

      if (result.success) {
        setUser(result.user);
        setIsAuthenticated(true);
        return result;
      } else {
        setError(result.error);
        setIsAuthenticated(false);
        return result;
      }
    } catch (err) {
      const errorMessage = err.message || "Error al iniciar sesión";
      setError(errorMessage);
      setIsAuthenticated(false);

      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(async (userData) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await authService.register(userData);

      if (result.success) {
        setUser(result.user);
        setIsAuthenticated(true);
        return result;
      } else {
        setError(result.error);
        return result;
      }
    } catch (err) {
      const errorMessage = err.message || "Error al registrar usuario";
      setError(errorMessage);

      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(
    async (redirect = true) => {
      setIsLoading(true);

      try {
        await authService.logout();
        setUser(null);
        setIsAuthenticated(false);
        setError(null);

        if (redirect) {
          navigate("/login");
        }
      } catch (err) {
        console.error("Error al cerrar sesión:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [navigate]
  );

  const updateProfile = useCallback(async (userData) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await authService.updateProfile(userData);

      if (result.success) {
        setUser(result.user);
        return result;
      } else {
        setError(result.error);
        return result;
      }
    } catch (err) {
      const errorMessage = err.message || "Error al actualizar perfil";
      setError(errorMessage);

      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const changePassword = useCallback(async (currentPassword, newPassword) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await authService.changePassword(
        currentPassword,
        newPassword
      );

      if (!result.success) {
        setError(result.error);
      }

      return result;
    } catch (err) {
      const errorMessage = err.message || "Error al cambiar contraseña";
      setError(errorMessage);

      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    // Estado
    user,
    isAuthenticated,
    isLoading,
    error,

    // Funciones
    login,
    logout,
    register,
    verifySession,
    updateProfile,
    changePassword,
    clearError,
  };
};

export default useAuth;
