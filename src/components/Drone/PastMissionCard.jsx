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

function PastMissionCard() {
  const missions = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    date: "01/22/2023", // Mock date, replace with actual data
    duration: "1 hr 23 min 2 sec", // Mock duration, replace with actual data
  }));

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
      {missions.map((mission, index) => (
        <Card
          key={mission.id}
          sx={{
            marginTop: "5px",
            width: "95%",
            marginBottom: "15px",
            position: "relative",
            flexShrink: 0,
            boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
            ":hover": {
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", // Change shadow for hover
              transform: "scale(1.03)",
              transition: "transform 0.3s ease-in-out",
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
              right: 8, // Position the button to the top-right corner
              backgroundColor: "#169b40",
              color: "white", // Text color
              fontSize: "0.60rem", // Smaller font size
              fontWeight: "bold", // Bold font
              textTransform: "none", // Prevent uppercase transform
              padding: "4px 8px", // Padding inside the button
            }}
          >
            Complete
          </Button>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              position: "absolute",
              top: 8,
              width: "102%",
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
              alignItems: "flex-start", // Align items to the start (left)
              height: "100%",
              borderRadius: "5px",
              border: "0.5px solid #00e1b4",
              pt: 4, // Adjust padding to make space for the title
              pl: 2, // Padding left to give some space from the card's edge
              pr: 2, // Padding right to give some space from the button
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
      ))}
    </Box>
  );
}

export default PastMissionCard;
