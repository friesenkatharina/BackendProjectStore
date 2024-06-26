import express from "express";
import * as usersControllers from "../controllers/usersControllers.js";

const router = express.Router();

router.post("/register", usersControllers.register);
router.post("/login", usersControllers.login);

export default router;
