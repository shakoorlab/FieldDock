import React from "react";
import { Box, Card, CardContent, Checkbox, Typography } from "@mui/material";

function PlannedMissionCard() {
  const missions = Array.from({ length: 10 }, (index) => ({
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
            width: "95%",
            marginRight: "18px",
            marginBottom: "20px",
            position: "relative",
            flexShrink: 0,
            boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
          }}
        >
          <Checkbox
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              position: "absolute",
              top: 8,
              width: "109%",
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
            }}
          >
            <Typography
              sx={{
                alignSelf: "flex-start", // Align to the start (left)
                mt: "20px", // Add margin to the top to push it below the title
                width: "100%", // Take the full width
              }}
              variant="body1"
            >
              Date: {mission.date}
            </Typography>
            <Typography
              sx={{
                alignSelf: "flex-start", // Align to the start (left)
                mt: "5px", // Add margin to the top to stack it below the date
                width: "100%", // Take the full width
              }}
              variant="body1"
            >
              Duration: {mission.duration}
            </Typography>
            {/* Add more content here if necessary */}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default PlannedMissionCard;
