// src/components/SettingsModal/SettingsModal.tsx
import React from "react";
import styles from "./SettingsModal.module.css";
import { useAppSettings } from "../../contexts/AppSettingsContext";
import ToggleSwitch from "../common/ToggleSwitch/ToggleSwitch";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { settings, setTheme, setReviewDirection } = useAppSettings();

  if (!isOpen) return null;

  const handleThemeToggle = () => {
    setTheme(settings.theme === "light" ? "dark" : "light");
  };

  const handleDirectionToggle = () => {
    setReviewDirection(
      settings.reviewDirection === "english-french"
        ? "french-english"
        : "english-french"
    );
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {" "}
        {/* Removed glass-effect here */}
        <h2>Settings</h2>
        <ToggleSwitch
          label="Dark Mode"
          isOn={settings.theme === "dark"}
          onToggle={handleThemeToggle}
        />
        <ToggleSwitch
          label="Review Direction (Eng ↔️ Fre)"
          isOn={settings.reviewDirection === "french-english"}
          onToggle={handleDirectionToggle}
        />
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;
