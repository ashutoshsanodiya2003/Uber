import React from "react";

const VehicalPanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0 "
      >
        <i className="text-xl text-gray-800 ri-arrow-down-wide-line"></i>
      </h5>
      {/* Header */}
      <h3 className="text-2xl font-semibold mb-4">Choose a Vehicle</h3>

      {/* Vehicle Card */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex items-center justify-between gap-4 p-3 
                border-2 border-gray-300 rounded-xl cursor-pointer mb-3
                transition-colors duration-200
                active:border-black focus-visible:border-black"
      >
        {/* Image */}
        <img
          className="w-16 h-16 object-contain"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NWEwNTUzOC05MThiLTQyZDgtYWZlNy0zYzkyMzI1ZjJmZDQucG5n"
          alt="UberGo"
        />

        {/* Info */}
        <div className="flex-1">
          <h4 className="font-semibold text-base flex items-center gap-2">
            UberGo
            <span className="flex items-center text-sm text-gray-600">
              <i className="ri-user-3-fill mr-1"></i>4
            </span>
          </h4>
          <h5 className="text-sm text-gray-500">2 mins away</h5>
          <p className="text-xs text-gray-400">Affordable, compact rides</p>
        </div>

        {/* Price */}
        <h2 className="font-semibold text-lg whitespace-nowrap">₹193.20</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex items-center justify-between gap-4 p-3 
                border-2 border-gray-300 rounded-xl cursor-pointer mb-3
                transition-colors duration-200
                active:border-black focus-visible:border-black"
      >
        {/* Image */}
        <img
          className="w-16 h-16 object-contain"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NWEwNTUzOC05MThiLTQyZDgtYWZlNy0zYzkyMzI1ZjJmZDQucG5n"
          alt="UberGo"
        />

        {/* Info */}
        <div className="flex-1">
          <h4 className="font-semibold text-base flex items-center gap-2">
            UberGo
            <span className="flex items-center text-sm text-gray-600">
              <i className="ri-user-3-fill mr-1"></i>4
            </span>
          </h4>
          <h5 className="text-sm text-gray-500">2 mins away</h5>
          <p className="text-xs text-gray-400">Affordable, compact rides</p>
        </div>

        {/* Price */}
        <h2 className="font-semibold text-lg whitespace-nowrap">₹193.20</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex items-center justify-between gap-4 p-3 
                border-2 border-gray-300 rounded-xl cursor-pointer mb-3
                transition-colors duration-200
                active:border-black focus-visible:border-black"
      >
        {/* Image */}
        <img
          className="w-16 h-16 object-contain"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NWEwNTUzOC05MThiLTQyZDgtYWZlNy0zYzkyMzI1ZjJmZDQucG5n"
          alt="UberGo"
        />

        {/* Info */}
        <div className="flex-1">
          <h4 className="font-semibold text-base flex items-center gap-2">
            UberGo
            <span className="flex items-center text-sm text-gray-600">
              <i className="ri-user-3-fill mr-1"></i>4
            </span>
          </h4>
          <h5 className="text-sm text-gray-500">2 mins away</h5>
          <p className="text-xs text-gray-400">Affordable, compact rides</p>
        </div>

        {/* Price */}
        <h2 className="font-semibold text-lg whitespace-nowrap">₹193.20</h2>
      </div>
    </div>
  );
};

export default VehicalPanel;
