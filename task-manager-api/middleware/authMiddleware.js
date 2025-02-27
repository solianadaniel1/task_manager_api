const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
    console.log("Auth middleware executed");  // Debugging

    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = decoded; // Attach user data to request
        console.log("Decoded user:", decoded);  // Debugging
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid or expired token" });
    }
};
