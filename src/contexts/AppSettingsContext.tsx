import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
import type {
  AppSettings,
  Theme,
  ReviewDirection,
  ReviewMethod,
} from "../types/app-settings";

interface AppSettingsContextType {
  settings: AppSettings;
  setTheme: (theme: Theme) => void;
  setReviewDirection: (direction: ReviewDirection) => void;
  setReviewMethod: (method: ReviewMethod) => void;
}

const AppSettingsContext = createContext<AppSettingsContextType | undefined>(
  undefined
);

export const AppSettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<AppSettings>({
    theme: "light",
    reviewDirection: "english-french",
    currentReviewMethod: "flashcards", // Default to flashcards
  });

  const setTheme = (theme: Theme) =>
    setSettings((prev) => ({ ...prev, theme }));
  const setReviewDirection = (direction: ReviewDirection) =>
    setSettings((prev) => ({ ...prev, reviewDirection: direction }));
  const setReviewMethod = (method: ReviewMethod) =>
    setSettings((prev) => ({ ...prev, currentReviewMethod: method }));

  return (
    <AppSettingsContext.Provider
      value={{ settings, setTheme, setReviewDirection, setReviewMethod }}
    >
      {children}
    </AppSettingsContext.Provider>
  );
};

export const useAppSettings = () => {
  const context = useContext(AppSettingsContext);
  if (context === undefined) {
    throw new Error(
      "useAppSettings must be used within an AppSettingsProvider"
    );
  }
  return context;
};
