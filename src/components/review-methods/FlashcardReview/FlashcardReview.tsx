// src/components/review-methods/FlashcardReview/FlashcardReview.tsx
import React, { useState } from "react";
import styles from "./FlashcardReview.module.css";
import { type VocabList } from "../../../types/vocab";
import { useAppSettings } from "../../../contexts/AppSettingsContext";
import Flashcard from "./Flashcard";

interface FlashcardReviewProps {
  vocabList: VocabList;
}

const FlashcardReview: React.FC<FlashcardReviewProps> = ({ vocabList }) => {
  const { settings } = useAppSettings();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentItem = vocabList[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % vocabList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + vocabList.length) % vocabList.length);
  };

  if (!vocabList || vocabList.length === 0) {
    return (
      <div className={`${styles.flashcardReview} glass-effect`}>
        No vocabulary items in this list.
      </div>
    );
  }

  return (
    <div className={styles.flashcardReview}>
      <p className={styles.progress}>
        {currentIndex + 1} / {vocabList.length}
      </p>
      <Flashcard
        english={currentItem.english}
        french={currentItem.french}
        reviewDirection={settings.reviewDirection}
      />
      <div className={styles.navigation}>
        <button onClick={handlePrev} className={styles.navButton}>
          Previous
        </button>
        <button onClick={handleNext} className={styles.navButton}>
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashcardReview;
