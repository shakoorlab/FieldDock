import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../CSS/sensors.css";
import "../../CSS/settings.css";
import CommonRow from "../../components/NavBar/NavBar";
import { Box, ListItemIcon } from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ExpandMore } from "@mui/icons-material";
import Table from "../../components/Sensors/Table";
import Environment from "../../components/Sensors/Environment";
import GrowDegree from "../../components/Sensors/GrowDegree";
import WirelessSensorNetwork from "../../components/Sensors/WirelessSensorNetwork";
import SensorVisualizer from "../../components/Visualizations/Sensor/SensorVisualizer";

const Sensors = () => {
  // for smooth page scroll to Sensor Visualizing component
  const [showVisualizer, setShowVisualizer] = useState(false);

  const handleButtonClick = () => {
    setShowVisualizer(true);
    setTimeout(() => {
      scroll.scrollToBottom({
        duration: 1,
        delay: 0,
        smooth: "linear",
      });
    }, 0);
  };
  // for smooth page scroll to Sensor Visualizing component
  //
  //
  //----------for buttom hover effect
  function handleHover(e) {
    e.target.style.borderColor = "#00e1b4";
    e.target.style.color = "orange";
  }

  function handleUnhover(e) {
    e.target.style.borderColor = "orange";
    e.target.style.color = "#e0e0e0";
  }
  //----------for buttom hover effect
  //
  //
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
            <WirelessSensorNetwork />
          </div>
        </Col>
        {/* Box 1 end */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* Box 2 (menu) start */}
        <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4}>
          <Box className="wireless-sensor-menu-parent">
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
            <GrowDegree />
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
      <div className="row-two-div">
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
                  boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
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
                    LoRaWAN: <span style={{ color: "#00e1b4" }}>0000</span>
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                onClick={handleButtonClick}
                onMouseOver={handleHover}
                onMouseOut={handleUnhover}
                style={{
                  border: "1px solid orange",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  backgroundColor: "transparent",
                  color: "#FFF",
                  fontSize: "16px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65",
                  width: "40%",
                }}
              >
                Live Data
              </button>
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
        <Row>{showVisualizer && <SensorVisualizer />}</Row>
      </div>
      {/* Environmental conditions end */}

      {/* ---------------------------------row 2 end -------------------------------- */}
    </Container>
  );
};

export default Sensors;
