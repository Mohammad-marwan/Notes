import { AppError } from "../utils/AppError.js";

const validation = (schema)=>{

    return (req ,res , next)=>{

        const inputData = {...req.body,...req.params}

        const result = schema.validate(inputData,{abortEarly:false});
        if(result?.error){
            return next(new AppError(result.error,400))
        }else{
            next();
        }
    }
}

export default validation;