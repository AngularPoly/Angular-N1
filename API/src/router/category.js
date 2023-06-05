import express from "express";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  getOneCategory,
  updateCategory,
} from "../controler/category";
import { checkPermission } from "../middlewares/checkPermission";
const router = express.Router();
router.get("/categorys", getAllCategory);
router.get("/categorys/:id", getOneCategory);
router.post("/categorys", checkPermission, addCategory);
router.delete("/categorys/:id", checkPermission, deleteCategory);
router.put("/categorys/:id", checkPermission, updateCategory);
export default router;
