import React from "react";

function GrowDegree() {
  function handleHover(e) {
    e.target.style.borderColor = "#e0e0e0";
    e.target.style.color = "orange";
  }

  function handleUnhover(e) {
    e.target.style.borderColor = "orange";
    e.target.style.color = "#e0e0e0";
  }
  return (
    <>
      <div //start date box
        style={{
          border: "1px solid #CCC",
          width: "25%",
          height: "50px",
          display: "inline-block",
          borderRadius: "5px",
          fontSize: "20px",
          marginRight: "10px",
          marginLeft: "20px",
          boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
        }}
      >
        <input
          type="text"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            background: "none",
            color: "#999",
            fontSize: "15px",
            textAlign: "center",
            outline: "none",
          }}
          placeholder="Start Date"
        />
      </div>
      <div //end date box
        style={{
          border: "1px solid #CCC",
          width: "25%",
          height: "50px",
          display: "inline-block",
          borderRadius: "5px",
          marginRight: "10px",
          boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
        }}
      >
        <input
          type="text"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            background: "none",
            color: "#999",
            fontSize: "20px",
            textAlign: "center",
            outline: "none",
            fontSize: "15px",
          }}
          placeholder="End Date"
        />
      </div>
      <div //box for Enter button
        style={{
          width: "25%",
          height: "50px",
          display: "inline-block",
          boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
        }}
      >
        <button
          onMouseOver={handleHover}
          onMouseOut={handleUnhover}
          style={{
            border: "1px solid orange",
            borderRadius: "5px",
            width: "100%",
            height: "100%",
            background: "none",
            color: "#ffffff",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          Enter
        </button>
      </div>
      <div //box for GDD and 000 measurement
        style={{
          width: "25%",
          height: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            color: "#FFF",
            fontSize: "15px",
          }}
        >
          GDD:
        </div>
        <div
          style={{
            color: "#999",
            fontSize: "20px",
          }}
        >
          0"
        </div>
      </div>
    </>
  );
}

export default GrowDegree;
