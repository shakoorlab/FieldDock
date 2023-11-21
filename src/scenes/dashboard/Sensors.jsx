import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../CSS/sensors.css";
import "../../CSS/settings.css";
import CommonRow from "../../components/NavBar/NavBar";
import { Box, ListItemIcon } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ExpandMore } from "@mui/icons-material";
import { useState, useEffect } from "react";
import Table from "../../components/Sensors/Table";
import Environment from "../../components/Sensors/Environment";

const Sensors = () => {
  return (
    <Container fluid>
      <div>
        <CommonRow />
      </div>
      {/* ---------------------------------row 1  start-------------------------------- */}
      {/* Box 1 start */}
      <Row className="row-one">
        <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4}>
          {/* //!change to something original, not borrowing */}
          <div className="software-update-box">
            {/* //?borrowing title css from settings.jsx*/}
            <div className="software-update-title">Wireless Sensor Network</div>
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
          </div>
        </Col>
        {/* Box 1 end */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* Box 2 (menu) start */}
        <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4}>
          <Box
            className="wireless-sensor-menu-parent"
            style={{
              border: "1px solid #00e1b4",
              padding: "10px",
              position: "relative",
              width: "89%",
              display: "flex",
              justifyContent: "space-between", // This will align children on opposite ends
              alignItems: "center", // This will vertically align children in the middle
              height: "40%",
              borderRadius: "5px",
              flexDirection: "row", // Set direction to row for a side-by-side layout
              marginLeft: "25px",
              fontSize: "18px",
            }}
          >
            <div style={{ flex: 1 }}>Select a sensor...</div>
            <ListItemIcon
              style={{
                display: "flex",
                justifyContent: "flex-end", // Ensures the icon aligns to the right
              }}
            >
              <ExpandMore />
            </ListItemIcon>
          </Box>
        </Col>
        {/* Box 2 (menu) end */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* Box 3 start */}
        <Col xs={2} sm={2} md={2} lg={4} xl={4} xxl={4}>
          <div className="growing-degree-days-parent">
            {/* //?borrowing title css from settings.jsx*/}
            <div className="software-update-title">Growing Degree Days</div>
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
                width: "25%",
                height: "50px",
                display: "inline-block",
                borderRadius: "5px",
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
          </div>
        </Col>
      </Row>
      {/* Box 3 end */}
      {/* ---------------------------------row 1  END -------------------------------- */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* ---------------------------------row 2 start-------------------------------- */}
      {/*  */}
      {/*  */}
      {/* soil table start */}
      <Row>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
          {/* //!change to something original, not borrowing */}
          <div className="plug-and-play-parent">
            {/* //?borrowing title css from settings.jsx*/}
            <div className="software-update-title">Plug and Play Sensor</div>
            <Box
              sx={{
                border: "1px solid #00e1b4",
                borderRadius: "5px",
                padding: "10px",
                display: "flex",
                justifyContent: "space-between", // Distributes space between children
                alignItems: "center",
                height: "30px",
                width: "90%",
                backgroundColor: "transparent",
                fontSize: "1vw",
                marginLeft: "10px",
                marginTop: "15px",
                color: "#fff",
              }}
            >
              <div>Select a sensor...</div>
              <ListItemIcon
                style={{ display: "flex", justifyContent: "right" }}
              >
                <ExpandMore />
              </ListItemIcon>
            </Box>
            <Table />
          </div>
        </Col>
        {/* soil table end */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* sensor image start */}
        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
          <div className="sensor-status-parent">
            {/* //?borrowing title css from settings.jsx*/}
            <div className="software-update-title">Sensor Status</div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "20px",
                  backgroundColor: "#181818",
                  color: "white",
                  fontSize: "18px", // Adjust font size as needed
                  width: "95%",
                }}
              >
                <span>
                  Battery: <span style={{ color: "#00e1b4" }}>00.00%</span>
                </span>
                <span>
                  LoRaNN: <span style={{ color: "#00e1b4" }}>0000</span>
                </span>
              </div>
            </div>
          </div>
          <div className="sensors-svg-container">
            <img
              src={process.env.PUBLIC_URL + "/assets/sensors.svg"}
              alt="Drone"
              className="sensors-large-svg"
            />
          </div>
        </Col>
        {/* sensor image end */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* Environmental conditions start */}
        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
          {/* //!change to something original, not borrowing */}
          <div className="environmental-conditions-parent">
            {/* //?borrowing title css from settings.jsx*/}
            <div className="software-update-title">
              Environmental Conditions
            </div>
            <Environment />
          </div>
        </Col>
      </Row>
      {/* Environmental conditions end */}
      {/* ---------------------------------row 2 end -------------------------------- */}
    </Container>
  );
};

export default Sensors;
