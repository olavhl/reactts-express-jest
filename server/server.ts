import express = require("express");
import {AddressInfo} from 'net';
import {QuizApp} from "./routes/quizApp";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();
app.use(bodyParser.json())
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use("/api/quiz", QuizApp)

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on http://localhost:${(server.address() as AddressInfo).port}`);
})