export type Theme = 'light' | 'dark';
export type ReviewDirection = 'english-french' | 'french-english';
export type ReviewMethod = 'flashcards'; // Only flashcards for MVP

export interface AppSettings {
  theme: Theme;
  reviewDirection: ReviewDirection;
  currentReviewMethod: ReviewMethod;
}