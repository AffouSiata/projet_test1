const sequelize = require("../database/connexion")
const data = require("../routes/requete")





const Control = class{
    static inscription =(req=request,res=response) =>{
        res.render('index')
       
    }


    static inscriptionpost =(req=request,res=response) =>{
        // console.log("ffffff",req.body);
        data.insertion(req.body)   
        res.redirect('/')
    }


    static connexion =(req=request,res=response) =>{
      
        res.render('conn')
    }

    static connexionpost =(req=request,res=response) =>{
        console.log("vvvvvvvv",req.body)
        data.conn(req.body)
        res.redirect("/affiche")
   
    }
  



    static affiche =async(req=request,res=response) =>{
      const aff= await data.selection()
      console.log("aficchdesh",aff);
      res.render('affiche',{aff:aff})
        // res.json(aff)
    }
    
}
module.exports=Control