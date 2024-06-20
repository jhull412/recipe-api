import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
const cors = require("cors");
const routers = require("./routes/index");

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(routers);
app.use(express.static("public"))
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
