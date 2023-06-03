import express from "express";
import { addProduct, updateProduct } from "../controler/product";

const router = express.Router();

router.post("/products", addProduct);
router.put("/products", updateProduct);

export default router;
