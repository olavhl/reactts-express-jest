import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<h1>Start new Quiz</h1>} />
        <Route path={"/question"} element={<h1>Question</h1>} />
        <Route path={"/score"} element={<h1>Score</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
