const express = require("express");
const AdminDashboardRoutes = express.Router();
const AdminDashboardController = require('../../controller/admin/AdminDashboardController')
const GlobalMiddlewares = require('../../middlewares/Global_Middlewares')

function initilization() {
    getRoutes();
    postRoutes();
    putRoutes();
}

initilization();

function getRoutes() {
    AdminDashboardRoutes.get('/get-dashboard',GlobalMiddlewares.ractifyError,AdminDashboardController.getDashboardData)
}

function postRoutes() {
}

function putRoutes() {
}

module.exports = AdminDashboardRoutes;