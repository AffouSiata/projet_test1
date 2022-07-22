const Control = require("../controlle/control_user")
const models =require('../models')





const data =class{
    static insertion  =(donne)=>{ 
        console.log('doinnzenb ',donne);
        return new Promise(async (next)=>{
            let {nom,prenom,email,password} =donne
            models.Utilisateur.create({nom,prenom,email,password})
            .then(result =>{
               console.log("result",result);
            })
            .catch(error=>{
                console.log("error",error);
            })
          
        })
    }
    static conn =(element)=>{

        return new Promise(async (next)=>{
           
            models.Utilisateur.findAll({where:{email:element.email}})
            .then(result =>{
               console.log("reussi",result);
            })
            .catch(error=>{
                console.log("email existe ",error);
            })
          
        })  
    }
    static selection =()=>{
     
        // return new Promise(async (next) =>{
        return   models.Utilisateur.findAll()

        //    .then(result =>{
        //     console.log("user",result);
        //        return result
           
              
        // })
        // .catch(error=>{
        //     console.log("error ",error);
        // })
    // }) 
   
       
        
    }

}
module.exports=data;


