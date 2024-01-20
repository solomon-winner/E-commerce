import express from "express";
import {addHistory} from "../controllers/historyControl.js"

const router = express.Router();

router.post("/", addHistory);

export default router;