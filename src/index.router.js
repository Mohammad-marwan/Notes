import { connectionDB } from "../DB/connection.js";
import routerAuth from "./modules/auth/auth.router.js";
import routerNotes from "./modules/notes/notes.router.js";
import routerUser from "./modules/user/user.router.js";
import fileUpload from "./utils/multer.js";
import cors from 'cors';

const initApp=(express ,app)=>{

connectionDB();
app.use(express.json());
fileUpload();
app.use(cors());
app.get("/",(req,res)=>{
  return res.status(200).json({message:" welcome"})
});
app.use("/auth",routerAuth);
app.use("/users",routerUser);
app.use("/notes",routerNotes);
app.get("*",(req,res)=>{
  return res.status(400).json({message:"page not found"})
});
app.use((err ,req ,res ,next )=>{
  return res.status(err.statuscode).json({message:err.message})
})
}

export default initApp;