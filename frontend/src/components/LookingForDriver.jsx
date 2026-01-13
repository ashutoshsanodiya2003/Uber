import React from 'react'

const LookingForDriver = (props) => {
  return (
     <div className="relative pb-28">

      {/* Close Button */}
      <h5
  onClick={() => props.setVehicleFound(false)}
  className="w-full flex justify-center mb-2"
>
  <i className="text-2xl text-gray-800 ri-arrow-down-wide-line"></i>
</h5>

      <h3 className="text-2xl font-semibold mb-4 mt-6">
        Looking for a Driver
      </h3>

      <div className="flex justify-center">
        <img
          className="h-20"
          src="https://i.pinimg.com/736x/a7/44/bb/a744bb6640c985cf72395ae7c61f3eed.jpg"
          alt=""
        />
      </div>

      <div className="w-full mt-5">
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="text-lg ri-map-pin-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm -mt-1 text-gray-700">
              Chhota talab , bhopal
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="ri-map-pin-line"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm -mt-1 text-gray-700">
              Chhota talab , bhopal
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 p-3">
          <i className="ri-money-rupee-circle-line"></i>
          <div>
            <h3 className="text-lg font-medium">₹193.18</h3>
            <p className="text-sm -mt-1 text-gray-700">
              Cash
            </p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default LookingForDriver