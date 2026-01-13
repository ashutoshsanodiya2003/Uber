import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100 relative">

  {/* Home Button */}
  <Link
    to="/home"
    className="fixed right-3 top-3 z-20 w-10 h-10 bg-white shadow-lg flex items-center justify-center rounded-full active:scale-95 transition"
  >
    <i className="text-xl text-gray-800 ri-home-4-line"></i>
  </Link>

  {/* Map / Animation */}
  <div className="h-1/2">
    <img
      className="h-full w-full object-cover"
      src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
      alt="map"
    />
  </div>

  {/* Bottom Sheet */}
  <div className="h-1/2 bg-white rounded-t-3xl px-5 pt-4 pb-6 shadow-2xl flex flex-col justify-between">

    {/* Drag Indicator */}
    <div className="w-full flex justify-center mb-4">
      <span className="w-12 h-1.5 bg-gray-300 rounded-full"></span>
    </div>

    <div>
      {/* Driver Info */}
      <div className="flex items-center gap-4 mb-5">
        <img
          src="https://i.pinimg.com/736x/a7/44/bb/a744bb6640c985cf72395ae7c61f3eed.jpg"
          alt="Driver"
          className="w-14 h-14 rounded-full object-cover border"
        />

        <div className="flex-1">
          <h2 className="text-base font-semibold text-gray-800">
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
      <div className="space-y-3">

        <div className="flex gap-4 p-3 bg-gray-50 rounded-xl">
          <i className="text-xl text-red-500 ri-map-pin-line"></i>
          <div>
            <h3 className="text-sm font-medium text-gray-800">
              Drop Location
            </h3>
            <p className="text-sm text-gray-600">
              Chhota Talab, Bhopal
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-3 bg-gray-50 rounded-xl">
          <i className="text-2xl text-green-700 ri-money-rupee-circle-line"></i>
          <div>
            <h3 className="font-semibold text-gray-800">
              ₹193.18
            </h3>
            <p className="text-sm text-gray-600">
              Cash Payment
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* Payment Button */}
    <button className="w-full mt-5 bg-black text-white py-3 rounded-xl text-base font-semibold shadow-md active:scale-95 transition">
      Make a Payment
    </button>

  </div>
</div>

  );
};

export default Riding;
