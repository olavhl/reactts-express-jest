import express from "express";
import request from "supertest";
import { QuizApp } from "../routes/quizApp";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();
app.use(bodyParser.json());
app.use(cookieParser("test secret"));
app.use("/api/quiz", QuizApp);

describe("The quiz broadcast", () => {
  it("Returns a random question", async () => {
    const response = await request(app).get("/api/quiz/random").expect(200);
    expect(response.body).toMatchObject({
      id: expect.any(Number),
      answers: expect.any(Object),
      category: expect.any(String),
      question: expect.any(String),
    });
    expect(response.body).not.toHaveProperty("correct_answers");
  });

  it("Responds to correct answers", async () => {
    await request(app)
      .post("/api/quiz/answer")
      .send({ id: 974, answer: "answer_b" })
      .expect({ result: "correct" });
  });

  it("Responds to wrong answers", async () => {
    await request(app)
      .post("/api/quiz/answer")
      .send({ id: 974, answer: "answer_c" })
      .expect({ result: "incorrect" });
  });

  it("Responds to missing question", async () => {
    await request(app).post("/api/quiz/answer").send({ id: -1 }).expect(404);
  });

  it("Counts number of right and wrong answers", async () => {
    const agent = request.agent(app);
    await agent.post("/api/quiz/answer").send({ id: 974, answer: "answer_b" });
    await agent.post("/api/quiz/answer").send({ id: 976, answer: "answer_a" });
    await agent
      .get("/api/quiz/score")
      .expect(200)
      .expect({ answered: 2, correct: 1 });
  });
});
