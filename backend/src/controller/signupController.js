const userModel = require("../model/userModel");

const signupComplete = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    // username check
    if (await userModel.findOne({ username })) {
      return res.status(400).send("Username already taken");
    }

    // email check
    if (await userModel.findOne({ email })) {
      return res.status(400).send("Email already exists");
    }

    // password match
    if (password !== confirmPassword) {
      return res.status(400).send("Passwords do not match");
    }

    // create user
    const user = await userModel.create(req.body);

    return res.status(201).json({
      message: "User registered successfully",
    });
  } catch (err) {
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
