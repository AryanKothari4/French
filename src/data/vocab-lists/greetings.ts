import type { VocabList } from '../../types/vocab';

const greetingsVocab: VocabList = [
  { english: 'Hello', french: 'Bonjour', type: 'expression' },
  { english: 'Goodbye', french: 'Au revoir', type: 'expression' },
  { english: 'Thank you', french: 'Merci', type: 'expression' },
  { english: 'Please', french: 'S\'il vous plaît', type: 'expression' },
  { english: 'Yes', french: 'Oui' },
  { english: 'No', french: 'Non' },
  { english: 'Cat', french: 'Chat', type: 'noun', gender: 'm' },
  { english: 'Dog', french: 'Chien', type: 'noun', gender: 'm' },
  { english: 'House', french: 'Maison', type: 'noun', gender: 'f' },
];

export default greetingsVocab;