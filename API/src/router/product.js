import express from "express";
import { addProduct, removeProduct, updateProduct } from "../controler/product";

const router = express.Router();

router.post("/products", addProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", removeProduct)

export default router;
