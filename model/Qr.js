const Mongoose = require("mongoose");
const aggregatePaginate = require('mongoose-aggregate-paginate-v2')

const qrSchema = new Mongoose.Schema({
    tag_id: {
        type: String,
    },
    user_id: {
        type: Mongoose.Schema.Types.ObjectId,
        ref:'VehicleOwner',
        default:null
    },
    qr:{
        type:String
    },
    tag_type:{
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

qrSchema.plugin(aggregatePaginate)
module.exports = Mongoose.model('QR', qrSchema);