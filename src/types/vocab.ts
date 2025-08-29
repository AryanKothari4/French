export type VocabType = 'noun' | 'verb' | 'adjective' | 'adverb' | 'expression';
export type Gender = 'm' | 'f' | 'mf';

export interface VocabItem {
  english: string;
  french: string;
  type?: VocabType;
  gender?: Gender;
}

export type VocabList = VocabItem[];