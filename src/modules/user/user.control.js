import UserModel from "../../../DB/model/user.model.js"
import { AppError } from "../../utils/AppError.js";
import cloudinary from "../../utils/cloudinary.js";

export const getUser = async (req, res) => {
    const user = await UserModel.findAll({
        attributes: ['name', 'email']
    });

    res.status(200).json({message:"success",user});
}


export const deleteUser = async (req, res,next) => {
    const { id } = req.params;
    const user = await UserModel.findByPk(id);
    if (user == null) {
        
        return next(new AppError("user not found",400));
    }
    await UserModel.destroy({
        where: {
            id
        }
    });
    return res.json({ message: "success" })
} 


export const putUser = async (req, res,next) => {
    const { id } = req.params;
    const {name} = req.body;
    const user = await UserModel.findByPk(id);
    if (user == null) {
        return next(new AppError("user not found",400));     
    }
    user.name = name;
    await user.save();
    return res.status(200).json({ message: "success",user })
} 

export const fileupload = async(req , res,next)=>{

    const { id } = req.params;
    const user = await UserModel.findByPk(id);
    if (user == null) {
        return next(new AppError("user not found",400));
    }

    const {secure_url} = await cloudinary.uploader.upload(req.file.path);
    user.profilePIC == secure_url;
    await user.save();
    return res.status(200).json({message:"success"})
}