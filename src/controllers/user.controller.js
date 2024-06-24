const UserModel = require("../models/user.model");
const bcrypt = require('bcryptjs');

const userSignUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "Please provide name, email, and password",
            });
        }

        // Check if user already exists
        const checkEmail = await UserModel.findOne({ email });
        if (checkEmail) {
            return res.status(409).json({
                success: false,
                error: true,
                message: "User with this email already exists",
            });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create user object with hashed password
        const user = new UserModel({
            name,
            email,  
            password: hashedPassword,
        });

        // Save user to database
        const savedUser = await user.save();

        res.status(201).json({
            data: savedUser,
            success: true,
            error: false,
            message: "User created successfully!",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: true,
            message: err.message || "Internal Server Error",
        });
    }
};

const userSignIn = async(req, res)=>{
const {email, password} = req.body

}

module.exports = {userSignUp, userSignIn};
