import express = require("express");
import {AddressInfo} from 'net';
import {QuizApp} from "./routes/quizApp";

const app = express();

app.use("/api/quiz", QuizApp)

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on http://localhost:${(server.address() as AddressInfo).port}`);
})