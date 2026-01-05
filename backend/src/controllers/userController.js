const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userModel = require('../models/userModel')  


// Route for user login
 const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      return res.json({
        success: true,
        token
      });
    } else {
      return res.json({
        success: false,
        message: "Invalid credentials"
      });
    }

  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message
    });
  }
};


const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET_KYE)

}

module.exports = {loginUser}

