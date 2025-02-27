const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { message } = require("statuses");

require("dotenv").config();

//Generate JWT token
const generateToken = (user) => {
    return jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
};

//Register a user
exports.register = async (req, res) => {
    try{
        const {name, email, password} = req.body;

        //Check if user already exists
        let user = await User.findOne({email});
        if (user) return res.status(400).json({message: "User already exists"});

        user = new User({name, email, password});
        await user.save();

        res.status(201).json({token: generateToken(user)});
    }catch (error){
        res.status(400).json({message: error.message});
    }
};

//login User
exports.login = async (req, res) => {
    const { email, password } = req.body;

    // Find user in database (pseudo-code, adjust as needed)
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token });
};
