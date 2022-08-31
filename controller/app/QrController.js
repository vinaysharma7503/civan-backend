const QRCode = require("qrcode");
const Qr = require("../../model/Qr");
const ShortUniqueId = require("short-unique-id");
const VehicleOwner = require("../../model/VehicleOwner");

exports.createQr = async(req,res,next)=>{
    try {
        let qr = [];
        // Creating the data
        for (let index = 0; index < req.body.quantity; index++) {
          const uid = new ShortUniqueId({ length: 4 });
          let data = {
            url: "https://civantechnologies.herokuapp.com/login",
            tag_id: 'Civan'+uid(),
          };
    
          // Converting the data into String format
          let stringdata = JSON.stringify(data);
          // Print the QR code to terminal
          QRCode.toString(stringdata, { type: "terminal" }, async (err, QRcode) => {
            if (err) return console.log("error occurred",err);
    
            const name = data.tag_id;
    
            QRCode.toFile("images/" + name + ".png", stringdata, {
              width: 500,
              color: {
                dark: "#00F",
                light: "#0000",
              },
            });
            // Printing the generated code
            // console.log(QRcode);
          });
          // Converting the data into base64
          const code = await QRCode.toDataURL(stringdata);
          // console.log("code", code);
          const qrData = new Qr({
            tag_id: data.tag_id,
            qr: code,
            tag_type: "VEHICLESOCIETY",
          });
          const qrCode = await qrData.save();
          qr.push(qrCode);
        }
        res.status(201).send({
          status: 201,
          message: "QR Code Generated Successfully",
          data: { qr },
        });

    } catch (error) {
        next(error)
    }
}

exports.checkQRRegistered = async (req, res, next) => {
    try {
      const qr = await Qr.findOne({ tag_id: req.body.tag_id });
      if (qr === null) {
        res.status(400).send({
          status: 400,
          message: "Invalid tag id.",
          data: {},
        });
      }
      else if (qr.user_id === null) {
        res.status(200).send({
          status: 200,
          message: "This tag is not registered yet.",
          data: qr,
        });
      } else {
        const qrData = await Qr.findOne({ tag_id: req.body.tag_id }).populate(
          "user_id"
        );
        res.status(200).send({
          status: 200,
          message: "This tag is registered.",
          data: qrData,
        });
      }
    } catch (error) {
      next(error);
    }
  };
  
  exports.registerVehicleOwner=async(req,res,next)=>{
    try {
      const qr = await Qr.findOne({ tag_id: req.body.tag_id });
      const vehicleOwner = new VehicleOwner({
        profile:'',
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        primary_phone:req.body.primary_phone,
        alternate_phone:req.body.alternate_phone,
        title:req.body.title,
        sub_category:req.body.sub_category,
        vehicle_type:req.body.vehicle_type,
        vehicle_number:req.body.vehicle_number,
        society:req.body.society
      });
       const user = await vehicleOwner.save();
       qr.user_id = user._id
       await qr.save();
       res.status(201).send({
        status: 201,
        message: "User registered.",
        data: {},
      });
    } catch (error) {
      next(error)
    }
  }