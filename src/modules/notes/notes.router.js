import {Router} from 'express'
import { addNotes, getNotes, putNotes , deletNotes, getDitails } from './notes.control.js';
import validation from '../../middleware/validation.js';
import { notesID, schemaNotes } from './notes.validation.js';
import auth from '../../middleware/auth.js';
import { asyncHandler } from '../../utils/catchError.js';
const router = Router();

router.post("/",auth(),validation(notesID,schemaNotes),asyncHandler(addNotes));
router.put("/:id",auth(),validation(notesID),asyncHandler(putNotes));
router.get("/",auth(),asyncHandler(getNotes));
router.delete("/:id",auth(),validation(notesID),asyncHandler(deletNotes));
router.get("/:id",auth(),validation(notesID),asyncHandler(getDitails))





export default router;