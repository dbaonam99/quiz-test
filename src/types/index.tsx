export interface ModalProps {
  isOpen?: boolean;
  onCancel?: (() => void) | undefined;
  onConfirm?: (() => void) | undefined;
  cancelText?: string | undefined;
  confirmText?: string | undefined;
  title?: string | undefined;
  content?: string;
  type?: string;
}

export interface HeaderProps {
  onBack: () => void;
}

export interface QuestionProps {
  id: string;
  question: string;
  hint: string;
  answers: AnswerProps[];
}

export interface AnswerProps {
  id: string;
  answer: String;
  isCorrect: Boolean;
}
