import * as React from "react";
import useFetch from "../lib/useFetch";
import { QuestionType } from "../types/question";
import { ShowQuestion } from "../components/ShowQuestion";

type Props = {
  getQuestion: Promise<QuestionType | any>;
};

export function QuestionPage({ getQuestion }: Props) {
  const {
    data: question,
    error,
    loading,
    request,
  } = useFetch<QuestionType>(async () => await getQuestion);

  if (error) {
    return (
      <>
        <p>{error}</p>
        <button onClick={request}>Try again</button>
      </>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Question</h1>
      {question && <ShowQuestion question={question} />}
    </>
  );
}
