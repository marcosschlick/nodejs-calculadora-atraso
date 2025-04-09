import express from "express";
import routes from "./routes/debtRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

export default app;
