const userModel = require("../model/userModel");

const signupComplete = async (req, res) => {
  try {
    const { username, email,  password, confirmPassword } = req.body;

    let existingUsername = await userModel.findOne({ username });
    if (existingUsername) {
      return res
        .status(400)
        .send("This username already taken , please enter unique username!");
    }

    let existingUserEmail = await userModel.findOne({ email });
    if (existingUserEmail) {
      return res
        .status(400)
        .send(
          "This email already has been stored in database,  please enter unique email address."
        );
    }

    // 1. Confirm password check
    if (password !== confirmPassword) {
      return res
        .status(400)
        .send("Password and Confirm Password do not match!");
    }

    let user = new userModel(req.body);


    // req.session.user = user;
    await user.save();

    return res.status(201).json({
      message: "User registered successfully",
    });
  } catch (err) {
  console.error(err); // IMPORTANT

  if (err.code === 11000) {
    return res.status(400).send("Duplicate field value");
  }

  if (err.name === "ValidationError") {
    return res.status(400).send(err.message);
  }

  return res.status(500).send("Server Error!");
}

};

module.exports = {
  signupComplete,
};
