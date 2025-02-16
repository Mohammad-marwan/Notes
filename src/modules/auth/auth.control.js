import UserModel from "../../../DB/model/user.model.js"
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { sendEmail } from "../../utils/sendEmail.js";
import { AppError } from "../../utils/AppError.js";

export const registerUser = async(req ,res)=>{
    const {name, email , password} = req.body;
    const hash = bcrypt.hashSync(password, 8);
const user = await UserModel.create({name, email , password:hash});
const html = `<div><h2>new user</h2><p>welcom ${name}</p></div>`

sendEmail(email,"welcom",html);
return res.json({message:"success",user})
}

export const loginUser = async(req , res ,next)=>{
    const {email , password} = req.body;
    const user = await UserModel.findOne({
        where:{email}
    });
    if(user == null){
        return next(new AppError("invalid email",404))
    }
   const cheek =  bcrypt.compareSync(password, user.password);
   if(cheek == false){
   return next(new AppError("invalid password",400));
   }
   var token = jwt.sign({id:user.id, name:user.name,role:user.role}, 'mohammad');
   return res.json({message:"success",token})
}