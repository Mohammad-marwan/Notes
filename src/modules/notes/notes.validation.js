import joi from 'joi';

export const schemaNotes = joi.object({
    title:joi.string().required(),
    description:joi.string().required()

});

export const notesID = joi.object({
    id:joi.number().min(1).required()
});