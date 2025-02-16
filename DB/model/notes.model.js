import {DataTypes } from'sequelize';
import { sequelize } from '../connection.js';
import UserModel from './user.model.js';

const notesModel = sequelize.define(
    'note',
    {
        title:{
            type:DataTypes.STRING(50),
            allowNull:false,
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:false,

        }

    });
    UserModel.hasMany(notesModel);
    notesModel.belongsTo(UserModel);
    export default notesModel;