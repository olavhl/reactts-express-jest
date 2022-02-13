import * as React from "react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <h1>Start new Quiz</h1>
      <Link to={"/question"}>
        <button>New question</button>
      </Link>
    </>
  );
}
