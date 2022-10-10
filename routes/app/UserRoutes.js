const express = require("express");
const UserRoutes = express.Router();
const UserController = require('../../controller/app/UserController')
const GlobalMiddlewares = require('../../middlewares/Global_Middlewares')
const UserValidation = require('../../validations/UserValidation')

function initilization() {
    getRoutes();
    postRoutes();
    putRoutes();
}

initilization();

function getRoutes() {
    UserRoutes.get('/get-user-profile',GlobalMiddlewares.authenticate,GlobalMiddlewares.ractifyError,UserController.getUserProfile)
}

function postRoutes() {
    UserRoutes.post('/login',UserValidation.userLogin(),GlobalMiddlewares.ractifyError,UserController.userLogin)
    UserRoutes.post('/register',UserValidation.userRegister(),GlobalMiddlewares.ractifyError,UserController.userRegistration)
}

function putRoutes() {
}

module.exports = UserRoutes;