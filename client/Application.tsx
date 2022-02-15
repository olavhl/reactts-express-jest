import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { QuestionPage } from "./pages/QuestionPage";
import { ScorePage } from "./pages/ScorePage";
import { fetchJSON, postJSON } from "./lib/http";

export function Application() {
  const questionApi = {
    getQuestion: async () => await fetchJSON("/api/quiz/random"),
    postAnswer: async ({ id, answer }: { id: number; answer: string }) =>
      await postJSON<number, string>("/api/quiz/answer", { id, answer }),
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route
          path={"/question"}
          element={
            <QuestionPage
              getQuestion={questionApi.getQuestion()}
              postAnswer={questionApi.postAnswer}
            />
          }
        />
        <Route path={"/score"} element={<ScorePage />} />
      </Routes>
    </BrowserRouter>
  );
}
