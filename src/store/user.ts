import { create } from "zustand";
import { persist } from "zustand/middleware";
import { setCookie, deleteCookie } from "cookies-next";

interface UserStore {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,

      login: () => {
        setCookie("auth", "true", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24 * 30,
        });
        set({ isAuthenticated: true });
      },

      logout: () => {
        deleteCookie("auth", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        });
        set({ isAuthenticated: false });
      },
    }),
    {
      name: "user-storage",
    }
  )
);
