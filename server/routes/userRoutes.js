import express from "express";
import { clerkWebhooks } from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/webhooks", clerkWebhooks);

export default userRouter;
