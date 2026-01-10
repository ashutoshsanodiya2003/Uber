import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {


    const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [captainData, setCaptainData] = useState({});
    
      console.log("User Data Updated:", captainData);
    
      const submitHandler = (e) => {
        e.preventDefault();
    
        setCaptainData({
          email: email,
          password: password,
        });
    
        setEmail("");
        setPassword("");
      };
    
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div className="">
        <img
          className="w-20 mb-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
          alt="Uber Logo"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your email</h3>

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:base"
            required
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:base"
            required
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:base">
            Login
          </button>

          <p className="text-center">
            join a fleet?
            <Link to="/captain-signup" className="text-blue-600">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>

      <div className="">
        <Link to='/login' className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-2 rounded px-4 py-2  w-full text-lg placeholder:base">
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin
