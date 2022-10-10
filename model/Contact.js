const Mongoose = require("mongoose");


const contactSchema = new Mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    message: {
        type: String,
    },
    created_on: {
        type: Date,
        default:Date.now
    },
    updated_on: {
        type: Date,
        default:Date.now
    },

});


module.exports = Mongoose.model('Contact', contactSchema);