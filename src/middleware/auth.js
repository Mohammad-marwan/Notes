import jwt from 'jsonwebtoken';
const auth = ()=>{

    return (req ,res ,next)=>{
        const {token} = req.headers;
    const decoded = jwt.verify(token , "mohammad");
   if(decoded.role != "admin"){

    res.json({message:"not auth"})
   }
   req.id = decoded.id;
   next()
    }
}

export default auth;