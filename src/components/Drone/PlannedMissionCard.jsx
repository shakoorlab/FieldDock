import React from "react";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Typography,
  Button,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function PlannedMissionCard() {
  // Mock data for the missions.
  const missions = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    date: "01/22/2023", // Replace with actual date data
    duration: "1 hr 23 min 2 sec", // Replace with actual duration data
  }));

  // Function to determine button label and color
  const getButtonLabelAndColor = (index) => {
    if (index === 0) {
      return { label: "First", color: "green" };
    } else if (index === 1) {
      return { label: "Next", color: "orange" };
    } else {
      return { label: "Planned", color: "#797979" };
    }
  };

  return (
    <Box
      className="scrollable-box"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
        maxHeight: "430px",
        width: "100%",
        flexShrink: 0,
        marginTop: "15px",
      }}
    >
      {missions.map((mission, index) => {
        const { label, color } = getButtonLabelAndColor(index);
        return (
          <Card
            key={mission.id}
            sx={{
              width: "95%",
              marginTop: "5px",
              marginBottom: "15px",
              position: "relative",
              flexShrink: 0,
              boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
              ":hover": {
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", // Change shadow for hover
                transform: "scale(1.03)", // Slight increase in scale
                transition: "transform 0.3s ease-in-out", // Smooth transition for transform
              },
            }}
          >
            <Checkbox
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
            <Button
              variant="contained"
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: color,
                "&:hover": {
                  backgroundColor: color,
                  opacity: 0.9,
                },
                color: "white",
                fontSize: "0.60rem",
                fontWeight: "bold",
                textTransform: "none",
                padding: "4px 8px",
              }}
            >
              {label}
            </Button>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                position: "absolute",
                top: 8,
                width: "100%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              FieldDock Mission: {index + 1}
            </Typography>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                height: "100%",
                borderRadius: "5px",
                border: "0.5px solid #00e1b4",
                pt: 4,
                pl: 2,
                pr: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mt: "20px" }}>
                <EventIcon sx={{ mr: 1 }} />{" "}
                {/* Calendar icon with right margin */}
                <Typography variant="body1">Date: {mission.date}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: "5px" }}>
                <AccessTimeIcon sx={{ mr: 1 }} />{" "}
                {/* Time icon with right margin */}
                <Typography variant="body1">
                  Duration: {mission.duration}
                </Typography>
              </Box>
              {/* Additional content could be added here */}
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}

export default PlannedMissionCard;
