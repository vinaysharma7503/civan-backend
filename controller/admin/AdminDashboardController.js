const User = require("../../model/User");
const Qr = require("../../model/Qr");
const VehicalOwners = require("../../model/VehicleOwner")

exports.getDashboardData = async (req,res,next)=>{
    try {
        const totalUser = await User.find().countDocuments()
        const totalQr = await Qr.find().countDocuments()
        const totalRegisteredQr = await Qr.find({user_id:{$ne:null}}).countDocuments()
        const totalVehicalOwners = await VehicalOwners.find().countDocuments()
        res.status(200).send({status:200,message:'Dashboard Data',data:{totalUser,totalQr,totalRegisteredQr,totalVehicalOwners}})
    } catch (error) {
        next(error)
    }
}