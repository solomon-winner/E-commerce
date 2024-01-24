import express from "express";
import {addWish, updateWish, deleteWish, getWish} from "../controllers/wishControl.js";

const router = express.Router();

router.get("/", getWish);
router.post("/", addWish);
router.put("/:id", updateWish);
router.delete("/:id", deleteWish);

export default router;

