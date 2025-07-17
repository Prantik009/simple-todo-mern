import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import todoRoutes from "./routes/todo.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();

let PORT = process.env.PORT || 5002;

//middlewares
app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log("Server listening to port: ", PORT);
  connectDB();
});
