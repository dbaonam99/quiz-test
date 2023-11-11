export interface QuestionProps {
  id: string;
  question: string;
  hint: string;
  answers: AnswerProps[];
  order: number;
}

export interface AnswerProps {
  id: string;
  answer: String;
  isCorrect: Boolean;
}
