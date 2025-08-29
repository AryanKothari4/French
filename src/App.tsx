import React, { useEffect, useState } from "react";
import Header from "./components/layout/Header/Header";
import MainContent from "./components/layout/MainContent/MainContent";
import SettingsModal from "./components/SettingsModal/SettingsModal";
import {
  AppSettingsProvider,
  useAppSettings,
} from "./contexts/AppSettingsContext";
import greetingsVocab from "./data/vocab-lists/greetings"; // Only import the default vocab list
import type { VocabList } from "./types/vocab";

// AppWrapper handles context and theme application
const AppWrapper: React.FC = () => {
  const { settings } = useAppSettings();
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [selectedVocabList, setSelectedVocabList] =
    useState<VocabList>(greetingsVocab); // Default and only list for MVP

  // Effect to apply theme class to body
  useEffect(() => {
    document.body.className =
      settings.theme === "dark" ? "dark-mode" : "light-mode";
  }, [settings.theme]);

  // For MVP, this function is simplified as there's only one list
  const handleSelectVocabList = (listName: string) => {
    if (listName === "Greetings") {
      setSelectedVocabList(greetingsVocab);
    }
  };

  return (
    <>
      <Header
        onSelectVocabList={handleSelectVocabList}
        onToggleSettings={() => setIsSettingsModalOpen(true)}
      />
      <MainContent selectedVocabList={selectedVocabList} />
      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
      />
    </>
  );
};

// App component provides the context
const App: React.FC = () => {
  return (
    <AppSettingsProvider>
      <AppWrapper />
    </AppSettingsProvider>
  );
};

export default App;
