const express = require("express");
const ContactRoutes = require("./app/ContactRouter");
const routes = express.Router();
const QrRouter = require('./app/QrRouter')
const UserRouter = require('./app/UserRoutes')
const AdminUserRouter = require('./admin/AdminUserRoutes')
const AdminQrRouter = require('./admin/AdminQrRoutes')
const AdminDashboardRouter = require('./admin/AdminDashboardRoutes')

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
    routes.use('/admin/user',AdminUserRouter)
    routes.use('/admin/qr',AdminQrRouter)
    routes.use('/admin/dashboard',AdminDashboardRouter)
}

module.exports = routes;