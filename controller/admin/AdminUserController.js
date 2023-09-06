const User = require("../../model/User");

exports.getUserList = async (req,res,next)=>{
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
        let queryAggregate = User.aggregate(query);
        let users = await User.aggregatePaginate(queryAggregate,options)
        res.status(200).send({status:200,message:'Users List',data:{users}})
    } catch (error) {
        next(error)
    }
}