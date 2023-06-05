import express from "express";
import {
  addProduct,
  removeProduct,
  updateProduct,
  getAllProduct,
  getOneproduct,
} from "../controler/product";
import { checkPermission } from "../middlewares/checkPermission";
const router = express.Router();

router.post("/products", checkPermission, addProduct);
router.put("/products/:id", checkPermission, updateProduct);
router.delete("/products/:id", checkPermission, removeProduct);
router.get("/products", getAllProduct);
router.get("/products/:id", getOneproduct);

export default router;
