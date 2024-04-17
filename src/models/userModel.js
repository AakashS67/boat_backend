const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    // email: {type: String,
    //     unique: true,
    //     required: true
    // },
    password: String
},{
    timestamps: true
})
const userModel = mongoose.model("user", UserSchema)


module.exports = userModel