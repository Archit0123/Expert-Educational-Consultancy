const express = require("express");
const router = express.Router();

const { isLoggedIn } = require("../middlewares/userMiddleware");

const {
  register,
  login,
  logout,
  yourAccount,
  updatePassword,
  updateAccount,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(isLoggedIn, logout);
router
  .route("/youraccount")
  .get(isLoggedIn, yourAccount)
  .put(isLoggedIn, updateAccount);
router.route("/updatepassword").post(isLoggedIn, updatePassword);
router.route("/forgotpassword").post(isLoggedIn, forgotPassword);
router.route("/password/reset/:token").post(resetPassword);

module.exports = router;
