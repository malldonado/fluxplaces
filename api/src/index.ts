import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { userRouter } from "./routes/userRoutes";
import errorHandler from "./middleware/errorHandler";

const app = express();
const PORT = process.env.PORT || 3000;

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
const MONGO_URI =
  "mongodb+srv://root:root@cluster.3wbflkd.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/users", userRouter);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
