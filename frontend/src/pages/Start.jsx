import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div
      className="h-screen pt-8 flex justify-between flex-col w-full
                 bg-[url('https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=764&auto=format&fit=crop')]
                 bg-cover bg-center"
    >
      <img
        className="w-16 ml-9"
        src="https://1000logos.net/wp-content/uploads/2021/04/Uber-logo.png"
        alt="Uber Logo"
      />

      <div className="bg-white py-4 px-4">
        <h2 className="text-3xl font-bold">Get Started with Uber</h2>
        <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">
          Continue
        </Link>
      </div>
    </div>
  )
}

export default Start
