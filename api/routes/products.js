import express from "express";
import {addProducts, updateProducts, deleteProducts} from "../controllers/productsControl.js";

const router = express.Router();

router.post("/", addProducts);
router.put("/", updateProducts);
router.delete("/:id", deleteProducts);

export default router;

