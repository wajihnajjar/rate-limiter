const express = require("express")
const Router = express.Router()
const userController = require("../controller/userController")
Router.route("/signup").post(userController.signUp)
Router.route("/claim").post(userController.claimReward)
Router.route("/post" ).post(userController.postBlog)

module.exports = Router