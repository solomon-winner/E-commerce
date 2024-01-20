import express from "express";
import {addWish, updateWish, deleteWish} from "../controllers/wishControl.js";

const router = express.Router();

router.post("/", addWish);
router.put("/", updateWish);
router.delete("/:id", deleteWish);

export default router;

