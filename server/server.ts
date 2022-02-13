import express = require("express");
import {AddressInfo} from 'net';
import {QuizApp} from "./routes/quizApp";
import bodyParser from "body-parser";

const app = express();

app.use("/api/quiz", QuizApp)
app.use(bodyParser.json())

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on http://localhost:${(server.address() as AddressInfo).port}`);
})