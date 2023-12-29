import React from "react";

function DroneNetwork() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "70%", // Set the width of the box to 70% of the parent box
          marginTop: "1rem",
          fontSize: "1.1vw", // dynamic font size based on viewport width
          color: "#afafaf",
        }}
      >
        <span>Connected Drones:</span>
        <span
          style={{
            color: "#00e1b4",
            fontSize: "1.1vw",
          }}
        >
          1 Drone
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "70%",
          marginBottom: "1rem",
          fontSize: "1.1vw",
          color: "#afafaf",
        }}
      >
        <span>Mission Status:</span>
        <span
          style={{
            fontSize: "1.1vw",
            color: "#afafaf",
          }}
        >
          <span style={{ color: "orange" }}>In Flight</span>
        </span>
      </div>
    </>
  );
}

export default DroneNetwork;
