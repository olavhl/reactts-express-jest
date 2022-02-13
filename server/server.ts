import express = require("express");
import { AddressInfo } from "net";
import { QuizApp } from "./routes/quizApp";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import * as path from "path";

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use("/api/quiz", QuizApp);

app.use(express.static(path.resolve("..", "client", "dist")));

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    return res.sendFile(path.resolve("..", "client", "dist", "index.html"));
  }
  next();
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server started on http://localhost:${
      (server.address() as AddressInfo).port
    }`
  );
});
