class AuthService {
  async login(credentials) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    if (!credentials.email || !credentials.password) {
      return {
        success: false,
        error: "Email y contraseña son requeridos",
      };
    }

    const mockUser = {
      id: "1",
      email: credentials.email,
      nombre: credentials.email,
      rol: "admin",
    };

    this.setUserData(mockUser);
    localStorage.setItem("isAuthenticated", "true");
    window.dispatchEvent(new Event("authChange"));

    return {
      success: true,
      user: mockUser,
      message: "Login exitoso",
    };
  }

  async register(userData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (!userData.email || !userData.password || !userData.nombre) {
      return {
        success: false,
        error: "Todos los campos son requeridos",
      };
    }

    const newUser = {
      id: Date.now().toString(),
      nombre: userData.nombre,
      email: userData.email,
      rol: userData.rol || "usuario",
    };

    this.setUserData(newUser);
    localStorage.setItem("isAuthenticated", "true");
    window.dispatchEvent(new Event("authChange"));

    return {
      success: true,
      user: newUser,
      message: "Registro exitoso",
    };
  }

  async logout() {
    await new Promise((resolve) => setTimeout(resolve, 300));
    this.clearAuthData();
    window.dispatchEvent(new Event("authChange"));

    return {
      success: true,
      message: "Sesión cerrada exitosamente",
    };
  }

  async verifySession() {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    const user = this.getUserData();

    if (!isAuthenticated || !user) {
      return {
        isValid: false,
        user: null,
      };
    }

    return {
      isValid: true,
      user: user,
    };
  }

  async updateProfile(userData) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    const currentUser = this.getUserData();

    if (!currentUser) {
      return {
        success: false,
        error: "No hay usuario autenticado",
      };
    }

    const updatedUser = {
      ...currentUser,
      ...userData,
      id: currentUser.id,
    };

    this.setUserData(updatedUser);

    return {
      success: true,
      user: updatedUser,
      message: "Perfil actualizado exitosamente",
    };
  }

  async changePassword(currentPassword, newPassword) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    if (!currentPassword || !newPassword) {
      return {
        success: false,
        error: "Ambas contraseñas son requeridas",
      };
    }

    if (newPassword.length < 6) {
      return {
        success: false,
        error: "La nueva contraseña debe tener al menos 6 caracteres",
      };
    }

    return {
      success: true,
      message: "Contraseña cambiada exitosamente",
    };
  }

  setUserData(user) {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }

  getUserData() {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        return JSON.parse(userData);
      } catch {
        return null;
      }
    }
    return null;
  }

  clearAuthData() {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    localStorage.removeItem("userEmail");
  }

  isAuthenticated() {
    return (
      localStorage.getItem("isAuthenticated") === "true" && !!this.getUserData()
    );
  }
}

export const authService = new AuthService();
export default authService;
