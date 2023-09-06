const Contact = require("../../model/Contact");
// const fast2sms = require('fast-two-sms');
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

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

// exports.sms = async (req, res, next) => {
//     try {
//         const otp = Math.floor(1000 + Math.random() * 9000)
//         // var options = {authorization : '0CGdlVYzDtbeX9HOPqp8TkQ4fN751WK2xFjMnrEagZv6BsIALuzAYIdCfFklKOGVbiqS9Ha8UpsNTR0D' , message : `${otp} Otp for civan` ,  numbers : [req.body.phone]} 
//         // console.log('options',options)
//         // const response = await fast2sms.sendMessage(options)
//         const response = await client.messages
//         .create({
//            body: `Welcome to Civan! Your verification code is ${otp}`,
//            from: '+15017122661',
//            to: '+15558675310'
//          })
//         // .then(message => console.log(message.sid));
//       console.log('response',response)
//         res.status(200).send({ status: 200, message: 'Message sent successfully', data: response })
//     } catch (error) {
//         console.log('error',error);
//         next(error)
//     }
// }