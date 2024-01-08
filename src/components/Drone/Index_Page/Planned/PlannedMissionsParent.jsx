import React from "react";
import { Box } from "@mui/material";
import NoMissionsPlanned from "./NoMissions";
// import PlannedMissionsCard from "./PlannedMissionsCard";

function PlannedMissionsParent() {
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
        opacity: "30%",
      }}
    >
      <NoMissionsPlanned />
    </Box>
  );
}

export default PlannedMissionsParent;
