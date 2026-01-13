import React from "react";

const LocationSearchPanel = (props) => {
  console.log(props);

  const locations = [
    "25B, Near Kapoor's Cafe, Sheryians Coding School",
    "24C, Near Sharma's Cafe, Sheryians Coding School",
    "21B, Near Kapoor's Cafe, Sheryians Coding School",
    "24D, Near Kapoor's Cafe, Sheryians Coding School",
  ];

  return (
    <div>
      {locations.map((elem, index) => {
        return (
          <div
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            key={index}
            className="flex items-center gap-3 my-2 p-2 
                       border border-white active:border-black 
                       rounded-xl justify-start cursor-pointer"
          >
            <i className="ri-map-pin-2-line text-lg"></i>
            <p className="font-medium text-sm leading-tight">{elem}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
