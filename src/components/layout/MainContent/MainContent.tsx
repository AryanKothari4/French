import React from "react";
import styles from "./MainContent.module.css";
import type { VocabList } from "../../../types/vocab";
import { useAppSettings } from "../../../contexts/AppSettingsContext";
import FlashcardReview from "../../review-methods/FlashcardReview/FlashcardReview";

interface MainContentProps {
  selectedVocabList: VocabList;
}

const MainContent: React.FC<MainContentProps> = ({ selectedVocabList }) => {
  const { settings } = useAppSettings();

  return (
    <main className={styles.mainContent}>
      {settings.currentReviewMethod === "flashcards" && (
        <FlashcardReview vocabList={selectedVocabList} />
      )}
      {/* Placeholder for other methods, ensuring no actual component import */}
      {settings.currentReviewMethod !== "flashcards" && (
        <div className={`${styles.placeholder} glass-effect`}>
          <h3>Coming Soon!</h3>
          <p>This review method is under development.</p>
        </div>
      )}
    </main>
  );
};

export default MainContent;
