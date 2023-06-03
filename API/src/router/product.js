import express from "express"
import { addProduct } from "../controler/product"

const router = express.Router()

router.post("/products", addProduct)

export default router
