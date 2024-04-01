const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const config = require("../config/config");

// Login User
const loginUser = async (req, res) => {
  try {
    if (!req.body.email && !req.body.password) {
      return res.status(500).json({ error: "Invalid username or password" });
    }

    let user = await User.findOne({
      email: req.body.email,
    });

    if (!user.authenticate(req.body.password)) {
      return res.status(500).json({
        error: "Invalid username or password"
      });
    }

    const token = jwt.sign({ userId: user._id }, config.jwtSecret);

    res.status(200).json({ token, user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Password Reset Request Endpoint
const passwordResetRequest = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if user with the provided email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Generate password reset token
    const token = jwt.sign({ userId: user._id }, generateSecret(), {
      expiresIn: "1h",
    });

    // Send password reset email

    // Send password reset email

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: email, // Change to your recipient
      from: "maxafangsco@gmail.com", // Change to your verified sender
      subject: "Password Reset from WinterDev",
      text: "Click the link below to set a new password:",
      html: `<body>
                    <p>Click to set a new password: <a href="http://localhost:3000/api/auth/password/reset/${token}" target="_blank">Reset password</a></p>
                 </body>`,
    };

    sgMail.send(msg);
    // Send a response back to the client to stop the spinner
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error requesting password reset:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const passwordReset = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    // Verify token
    jwt.verify(token, generateSecret(), async (err, decoded) => {
      if (err) {
        return res.status(400).json({ error: "Invalid or expired token" });
      }
      const userId = decoded.userId;

      // Find user by ID and update password
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Define saltRounds
      const saltRounds = 10;

      // Inside the passwordReset endpoint, before saving the new password
      try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        user.hashed_password = hashedPassword; // Use the hashed password
        await user.save();
        res.status(200).json({ message: "Password updated successfully" });
      } catch (error) {
        console.error("Error hashing password:", error);
        return res.status(500).json({ error: "Error hashing password" });
      }
    });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { loginUser, passwordResetRequest, passwordReset };
