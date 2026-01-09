const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");


module.exports.registerCaptain = async (req, res, next) => {
  try {
    // 1️⃣ Validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // 2️⃣ Extract body
    const { fullname, email, password, vehicle } = req.body;

    // 3️⃣ Check if captain exists
    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
      return res.status(400).json({ message: "Captain already exists" });
    }

    // 4️⃣ Hash password
    const hashPassword = await captainModel.hashPassword(password);

    // 5️⃣ Create captain
    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    // 6️⃣ Generate token
    const token = captain.generateAuthToken();

    // 7️⃣ Send response
    res.status(201).json({
      token,
      captain,
      message: "Captain registered successfully",
    });
  } catch (err) {
    next(err); // Pass errors to Express error handler
  }
};

module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const { email, password } = req.body;

  const captain = await captainModel.findOne({email,}).select("+password");

  if(!captain){
    return res.status(401).json({
      message:"Invalid email or password"
    })
  }

  const isMatch = await captain.comparePassword(password)

  if(!isMatch){
    return res.status(401).json({
    message:"Invalid email or password"
    })
  }

  const token = captain.generateAuthToken()

  res.cookie('token',token)

  res.status(200).json({
    token,captain
  })

};

module.exports.getCaptainProfile = async(req,res,next)=>{
  res.status(200).json({
    captain:req.captain
  })
}


module.exports.logoutCaptain = async(req,res,next)=>{

  const token = req.cookies.token||req.headers.authorization?.split(' ')[ 1 ]

  await blacklistTokenModel.create({token})
  res.clearCookie('token')

  res.status(200).json({
message:"log out successfully"
  })
}

