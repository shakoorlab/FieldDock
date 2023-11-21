import React from "react";
import { Box } from "@mui/material";
import "./environment.css";

function Environment() {
  return (
    <>
      <Box
        style={{
          borderTop: "1px solid #3898EC",
          width: "85%",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          marginTop: "30px",
          marginLeft: "27px",
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: "-18px",
            left: "50%",
            transform: "translateX(-46%)",
            backgroundColor: "#181818",
            padding: "0 7px",
            zIndex: 1,
            fontSize: "20px",
          }}
        >
          Wind
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            fontSize: "18px",
            marginRight: "25px",
          }}
        >
          <Box style={{ textAlign: "center" }}>
            <div
              style={{
                color: "#e8e8e8", // Add  color here
              }}
            >
              Direction
            </div>
            <div
              style={{
                color: "#00e1b4", // Add  color here
              }}
            >
              20° N
            </div>
          </Box>
          <Box style={{ textAlign: "center" }}>
            <div
              style={{
                color: "#e8e8e8",
              }}
            >
              Wind Speed
            </div>
            <div
              style={{
                color: "#00e1b4",
              }}
            >
              18 mph
              {/* wind speed code above */}
            </div>
          </Box>
          <Box style={{ textAlign: "center" }}>
            <div
              style={{
                color: "#e8e8e8", // Add  color here
              }}
            >
              Gust
            </div>
            <div
              style={{
                color: "#00e1b4", // Add  color here
              }}
            >
              {" "}
              N/A
            </div>
          </Box>
        </Box>
      </Box>
      <Box
        className="scrollable-box"
        style={{ overflow: "auto", maxHeight: "380px", padding: "10px" }}
      >
        <Box
          style={{
            borderTop: "1px solid #f59331",
            width: "85%",
            height: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            marginLeft: "27px",
            marginTop: "5px",
          }}
        >
          <Box
            style={{
              position: "absolute",
              top: "-18px",
              left: "50%",
              transform: "translateX(-46%)",
              backgroundColor: "#181818",
              padding: "0 7px",
              zIndex: 1,
              fontSize: "20px",
            }}
          >
            Module (1)
          </Box>
          <Box
            style={{
              textAlign: "center",
              flex: 1,
              fontSize: "18px",
              marginTop: "40px",
            }}
          >
            <div style={{ color: "#e8e8e8" }}>Temperature</div>
            <div style={{ color: "#00e1b4" }}>60°F</div>
            <div style={{ color: "#ff0000" }}>00.00°C</div>
            <div style={{ color: "#e8e8e8" }}>Visibility</div>
            <div style={{ color: "#00e1b4" }}>5 m</div>
          </Box>
          <Box
            style={{
              textAlign: "center",
              flex: 1,
              fontSize: "18px",
              marginTop: "40px",
            }}
          >
            <div style={{ color: "#e8e8e8" }}>Humidity</div>
            <div style={{ color: "#00e1b4" }}>5%</div>
            <div style={{ color: "#ff0000" }}>-</div>
            <div style={{ color: "#e8e8e8" }}>UV Index</div>
            <div style={{ color: "#ff0000" }}>4</div>
          </Box>
          <Box
            style={{
              textAlign: "center",
              flex: 1,
              fontSize: "18px",
              marginTop: "40px",
            }}
          >
            <div style={{ color: "#e8e8e8" }}>Air Pressure</div>
            <div style={{ color: "#00e1b4" }}>6 kPa</div>
            <div style={{ color: "#ff0000" }}>00.00"</div>
            <div style={{ color: "#e8e8e8" }}>Conditions</div>
            <div style={{ color: "#00e1b4" }}>Cloudy</div>
          </Box>
        </Box>
        <Box
          style={{
            borderTop: "1px solid #f59331",
            width: "85%",
            height: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            marginLeft: "27px",
            marginTop: "40px",
          }}
        >
          <Box
            style={{
              position: "absolute",
              top: "-18px",
              left: "50%",
              transform: "translateX(-46%)",
              backgroundColor: "#181818",
              padding: "0 7px",
              zIndex: 1,
              fontSize: "20px",
            }}
          >
            Module (2)
          </Box>
          <Box
            style={{
              textAlign: "center",
              flex: 1,
              fontSize: "18px",
              marginTop: "40px",
            }}
          >
            <div style={{ color: "#e8e8e8" }}>Temperature</div>
            <div style={{ color: "#00e1b4" }}>°F</div>
            <div style={{ color: "#ff0000" }}>00.00°C</div>
            <div style={{ color: "#e8e8e8" }}>Visibility</div>
            <div style={{ color: "#00e1b4" }}>m</div>
          </Box>
          <Box
            style={{
              textAlign: "center",
              flex: 1,
              fontSize: "18px",
              marginTop: "40px",
            }}
          >
            <div style={{ color: "#e8e8e8" }}>Humidity</div>
            <div style={{ color: "#00e1b4" }}>%</div>
            <div style={{ color: "#ff0000" }}>-</div>
            <div style={{ color: "#e8e8e8" }}>UV Index</div>
            <div style={{ color: "#ff0000" }}>4</div>
          </Box>
          <Box
            style={{
              textAlign: "center",
              flex: 1,
              fontSize: "18px",
              marginTop: "40px",
            }}
          >
            <div style={{ color: "#e8e8e8" }}>Air Pressure</div>
            <div style={{ color: "#00e1b4" }}>kPa</div>
            <div style={{ color: "#ff0000" }}>00.00"</div>
            <div style={{ color: "#e8e8e8" }}>Conditions</div>
            <div style={{ color: "#00e1b4" }}>N/A</div>
          </Box>
        </Box>
        <Box
          style={{
            borderTop: "1px solid #f59331",
            width: "85%",
            height: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            marginLeft: "27px",
            marginTop: "40px",
          }}
        >
          <Box
            style={{
              position: "absolute",
              top: "-18px",
              left: "50%",
              transform: "translateX(-46%)",
              backgroundColor: "#181818",
              padding: "0 7px",
              zIndex: 1,
              fontSize: "20px",
            }}
          >
            Module (3)
          </Box>
          <Box
            style={{
              textAlign: "center",
              flex: 1,
              fontSize: "18px",
              marginTop: "40px",
            }}
          >
            <div style={{ color: "#e8e8e8" }}>Temperature</div>
            <div style={{ color: "#00e1b4" }}>°F</div>
            <div style={{ color: "#ff0000" }}>00.00°C</div>
            <div style={{ color: "#e8e8e8" }}>Visibility</div>
            <div style={{ color: "#00e1b4" }}>m</div>
          </Box>
          <Box
            style={{
              textAlign: "center",
              flex: 1,
              fontSize: "18px",
              marginTop: "40px",
            }}
          >
            <div style={{ color: "#e8e8e8" }}>Humidity</div>
            <div style={{ color: "#00e1b4" }}>%</div>
            <div style={{ color: "#ff0000" }}>-</div>
            <div style={{ color: "#e8e8e8" }}>UV Index</div>
            <div style={{ color: "#ff0000" }}>4</div>
          </Box>
          <Box
            style={{
              textAlign: "center",
              flex: 1,
              fontSize: "18px",
              marginTop: "40px",
            }}
          >
            <div style={{ color: "#e8e8e8" }}>Air Pressure</div>
            <div style={{ color: "#00e1b4" }}>kPa</div>
            <div style={{ color: "#ff0000" }}>00.00"</div>
            <div style={{ color: "#e8e8e8" }}>Conditions</div>
            <div style={{ color: "#00e1b4" }}>N/A</div>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Environment;
