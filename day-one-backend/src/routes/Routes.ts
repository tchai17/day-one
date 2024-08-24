import { Router } from "express";
import Controller from "../controllers/Controller";

// Initialization
const router = Router();

// Requests
router.get("/", Controller.helloWorld);

export default router;
