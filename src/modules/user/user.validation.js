import joi from "joi";


export const userID = joi.object({
    id:joi.number().min(1).required()
});