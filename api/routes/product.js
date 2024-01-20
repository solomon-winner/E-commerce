import express from "express";
import {addProduct, updateProduct, deleteProduct} from "../controllers/productControl.js";

const router = express.Router();

router.post("/", addProduct);
router.put("/", updateProduct);
router.delete("/:id", deleteProduct);

export default router;

