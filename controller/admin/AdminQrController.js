const Qr = require("../../model/Qr");

exports.getQrList = async (req,res,next)=>{
    try {
        const options={
            page:parseInt(req.query.page)||1,
            limit:parseInt(req.query.limit)||10,
            collation:{
                locale:'en'
            },
            sort:{
                created_on:-1
            }
        }
        let query =[];
        let queryAggregate = Qr.aggregate(query);
        let qrs = await Qr.aggregatePaginate(queryAggregate,options)
        res.status(200).send({status:200,message:'Qr List',data:{qrs}})
    } catch (error) {
        next(error)
    }
}