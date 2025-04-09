import { Router } from "express";
import { calcularDividaCompleta } from "../controllers/debtController.js";

const router = Router();

router.post("/divida", calcularDividaCompleta);

export default router;
