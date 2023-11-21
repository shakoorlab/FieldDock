import React from "react";

function WirelessSensorNetwork() {
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
        <span>Connected Sensors:</span>
        <span
          style={{
            color: "#00e1b4",
            fontSize: "1.1vw",
          }}
        >
          0 Sensors
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
        <span>Network Status:</span>
        <span
          style={{
            fontSize: "1.1vw",
            color: "#afafaf",
          }}
        >
          <span style={{ color: "red" }}>None Detected</span>
        </span>
      </div>
    </>
  );
}

export default WirelessSensorNetwork;
