const express = require("express");
const ContactRoutes = require("./app/ContactRouter");
const routes = express.Router();
const QrRouter = require('./app/QrRouter')
const UserRouter = require('./app/UserRoutes')

function initilization() {
    app();
    admin();
}

initilization();

function app() {
    routes.use('/app/qr',QrRouter)
    routes.use('/app/user',UserRouter)
    routes.use('/app/contact',ContactRoutes)
}

function admin() {
    
}

module.exports = routes;