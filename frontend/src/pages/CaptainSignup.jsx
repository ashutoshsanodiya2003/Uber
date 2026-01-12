import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const { captain , setCaptain } = useContext(CaptainDataContext)

  const submitHandler = async(e) => {
    e.preventDefault()

    const captainData = {
      fullname: {
        firstname:firstName,
        lastname:lastName,
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
       vehicleType: vehicleType,
      },
    }

    
const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)

if(response.status === 201){
  const data  = response.data
  setCaptain(data.captain)
  localStorage.setItem('token',data.token)
  console.log("captain registered successfully")

  navigate('/captain-home')
}

    // reset
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
          alt="Uber Logo"
        />
     
        <form onSubmit={submitHandler}>
          {/* Captain Name */}
          <h3 className="text-base font-medium mb-1">
            What's our Captain's name
          </h3>

          <div className="flex gap-3 mb-3">
            <input
              className="bg-[#eeeeee] w-1/2 h-10 rounded px-3 border text-base"
              required
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              className="bg-[#eeeeee] w-1/2 h-10 rounded px-3 border text-base"
              required
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Email */}
          <h3 className="text-base font-medium mb-1">
            What's our Captain's email
          </h3>
          <input
            className="bg-[#eeeeee] h-10 mb-3 rounded px-3 border w-full text-base"
            required
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <h3 className="text-base font-medium mb-1">Enter Password</h3>
          <input
            className="bg-[#eeeeee] h-10 mb-3 rounded px-3 border w-full text-base"
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Vehicle Details */}
          <h3 className="text-base font-medium mb-1">Vehicle Details</h3>

          <div className="flex flex-wrap gap-3 mb-4">
            <input
              className="bg-[#eeeeee] w-[48%] h-10 rounded px-3 border text-base"
              required
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />

            <input
              className="bg-[#eeeeee] w-[48%] h-10 rounded px-3 border text-base"
              required
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />

            <input
              className="bg-[#eeeeee] w-[48%] h-10 rounded px-3 border text-base"
              required
              type="number"
              min="1"
              placeholder="Capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />

            <select
              className="bg-[#eeeeee] w-[48%] h-10 rounded px-3 border text-base"
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
            Create Captain Account
          </button>

          <p className="text-center">
            Already have an account?{' '}
            <Link to="/captain-login" className="text-blue-600">
              Captain Login
            </Link>
          </p>
        </form>
      </div>

      <p className="text-[13px] leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}

export default CaptainSignup
