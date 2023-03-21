import express, { Express, Response, Request } from "express";
import dotenv from 'dotenv'

const app: Express = express();
dotenv.config()

const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typscript");
});

app.listen(port);
