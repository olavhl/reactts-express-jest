import { QuestionType } from "../types/question";
import * as React from "react";

type Props = {
  question: QuestionType;
};

export function ShowQuestion({ question }: Props) {
  return (
    <>
      <h3>{question.question}</h3>
      {Object.keys(question.answers)
        .filter((a) => question.answers[a])
        .map((b) => (
          <div key={b}>
            <button>{question.answers[b]}</button>
          </div>
        ))}
    </>
  );
}
