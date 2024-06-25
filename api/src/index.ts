import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import requestIp from "request-ip";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User, { IUser } from "./models/User";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI as string;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestIp.mw());
app.use(cors());

// MongoDB connection
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err: any) => console.error("MongoDB connection error:", err));

// Registration endpoint
app.post("/api/register", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({ email, password });
    await user.save();

    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
