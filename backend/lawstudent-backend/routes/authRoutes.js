const express = require("express");
const { register, login } = require("../controllers/authController");

const router = express.Router();

// ✅ Correct route definitions
router.post("/student/signup", register);
router.post("/student/login", login);

module.exports = router;
