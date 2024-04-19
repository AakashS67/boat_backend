const UserModel = require("../models/user.model");
const bcrypt = require('bcryptjs')


const userSignUp = async (req, res) => {
    try {
        const {name, email, password} = req.body

        if (!name) {
           console.log("Please provide your name");
        }
        if (!email) {
            console.log("Please provide your email");
        }
        if (!password) {
            console.log("Please provide your password");
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);

        if(!hashedPassword){
            throw new Error("Something went wrong")
        }
        
        // Create user object with hashed password
        const user = new UserModel({
            email: email,
            password: hashedPassword,
            name: name
        });

        // Save user to database
        const savedUser = await user.save();

        res.status(200).json(savedUser);


    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = userSignUp