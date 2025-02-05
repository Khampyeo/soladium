import { create } from "zustand";

interface DarkModeState {
  isDarkMode: boolean;
  isLoading: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (value: boolean) => void;
  loadInitialDarkMode: () => void;
}

const getInitialDarkMode = (): boolean => {
  if (typeof window !== "undefined") {
    const storedMode = localStorage.getItem("isDarkMode");
    return storedMode === "true";
  }
  return false;
};

export const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkMode: false,
  isLoading: true,
  toggleDarkMode: () =>
    set((state) => {
      const newMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", newMode.toString());
      return { isDarkMode: newMode };
    }),
  setDarkMode: (value: boolean) =>
    set(() => {
      localStorage.setItem("isDarkMode", value.toString());
      return { isDarkMode: value };
    }),
  loadInitialDarkMode: () => {
    set({ isLoading: true });
    const initialMode = getInitialDarkMode();
    set({ isDarkMode: initialMode, isLoading: false });
  },
}));
