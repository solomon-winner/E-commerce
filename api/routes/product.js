import express from "express";
import {addProduct, updateProduct, deleteProduct, getProduct} from "../controllers/productControl.js";

const router = express.Router();

router.get("/",getProduct)
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;

