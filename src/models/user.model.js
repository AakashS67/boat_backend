// const mongoose = require('mongoose')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
// import bcrypt from "bcrypt"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{ 
        type: String,
        required: [true,"Password is required"]
    }
},{
    timestamps: true
})

// UserSchema.pre("save", async function (next) {
//     if(!this.isModified("password")) return next();
//     this.password = bcrypt.hash(this.password, 10)
//     next()
// })

// UserSchema.methods.isPasswordCorrect = async function (password){
//   return await bcrypt.compare(password, this.password)
// }

// UserSchema.methods.generateAccessToken = function(){
//    return jwt.sign(
//         {
//             _id: this._id,
//             name: this.name,
//             email: this.email
//         },
//         process.env.ACCESS_TOKEN_SECRET,{
//             expiresIn: process.env.ACCESS_TOKEN_EXPIRY
//         }

//     )
// }

const UserModel = mongoose.model("user",UserSchema)

module.exports = UserModel