import { QuestionType } from "../types/question";
import * as React from "react";

type Props = {
  question: QuestionType;
  postAnswer: ({
    answer,
    id,
  }: {
    answer: string;
    id: number;
  }) => Promise<Response>;
};

export function ShowQuestion({ question, postAnswer }: Props) {
  const handleAnswer = async (id: number, answer: string | null) => {
    if (answer) {
      const res = await postAnswer({ id, answer });
      res.json().then((r) => console.log(r.result));
    }
  };

  return (
    <>
      <h3>{question.question}</h3>
      {Object.keys(question.answers)
        .filter((a) => question.answers[a])
        .map((b) => (
          <div key={b}>
            <button onClick={() => handleAnswer(question.id, b)}>
              {question.answers[b]}
            </button>
          </div>
        ))}
    </>
  );
}
