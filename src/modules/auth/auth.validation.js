import joi  from'joi';

export const schemaRegister = joi.object({
    name: joi.string().min(3).max(30).required(),
    email:joi.string().email().required(),
    password:joi.string().min(5).max(15).required()
});


export const schemaLogin = joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(5).max(15).required()
});