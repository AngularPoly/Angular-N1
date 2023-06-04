import express from "express";
import {
  addCategory,
  deleteCategory,
  updateCategory,
} from "../controler/category";
const router = express.Router();
router.post("/categorys", addCategory);
router.delete("/categorys/:id", deleteCategory);
router.put("/categorys/:id", updateCategory);
export default router;
