const express = require("express");
const userRoutes = express.Router();

const { volume, price, pairs } = require("../controllers/userController");

userRoutes.get("/pairs", pairs);
userRoutes.get("/volume", volume);
userRoutes.get("/price", price);

module.exports = userRoutes;
