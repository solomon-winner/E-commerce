import express from "express";
import {addHistory, getHistory} from "../controllers/historyControl.js"

const router = express.Router();

router.post("/",addHistory);
router.get("/", getHistory);

 export default router;