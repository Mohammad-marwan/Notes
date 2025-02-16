import { Router } from "express";
import { loginUser, registerUser } from "./auth.control.js";
import validation from "../../middleware/validation.js";
import { schemaLogin, schemaRegister } from "./auth.validation.js";
import { asyncHandler } from "../../utils/catchError.js";

const router = Router();

router.post("/",validation(schemaRegister),asyncHandler(registerUser));
router.post("/login",validation(schemaLogin),asyncHandler(loginUser));
export default router;

