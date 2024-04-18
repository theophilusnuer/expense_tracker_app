import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    // Extract bearer token from request headers
    const token = req.headers.authorization;
    // Check if bearer token exist
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access token not found in headers!" });
    }
    // Verify bearer token
    const accessToken = token.split(" ")[1];
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    // Forward request to next middleware
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
