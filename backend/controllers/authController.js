const jwt = require("jsonwebtoken");

//Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1h"});
};

//register user
exports.registerUser = async (req, res) => {};

//login user
exports.loginUser = async (req, res) => {};

//register user
exports.getUserInfo = async (req, res) => {};