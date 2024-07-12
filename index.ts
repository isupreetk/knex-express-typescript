import express, {Express, Request, Response} from "express";
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hi from Express server");
});

app.listen("8080", () => {
  console.log("Localhost running at 8080");
});
