/* eslint-disable @typescript-eslint/no-misused-promises */
import express from "express";
import test from "@/routes/test";
import signup from "@/routes/users/signup";

const router = express.Router();
router.get("/test", test);
router.get("/users/signup", signup);

export default router;
