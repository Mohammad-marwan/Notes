import { Router } from "express";
import { deleteUser, fileupload, getUser, putUser } from "./user.control.js";
import auth from "../../middleware/auth.js";
import fileUpload from "../../utils/multer.js";
import { asyncHandler } from "../../utils/catchError.js";
import validation from "../../middleware/validation.js";
import { userID } from "./user.validation.js";

const router = Router();

router.get("/",auth(),asyncHandler(getUser));
router.delete("/:id",auth(),validation(userID),asyncHandler(deleteUser));
router.put("/:id",auth(),validation(userID),asyncHandler(putUser));
router.put("/upload/:id",auth(),validation(userID),fileUpload().single('image'),asyncHandler(fileupload))

export default router;
