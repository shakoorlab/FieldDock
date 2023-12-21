import React, { useState } from "react";
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
  const [checkedState, setCheckedState] = useState({}); // State to keep track of checked cards

  const handleCheck = (id) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

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
      {missions.map((mission) => {
        const isChecked = checkedState[mission.id] || false;

        return (
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
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                transform: "scale(1.03)",
                transition: "transform 0.3s ease-in-out",
              },
              ...(isChecked && {
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                transform: "scale(1.03)",
              }),
            }}
          >
            <Checkbox
              checked={isChecked}
              onChange={() => handleCheck(mission.id)}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                "&.Mui-checked": {
                  color: "#00e1b4",
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: "#169b40",
                "&:hover": {
                  backgroundColor: "#138336",
                },
                color: "white",
                fontSize: "0.60rem",
                fontWeight: "bold",
                textTransform: "none",
                padding: "4px 8px",
              }}
            >
              Complete
            </Button>
            <Typography
              variant="h5"
              component="div"
              sx={{
                position: "absolute",
                top: 9,
                width: "60%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              FieldDock Mission: {mission.id + 1}
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
                <EventIcon sx={{ mr: 1 }} />
                <Typography variant="body1">Date: {mission.date}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: "5px" }}>
                <AccessTimeIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  Duration: {mission.duration}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}

export default PastMissionCard;
