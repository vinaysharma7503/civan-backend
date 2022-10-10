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
    ContactRoutes.post('/create-contact',GlobalMiddlewares.ractifyError,ContactController.contact)
}

function putRoutes() {
}

module.exports = ContactRoutes;