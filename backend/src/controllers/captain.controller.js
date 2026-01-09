const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');

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
      vehicleType: vehicle.vehicleType
    });

    // 6️⃣ Generate token
    const token = captain.generateAuthToken();

    // 7️⃣ Send response
    res.status(201).json({
      token,
      captain,
      message: 'Captain registered successfully'
    });

  } catch (err) {
    next(err); // Pass errors to Express error handler
  }
};
