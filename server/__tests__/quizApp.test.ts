import express from "express";
import request from 'supertest';
import {QuizApp} from "../routes/quizApp";

const app = express()
app.use("/api/quiz", QuizApp)

describe("The quiz broadcast", () => {
    it("Returns a random question", async () => {
        const response = await request(app).get("/api/quiz/random").expect(200);
        expect(response.body).toMatchObject({
            id: expect.any(Number),
            answers: expect.any(Object),
            category: expect.any(String),
            question: expect.any(String)
        })
    })
})