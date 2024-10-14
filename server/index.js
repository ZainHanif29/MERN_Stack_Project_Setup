import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();


const corsOptions = {
    origin: "*",
    credentials: true,
  };
// midllerwares
const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors(corsOptions));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB()
  console.log(`Server is running this port ${`http://localhost:${PORT}`}`);
});
