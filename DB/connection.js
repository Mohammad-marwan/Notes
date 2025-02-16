import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('freedb_NotesProjects', 'freedb_MohammadK', '6gtS&49WrGfaAtk', {
    host: 'sql.freedb.tech',
    port:3306,
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
 

