import express from "express";
import request from 'supertest';
import {QuizApp} from "../routes/quizApp";
import bodyParser from "body-parser";

const app = express()
app.use(bodyParser.json())
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
        expect(response.body).not.toHaveProperty("correct_answers")
    })

    it("Responds to correct answers", async () => {
        await request(app).post("/api/quiz/answer").send({id: 974, answer: "answer_b"})
            .expect({result: 'correct'})
    })

    it("Responds to wrong answers", async () => {
        await request(app).post("/api/quiz/answer").send({id: 974, answer: "answer_c"})
            .expect({result: 'incorrect'})
    })

    it("Responds to missing question", async () => {
        await request(app).post("/api/quiz/answer").send({id: -1}).expect(404)
    })
})