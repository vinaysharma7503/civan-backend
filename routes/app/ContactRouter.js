const express = require("express");
const ContactController = require("../../controller/app/ContactController");
const ContactRoutes = express.Router();
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
    ContactRoutes.post('/create-contact',GlobalMiddlewares.authenticate,GlobalMiddlewares.ractifyError,ContactController.contact)
    // ContactRoutes.post('/send-sms',GlobalMiddlewares.ractifyError,ContactController.sms)
}

function putRoutes() {
}

module.exports = ContactRoutes;