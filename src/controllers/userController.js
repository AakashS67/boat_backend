const {userModel} = require("../models/userModel")
const bcrypt = require('bcrypt')


const userSignUp = async (req, res)=>{
    try {
        // const {name, email, password} = req.body
        console.log("req.body",req.body);
        if(!name){
            throw new Error("Please provide your name")
        }
        if(!email){
            throw new Error("Please provide your email")
        }
        if(!password){
            throw new Error("Please provide your password")
      }
        bcrypt.hash(req.body.password,10,function(err,hash){
        console.log(hash)
        req.body.password = hash 
        const user = new userModel(req.body)
        user.save()

    })  
     
    if(!req.body.password){
        throw new Error("Something went wrong with hash password")
    }
    // const payload = {
    //     ...req.body, password: req.body.password
    //   }
    
    //   const userData = new userModel(payload)
    //   const saveUser = userData.save()
    res.status(200).json({user, msg:"User Created Successfully"})
    
    }catch(error) {
        res.status(400).json(error)
    }
} 

module.exports = userSignUp