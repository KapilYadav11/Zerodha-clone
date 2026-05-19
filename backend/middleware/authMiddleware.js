require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

    if (!token) {
      return res.status(401).json({ error: "Access token required" });
    }

    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded; // { id, email }
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid or expired token" });
  }
};
