import * as React from "react";
import { Link } from "react-router-dom";

export function ScorePage() {
  return (
    <>
      <h1>Score</h1>
      <ul>
        <li>
          <Link to={"/question"}>New Question</Link>
        </li>
        <li>
          <Link to={"/score"}>See score</Link>
        </li>
      </ul>
    </>
  );
}
