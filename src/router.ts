import express from "express";
import signup from "@/routes/users/signup";

const router = express.Router();
// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/users/signup", signup);

export default router;
