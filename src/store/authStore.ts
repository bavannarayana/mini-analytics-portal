import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  user: string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,

      login: (email, password) => {
        if (email === "admin@gmail.com" && password === "Admin@123") {
          set({ user: email });
          return true;
        }
        return false;
      },

      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
    },
  ),
);

export default useAuthStore;
