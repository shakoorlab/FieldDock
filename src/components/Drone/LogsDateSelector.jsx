import React from "react";

function LogsDateSelector() {
  return (
    <>
      <div
        style={{
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div //start date box
          style={{
            border: "1px solid #CCC",
            width: "30%",
            height: "50px",
            display: "inline-block",
            borderRadius: "5px",
            fontSize: "20px",
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
            width: "30%",
            height: "50px",
            display: "inline-block",
            borderRadius: "5px",
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
            border: "1px solid #f59331",
            width: "30%",
            height: "50px",
            display: "inline-block",
            borderRadius: "5px",
            boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
          }}
        >
          <button
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              background: "none",
              color: "#ffffff",
              borderRadius: "10px",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            Logs
          </button>
        </div>
      </div>
    </>
  );
}

export default LogsDateSelector;
