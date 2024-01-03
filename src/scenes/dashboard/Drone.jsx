import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ExpandMore } from "@mui/icons-material";
import { Box, ListItemIcon } from "@mui/material";

import CommonRow from "../../components/NavBar/NavBar";
import LogsDateSelector from "../../components/Drone/Index_Page/LogsDateSelector";
import DroneNetwork from "../../components/Drone/Index_Page/DroneNetwork";
import PastMissionCard from "../../components/Drone/Index_Page/PastMissionCard";
import PlannedMissionCard from "../../components/Drone/Index_Page/PlannedMissionCard";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import Backdrop from "@mui/material/Backdrop";

import { Stepper, Step, StepLabel } from "@mui/material";
// import EventIcon from "@mui/icons-material/Event";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
// import CheckIcon from "@mui/icons-material/Check";

import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import TextField from "@mui/material/TextField";
// import { StaticDateRangePicker } from "@mui/x-date-pickers-pro";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// import CircularProgress from "@mui/material/CircularProgress";

import "../../CSS/drone.css";
import "../../CSS/sensors.css";
import "../../CSS/settings.css";

function CustomBox({ onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setCurrentStep((prevCurrentStep) => prevCurrentStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCurrentStep(0);
  };

  const steps = [
    {
      label: "Select date and time ",
      description: `Select the date and time for your FieldDock drone mission.  Please remember, you are planning one mission at a time. You will be selecting a date, and a time for the mission to start on that selected date.`,
    },
    {
      label: "Select drone for mission",
      description:
        "Select the drone that you wish to carry out your mission. If your team has less than one drone, the name of your drone should automatically be pre-selected in your menu.",
    },
    {
      label: "Plot mission coordinates",
      description: `Using the FieldDock Mission Planner, you will need to plot your coordinates for your drone's mission. `,
    },
    {
      label: "Finalize your selection",
      description: `As you approach the last step in planning your drone mission, it's crucial to double-check all your details to ensure a successful operation. Take a moment to review the selected date and time, making certain it aligns perfectly with your mission objectives. `,
    },
  ];
  const renderMenuComponent = () => (
    <div style={{ width: "100%" }}>
      <select
        style={{
          border: "1px solid #00e1b4",
          borderRadius: "5px",
          marginTop: "10px",
          height: "35px",
          width: "75%",
          backgroundColor: "transparent",
          color: "#e0e0e0",
          fontWeight: "bold",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block", // Make the select a block element to occupy its own line
        }}
      >
        <option>FieldDock Drone One</option>
        <option>FieldDock Drone Two</option>
        <option>FieldDock Drone Three</option>
      </select>
      <div
        className="drone-svg-container"
        style={{ marginTop: "20px", textAlign: "center" }}
      >
        <img
          src={process.env.PUBLIC_URL + "/assets/drone_diagram_large.svg"}
          alt="Drone"
          className="drone-large-svg"
          style={{ maxWidth: "80%", height: "auto" }} // Ensure the image scales responsively
        />
      </div>
    </div>
  );

  const renderDateAndTimePickers = () => (
    <div style={{ width: "100%" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="customCalendar">
          <DateCalendar showDaysOutsideCurrentMonth views={["day", "month"]} />
        </div>
        <div style={{ display: "flex" }}>
          <TimePicker />
        </div>
      </LocalizationProvider>
    </div>
  );

  return (
    <div
      className="mission-popout-container"
      style={{
        border: "1.5px solid #797979",
        width: "45%",
        background: "#000",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1300,
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
      }}
    >
      <div style={{ display: "flex" }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 0,
            right: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            color: "#00e1b4",
          }}
        >
          x
        </button>
        <Box sx={{ maxWidth: 400, borderRight: "1px solid #797979" }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 3 ? (
                      <Typography
                        sx={{ color: "#00e1b4", fontSize: "13px" }}
                        variant="caption"
                      >
                        Last step
                      </Typography>
                    ) : null
                  }
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography sx={{ fontSize: "1rem" }}>
                    {step.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{
                          mt: 1,
                          mr: 1,
                          background: "#797979",
                          color: "#fff",
                        }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper
              square
              elevation={0}
              sx={{
                p: 3,
                minWidth: 250, // Prevents the Paper from being too narrow
                overflow: "hidden", // Keeps the content within the Paper
                textOverflow: "ellipsis", // Adds an ellipsis for overflowed text
              }}
            >
              <Typography sx={{ fontSize: "1rem" }}>
                All steps completed - your mission has been planned and will be
                scheduled for takeoff when ready.
              </Typography>

              <Button
                onClick={handleReset}
                sx={{ mt: 1, mr: 1, background: "#141b2d", color: "#fff" }}
              >
                New Mission
              </Button>
            </Paper>
          )}
        </Box>
        {currentStep === 0 && renderDateAndTimePickers()}
        {currentStep === 1 && renderMenuComponent()}
      </div>
    </div>
  );
}
function Drone() {
  const [open, setOpen] = useState(false); // State for controlling Backdrop

  const handleToggle = () => {
    setOpen(!open); // Toggle the state to show/hide the Backdrop
  };
  //!delete if need be
  const navigate = useNavigate();

  const navigateToMissionPlanner = () => {
    navigate("/date-mission");
  };

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
      {/* ---------------------------------ROW ONE START-------------------------------- */}
      <Row className="row-one">
        <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4}>
          {/* //!change to something original, not borrowing */}
          {/* Drone Network start */}
          <div className="software-update-box">
            {/* //?borrowing title css from settings.jsx*/}
            <div className="software-update-title">FieldDock Drone Network</div>
            <DroneNetwork />
          </div>
        </Col>
        {/* Drone Network end */}
        {/*  */}
        {/* Menu start */}
        <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4}>
          <Box className="wireless-sensor-menu-parent">
            <div style={{ flex: 1 }}>Select a drone...</div>
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
        {/* Menu end */}
        {/*  */}
        {/* Drone Logs start */}
        <Col xs={2} sm={2} md={2} lg={4} xl={4} xxl={4}>
          <div className="growing-degree-days-parent">
            {/* //?borrowing title css from settings.jsx*/}
            <div className="software-update-title">FieldDock Drone Logs</div>
            <LogsDateSelector />
          </div>
        </Col>
      </Row>
      {/* Drone Logs start */}
      {/* ---------------------------------ROW ONE END -------------------------------- */}
      {/*  */}
      {/* --------------------------------ROW TWO START-------------------------------- */}
      {/*  */}
      {/*  */}
      {/* Past Missions start */}
      <div className="row-two-div">
        <Row>
          <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
            {/* //!change to something original, not borrowing */}
            <div className="plug-and-play-parent">
              {/* //?borrowing title css from settings.jsx*/}
              <div className="software-update-title">Past Missions</div>

              <PastMissionCard />
              <div
                style={{
                  width: "100%",
                  borderTop: "1px solid #FFF",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
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
                    boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
                    width: "40%",
                    marginTop: "25px",
                  }}
                >
                  View
                </button>
              </div>
            </div>
          </Col>
          {/* Past Missions end */}
          {/*  */}
          {/* Drone Status/Rename Drone end */}
          <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
            {/* //! make this a component */}
            <div className="sensor-status-parent">
              {/* //?borrowing title css from settings.jsx*/}
              <div className="software-update-title">Drone Status</div>
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
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <BatteryFullIcon sx={{ mr: 1, color: "green" }} />
                    <span>
                      Battery: <span style={{ color: "#00e1b4" }}>95.48%</span>
                    </span>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <SignalCellularAltIcon sx={{ mr: 1, color: "orange" }} />
                    <span>
                      Signal: <span style={{ color: "#00e1b4" }}>Strong</span>
                    </span>
                  </Box>
                </div>
              </div>
            </div>
            <div className="drone-svg-container">
              <img
                src={process.env.PUBLIC_URL + "/assets/drone_diagram_large.svg"}
                alt="Drone"
                className="drone-large-svg"
              />
            </div>
            <div className="sensor-status-parent">
              {/* //?borrowing title css from settings.jsx*/}
              <div className="software-update-title">Rename This Drone</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <input
                  type="text"
                  placeholder="Rename drone"
                  style={{
                    textAlign: "center",
                    border: "1px solid #797979",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    backgroundColor: "transparent",
                    color: "gray",
                    fontSize: "16px",
                    cursor: "pointer",
                    boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65",
                    width: "70%",
                    marginTop: "25px",
                  }}
                />

                <button
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
                    width: "30%",
                    marginTop: "25px",
                    marginLeft: "15px",
                  }}
                >
                  Rename
                </button>
              </div>
            </div>
          </Col>

          {/* Drone Status/Rename Drone end */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/* Planned Missions start */}
          <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
            {/* //!change to something original, not borrowing */}
            <div className="environmental-conditions-parent">
              {/* //?borrowing title css from settings.jsx*/}
              <div className="software-update-title">Planned Missions</div>
              <PlannedMissionCard />
              <div
                style={{
                  width: "100%",
                  borderTop: "1px solid #FFF",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
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
                    width: "35%",
                    marginTop: "25px",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={handleToggle}
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
                    width: "35%",
                    marginTop: "25px",
                    marginLeft: "40px",
                  }}
                >
                  New
                </button>
                <Backdrop
                  sx={{
                    color: "#fff",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={open}
                >
                  {open && <CustomBox onClose={handleToggle} />}
                  {/* <CircularProgress color="inherit" /> */}
                </Backdrop>
              </div>
            </div>
            {/* Planned Missions end */}
          </Col>
        </Row>
      </div>

      {/* ---------------------------------row 2 end -------------------------------- */}
    </Container>
  );
}

export default Drone;
