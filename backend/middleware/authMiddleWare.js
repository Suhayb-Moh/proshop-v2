import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

// Protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token;
  // Read the JWT from the cookie
  token = req.cookie.jwt;
  if (token) {
    try {
      // Verify JWT
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Check if user still exists
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token is not valid");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

// Grant access to specific roles
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

export { protect, admin };
