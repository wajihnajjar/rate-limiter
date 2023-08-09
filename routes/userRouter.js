const express = require("express")
const Router = express.Router()
const userController = require("../controller/userController")
Router.route("/signup").post(userController.signUp)

module.exports = Router