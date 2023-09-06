const express = require("express");
const AdminUserRoutes = express.Router();
const AdminUserController = require('../../controller/admin/AdminUserController')
const GlobalMiddlewares = require('../../middlewares/Global_Middlewares')

function initilization() {
    getRoutes();
    postRoutes();
    putRoutes();
}

initilization();

function getRoutes() {
    AdminUserRoutes.get('/get-users-list',GlobalMiddlewares.ractifyError,AdminUserController.getUserList)
}

function postRoutes() {
}

function putRoutes() {
}

module.exports = AdminUserRoutes;