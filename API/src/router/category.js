import express from "express";
import { addCategory, deleteCategory } from "../controler/category";
const router = express.Router();
router.post("/categorys", addCategory);
router.delete("/categorys/:id", deleteCategory);
export default router;