import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { storageService, ThemeType } from "@/services/storageService";

type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("light");

  // Initialize theme from storage
  useEffect(() => {
    const initializeTheme = async () => {
      const savedTheme = await storageService.getTheme();
      if (savedTheme) {
        setTheme(savedTheme);
      }
    };
    initializeTheme();
  }, []);

  // save theme to asyncStorage everytime
  const handleSetTheme = async (newTheme: ThemeType) => {
    setTheme(newTheme);
    await storageService.saveTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme:handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("useTheme must be used inside ThemeProvider");

  return context;
}