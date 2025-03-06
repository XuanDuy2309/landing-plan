const fakeApiLogin = (username: string, password: string): Promise<{ success: boolean; token?: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (username === "admin" && password === "123456") {
          resolve({ success: true, token: "fake-jwt-token" });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };
  
  // Service login
  export const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const response = await fakeApiLogin(username, password);
      if (response.success && response.token) {
        localStorage.setItem("token", response.token);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };
  
  // Service logout
  export const logout = (): void => {
    localStorage.removeItem("token");
  };
  
  // Check login status
  export const isAuthenticated = (): boolean => {
    return !!localStorage.getItem("token");
  };