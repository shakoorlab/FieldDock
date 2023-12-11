import React from "react";
import "../../../CSS/sensors.css";
import "./sensorvisualizer.css";
import { Row } from "react-bootstrap";
import { Box, ListItemIcon } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

function SensorVisualizer() {
  return (
    <div className="visual-container">
      <div className="software-update-title">
        FieldDock Wireless Sensor Data Visualization
      </div>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Box className="vis-sensor-menu-parent">
          <div style={{ flex: 1 }}>Select a sensor...</div>
          <ListItemIcon
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <ExpandMore />
          </ListItemIcon>
        </Box>
      </Row>
      <Row>
        <div className="sensors-vis--svg-container">
          <img
            src={process.env.PUBLIC_URL + "/assets/sensors.svg"}
            alt="Drone"
            className="sensors-vis-large-svg"
          />
        </div>
      </Row>
    </div>
  );
}

export default SensorVisualizer;
