const Mongoose = require("mongoose");


const userSchema = new Mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    password: {
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


module.exports = Mongoose.model('User', userSchema);