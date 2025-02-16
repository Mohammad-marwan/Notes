import notesModel from "../../../DB/model/notes.model.js";
import UserModel from "../../../DB/model/user.model.js";
import { AppError } from "../../utils/AppError.js";

export const addNotes = async (req ,res)=>{
    const {title , description} =req.body;
    const notes = await notesModel.create({title , description,UserId:req.id});
    return res.status(201).json({message:"success",notes});

}


export const putNotes = async (req, res,next) => {
    const { id } = req.params;
    const {title} = req.body;
    const notes = await notesModel.findByPk(id);
    if (notes == null) {
        return next(new AppError("user not found",400));
    }
    notes.title = title;
    await notes.save();
    return res.status(200).json({ message: "success",notes })
} 


export const getNotes = async (req, res) => {
    const notes = await notesModel.findAll({
        attributes: ['title', 'description'],
        model:{
            UserModel,
            attributes:['id','name']
        }
    });

    res.status(200).json({message:"success",notes});
}


export const deletNotes = async (req, res,next) => {
    const { id } = req.params;
    const notes = await notesModel.findByPk(id);
    if (notes == null) {
        return next(new AppError("user not found",400));
    }
    await notesModel.destroy({
        where: {
            id
        }
    });
    return res.status(200).json({ message: "success"})
} 


export const getDitails= async(req , res ,next)=>{
    const {id} = req.params;
    const notes = await notesModel.findByPk(id);
    if (notes == null) {
        return next(new AppError("user not found",400));
    }
    res.status(200).json({message:"success",notes})

}