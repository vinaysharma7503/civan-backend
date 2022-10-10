const Contact = require("../../model/Contact");

exports.contact=async(req,res,next)=>{
    try {
        const {first_name,last_name,phone,email,message} = req.body;
        const contact = new Contact({
            firstName:first_name,
            lastName:last_name,
            phone:phone,
            email:email,
            message:message
        })
        console.log('contact',contact);
        await contact.save()
        res.status(200).send({status:200,message:'Contact detail created',data:{}})
    } catch (error) {
        next(error)
    }
}