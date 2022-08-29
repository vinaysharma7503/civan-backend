const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { environ } = require("../../environment/env");
const User = require("../../model/User");

exports.userLogin = async (req, res) => {
  try {
    const data = req.body;
    const user = req.userData;
    const isMatched = await bcrypt.compare(data.password, user.password);
    if (isMatched) {
      const token = jwt.sign(
        { _id: user._id, email: user.email },
        environ().jwt_secret
      );
        user.password = null
      res.send({ status: 200, message: "Login successfully", data: { user,token } });
    } else {
      res.send({ status: 401, message: "Invalid email or password", data: {} });
    }
  } catch (error) {
    next(error);
  }
};

exports.userRegistration = async (req, res, next) => {
  try {
    const data = req.body;
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const registration = new User({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      created_on: new Date(),
    });

    const user = await registration.save();
    user.password = null;
    const token = jwt.sign(
      { _id: user._id, email: user.email },
      environ().jwt_secret
    );

    res.send({
      status: 201,
      message: "Add User Successfully",
      data: { user, token },
    });
  } catch (error) {
    next(error);
  }
};
