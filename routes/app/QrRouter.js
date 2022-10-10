const express = require("express");
const QrRoutes = express.Router();
const QrController = require('../../controller/app/QrController')
const GlobalMiddlewares = require('../../middlewares/Global_Middlewares')

function initilization() {
    getRoutes();
    postRoutes();
    putRoutes();
}

initilization();

function getRoutes() {
    
}

function postRoutes() {
    QrRoutes.post('/create-qr',GlobalMiddlewares.ractifyError,QrController.createQr)
    QrRoutes.post('/check-qrdata',GlobalMiddlewares.ractifyError,QrController.checkQRRegistered)
}

function putRoutes() {
    QrRoutes.put("/register-vehicle",GlobalMiddlewares.authenticate,GlobalMiddlewares.formDataParser,GlobalMiddlewares.ractifyError,QrController.registerVehicleOwner);
}

module.exports = QrRoutes;