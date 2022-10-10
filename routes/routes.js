const express = require("express");
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
}

function admin() {
    
}

module.exports = routes;