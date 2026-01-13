import React from 'react'

const WaitingForDriver = (props) => {
  return (
   <div className="relative bg-white rounded-t-3xl shadow-2xl pb-28 px-5 pt-4">

  {/* Close Button (h5 kept) */}
  <h5
    onClick={() => props.waitingForDriver(false)}
    className="w-full flex justify-center mb-4 cursor-pointer"
  >
    <i className="text-2xl text-gray-400 ri-arrow-down-wide-line"></i>
  </h5>

  {/* Driver Info */}
  <div className="flex items-center justify-between mb-6">
    <img
      src="https://i.pinimg.com/736x/a7/44/bb/a744bb6640c985cf72395ae7c61f3eed.jpg"
      alt="Driver"
      className="w-16 h-16 rounded-full object-cover border"
    />

    <div>
      <h2 className="text-lg font-semibold text-gray-800">
        Ashutosh Sanodiya
      </h2>
      <p className="text-sm text-gray-600">
        Maruti Suzuki Alto
      </p>
      <span className="text-xs text-gray-500">
        MP 28 CC 7515
      </span>
    </div>
  </div>

  {/* Ride Details */}
  <div className="space-y-4">

    <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
      <i className="text-xl text-green-600 ri-map-pin-fill"></i>
      <div>
        <h3 className="font-medium text-gray-800">562/11-A</h3>
        <p className="text-sm text-gray-600">
          Chhota Talab, Bhopal
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
      <i className="text-xl text-red-500 ri-map-pin-line"></i>
      <div>
        <h3 className="font-medium text-gray-800">562/11-A</h3>
        <p className="text-sm text-gray-600">
          Chhota Talab, Bhopal
        </p>
      </div>
    </div>

    <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
      <i className="text-2xl text-green-700 ri-money-rupee-circle-line"></i>
      <div>
        <h3 className="font-semibold text-gray-800">₹193.18</h3>
        <p className="text-sm text-gray-600">Cash Payment</p>
      </div>
    </div>

  </div>
</div>

  )
}

export default WaitingForDriver