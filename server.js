require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const environ = require('./environment/env');
const Routes = require('./routes/routes')

function initilization() {
    setupCors()
    setUpDatabase();
    setupBodyParser();
    setUpRoutes();
    setupError404Handler();
    setupErrorHandler();
}

initilization();

function setupCors(){
    app.use(cors({
        origin:true,
        credentials:true
    }))
}

function setupBodyParser() {
    app.use(express.urlencoded({ extended: true })); //in methods always use colons
    app.use(express.json());
}

function setUpDatabase() {
    let env = environ.environ();
    mongoose.connect(env.db_root)
        .then((r) => {
            console.log("Database connected Successfully");
        }).catch((err) => {
            console.log(err);
        });
}

function setUpRoutes() {
    app.use('/api/v1', Routes);
}

function setupError404Handler() {
    app.use((req, res) => {
        res.status(404).json({
            msg: 'NOT FOUND',
            status: 404,
            data:{}
        });
    });
}

function setupErrorHandler() {
    app.use((err, req, res, next) => {
        res.status(500).json({
            msg: err.message || "Something went wrong. Please try again later",
            status: 500,
            data:{}
        });
    });
}
module.exports = app;