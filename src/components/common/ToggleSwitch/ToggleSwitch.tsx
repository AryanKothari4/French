import React from "react";
import styles from "./ToggleSwitch.module.css";

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
  label: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isOn,
  onToggle,
  label,
}) => {
  return (
    <div className={styles.toggleContainer}>
      <span>{label}</span>
      <div className={styles.switch} onClick={onToggle}>
        <div className={`${styles.slider} ${isOn ? styles.on : styles.off}`} />
      </div>
    </div>
  );
};

export default ToggleSwitch;
