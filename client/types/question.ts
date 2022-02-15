export type QuestionType = {
  id: string;
  question: string;
  answers: Record<string, string | null>;
  category: string;
};
