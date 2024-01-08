import React, { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import { Box } from "@mui/material";
// import EventIcon from "@mui/icons-material/Event";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
// import CheckIcon from "@mui/icons-material/Check";

import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TimeDatePickers from "./DateTimePickers";
import DroneChoice from "./DroneChoice";
import CoordinatesPlotting from "./CoordinatesPlotting";

function MissionPlanSteps({ onClose }) {
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

  return (
    <div
      className="mission-popout-container"
      style={{
        border: "1.5px solid #797979",
        width: "55%", //!On bigger screens, make this number 45%
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
        {currentStep === 0 && <TimeDatePickers />}
        {currentStep === 1 && <DroneChoice />}
        {currentStep === 2 && <CoordinatesPlotting />}
      </div>
    </div>
  );
}

export default MissionPlanSteps;
