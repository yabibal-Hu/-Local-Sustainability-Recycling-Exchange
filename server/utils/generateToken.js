const jwt = require("jsonwebtoken");

const generateToken = (id, email, name, profilePicture, role) => {
  console.log("id", id, "email", email, "name", name, "profilePicture", profilePicture, "role", role);
  return jwt.sign({
    id,
    email,
    name,
    profilePicture,
    role
  }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;