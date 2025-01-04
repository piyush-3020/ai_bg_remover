import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

app.use(express.json());
app.use(cors());
app.use(bodyParser.raw({ type: "application/json" }));

app.get("/", (req, res) => res.send("api working"));

app.listen(PORT, () => console.log("server started on PORT " + PORT));
