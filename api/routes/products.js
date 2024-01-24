import express from "express";
import {addProducts, updateProducts, deleteProducts, getProducts} from "../controllers/productsControl.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", addProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

export default router;

