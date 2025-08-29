import React, { useState } from "react";
import styles from "./Flashcard.module.css";
import type { ReviewDirection } from "../../../types/app-settings";

interface FlashcardProps {
  english: string;
  french: string;
  reviewDirection: ReviewDirection;
}

const Flashcard: React.FC<FlashcardProps> = ({
  english,
  french,
  reviewDirection,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const displayFront = reviewDirection === "english-french" ? english : french;
  const displayBack = reviewDirection === "english-french" ? french : english;

  return (
    <div
      className={`${styles.flashcardContainer} ${
        isFlipped ? styles.flipped : ""
      }`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`${styles.flashcardInner} glass-effect`}>
        <div className={styles.flashcardFront}>
          <span>{displayFront}</span>
        </div>
        <div className={styles.flashcardBack}>
          <span>{displayBack}</span>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
