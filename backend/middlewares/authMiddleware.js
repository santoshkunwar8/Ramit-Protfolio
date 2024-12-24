const authMiddleware = (req, res, next) => {
    if (req.session && req.session.user && req.session.user.isAdmin) {
      next(); 
    } else {
      res.status(403).json({ message: "Access denied. Admins only." });
    }
  };
  
  module.exports = authMiddleware;