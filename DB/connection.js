import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('notes', 'root', '', {
    host: 'localhost',
    dialect:'mysql'
  });

 export const connectionDB=()=>{

    sequelize.sync().then(()=>{
      console.log("connection database...")
    })
    .catch(()=>{
      console.log("error in connection database...")
    })
  }
 

