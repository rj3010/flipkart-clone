import express from "express";
import authRoutes from "../routes/auth.js"

const router = express.Router();

router.use("/auth", authRoutes);
// router.use("/products", productRoutes)

export default router;