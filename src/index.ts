import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const cors = require("cors");
import recipes from "./data/recipes.json";

dotenv.config();

const app: Express = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get("/recipes/:id", (req: Request<{ id: string }>, res: Response) => {
  const result = recipes.find((r) => {
    return r.id === Number(req.params.id);
  });
  res.json(result);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
