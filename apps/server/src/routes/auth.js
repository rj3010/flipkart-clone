import express from "express";

import {
  registerUser,
  loginUser,
} from "../controllers/auth.js";

const authRoutes = express.Router();

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register new user
 *     tags: [Auth]
 */
authRoutes.post("/register", registerUser);

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 */
authRoutes.post("/login", loginUser);

export default authRoutes;