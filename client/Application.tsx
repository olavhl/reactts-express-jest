import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { QuestionPage } from "./pages/QuestionPage";
import { ScorePage } from "./pages/ScorePage";

export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/question"} element={<QuestionPage />} />
        <Route path={"/score"} element={<ScorePage />} />
      </Routes>
    </BrowserRouter>
  );
}
