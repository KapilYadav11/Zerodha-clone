const { register, login, getProfile } = require("../controller/authController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/profile", verifyToken, getProfile); // protected