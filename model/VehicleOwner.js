const Mongoose = require("mongoose");


const vehicleOwnerSchema = new Mongoose.Schema({
    profile:{
        type:String
    },
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
    },
    primary_phone: {
        type: Number,
    },
    alternate_phone: {
        type: Number,
    },
    vehicle_type:{
        type:String
    },
    vehicle_number:{
        type:String
    },
    society:{
        type:String
    },
    title:{
        type:String
    },
    sub_category:{
        type:String
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


module.exports = Mongoose.model('VehicleOwner', vehicleOwnerSchema);