export type QuestionType = {
  id: number;
  question: string;
  answers: Record<string, string | null>;
  category: string;
};
