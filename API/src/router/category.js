import express from "express";
import { addCategory } from "../controler/category";
const router = express.Router();
router.post("/categorys", addCategory);
export default router;