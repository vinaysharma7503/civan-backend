const express = require("express");
const AdminQrRoutes = express.Router();
const AdminQrController = require('../../controller/admin/AdminQrController')
const GlobalMiddlewares = require('../../middlewares/Global_Middlewares')

function initilization() {
    getRoutes();
    postRoutes();
    putRoutes();
}

initilization();

function getRoutes() {
    AdminQrRoutes.get('/get-qr-list',GlobalMiddlewares.ractifyError,AdminQrController.getQrList)
}

function postRoutes() {
}

function putRoutes() {
}

module.exports = AdminQrRoutes;