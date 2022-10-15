const Contact = require("../../model/Contact");
const fast2sms = require('fast-two-sms')

exports.contact = async (req, res, next) => {
    try {
        const { first_name, last_name, phone, email, message } = req.body;
        const contact = new Contact({
            firstName: first_name,
            lastName: last_name,
            phone: phone,
            email: email,
            message: message
        })
        console.log('contact', contact);
        await contact.save()
        res.status(200).send({ status: 200, message: 'Contact detail created', data: {} })
    } catch (error) {
        next(error)
    }
}

exports.sms = async (req, res, next) => {
    try {
        const otp = Math.floor(1000 + Math.random() * 9000)
        var options = {authorization : '0CGdlVYzDtbeX9HOPqp8TkQ4fN751WK2xFjMnrEagZv6BsIALuzAYIdCfFklKOGVbiqS9Ha8UpsNTR0D' , message : `${otp} Otp for civan` ,  numbers : [req.body.phone]} 
        console.log('options',options)
        const response = await fast2sms.sendMessage(options)
      console.log('response',response)
        res.status(200).send({ status: 200, message: 'Message sent successfully', data: response })
    } catch (error) {
        console.log('error',error);
        next(error)
    }
}