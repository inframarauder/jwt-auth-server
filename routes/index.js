const router = require("express").Router();
const AuthController = require("../controllers/AuthController");
const Middleware = require("../middlewares");

//@route POST /api/auth/signup
router.post("/auth/signup", AuthController.signup);

//@route POST /api/auth/login
router.post("/auth/login", AuthController.login);

//@route POST /api/auth/refresh_token
router.post("/auth/refresh_token", AuthController.generateRefreshToken);

//@route DELETE /api/auth/logout
router.delete("/auth/logout", AuthController.logout);

//@route GET /api/protected_resource
//@access to only authenticated users
router.get("/protected_resource", Middleware.checkAuth, (req, res) => {
  return res.status(200).json({ user: req.user });
});

module.exports = router;
