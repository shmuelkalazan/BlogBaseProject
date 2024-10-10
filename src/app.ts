import express from "express";
import dotenv from "dotenv";
import postRouter from "./routes/postRoutes";
import userRouter from "./routes/userRoutes";
import { errorHandler } from "./middleware/errorHandler";
import connectDB from "./config/db";
const { specs, swaggerUi } = require('./swagger');

dotenv.config();

const app = express();
const port = process.env.PORT || 1113;

// Middlewares
app.use(express.json());
connectDB();

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
