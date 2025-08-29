import React, { useState } from "react";
import styles from "./Header.module.css";
import { useAppSettings } from "../../../contexts/AppSettingsContext";
import type { ReviewMethod } from "../../../types/app-settings";

interface HeaderProps {
  onSelectVocabList: (listName: string) => void;
  onToggleSettings: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onSelectVocabList,
  onToggleSettings,
}) => {
  const { settings, setReviewMethod } = useAppSettings();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const vocabLists = ["Greetings"]; // Only one list for MVP

  // For MVP, handleMethodChange will always set to 'flashcards' as it's the only option
  const handleMethodChange = (method: ReviewMethod) => {
    setReviewMethod(method);
  };

  return (
    <header className={`${styles.header} glass-effect`}>
      <div className={styles.leftSection}>
        <div className={styles.dropdownContainer}>
          <button
            className={styles.dropdownButton}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Select List
          </button>
          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              {vocabLists.map((listName) => (
                <button
                  key={listName}
                  onClick={() => {
                    onSelectVocabList(listName);
                    setDropdownOpen(false);
                  }}
                >
                  {listName}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <nav className={styles.reviewMethods}>
        <button
          className={`${styles.methodButton} ${
            settings.currentReviewMethod === "flashcards" ? styles.active : ""
          }`}
          onClick={() => handleMethodChange("flashcards")}
        >
          Flashcards
        </button>
        {/* Placeholders for other methods, disabled for MVP */}
        <button className={styles.methodButton} disabled>
          Typing Test (soon)
        </button>
        <button className={styles.methodButton} disabled>
          Multiple Choice (soon)
        </button>
        <button className={styles.methodButton} disabled>
          Gender Review (soon)
        </button>
      </nav>
      <div className={styles.rightSection}>
        <button className={styles.settingsButton} onClick={onToggleSettings}>
          ⚙️
        </button>
      </div>
    </header>
  );
};

export default Header;
