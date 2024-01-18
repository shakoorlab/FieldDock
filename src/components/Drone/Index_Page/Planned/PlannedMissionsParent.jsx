import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import NoMissionsPlanned from "./NoMissions";
import PlannedMissionsCard from "./PlannedMissionsCard";

function PlannedMissionsParent() {
  const [missions, setMissions] = useState([]);

  // Polling the REST API
  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetch("http://3.145.131.67:8000/api/missions/");
        const missionsData = await response.json();

        setMissions((currentMissions) => {
          // Create a map of current mission IDs for quick lookup
          const missionIdSet = new Set(currentMissions.map((m) => m.id));

          // Filter out any missions that are already in the state
          const newMissions = missionsData.filter(
            (mission) => !missionIdSet.has(mission.id)
          );

          // Map the new missions to include any additional formatting or properties
          const formattedNewMissions = newMissions.map((mission) => ({
            ...mission,
            date: mission.mission_date || "Date not set",
            duration: mission.duration || "Duration not set",
          }));

          // Return the new state which is the old missions plus any new missions
          return [...currentMissions, ...formattedNewMissions];
        });
      } catch (error) {
        console.error("Failed to fetch missions", error);
      }
    };

    // Initialize the polling
    const intervalId = setInterval(fetchMissions, 5000);

    // Fetch immediately on mount, then continue at the interval
    fetchMissions();

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to ensure this effect is only run on mount and unmount

  return (
    <Box
      className="scrollable-box"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
        height: "430px",
        maxHeight: "430px",
        width: "100%",
        flexShrink: 0,
        marginTop: "15px",
      }}
    >
      {missions.length === 0 ? (
        <NoMissionsPlanned />
      ) : (
        <PlannedMissionsCard missions={missions} />
      )}
    </Box>
  );
}

export default PlannedMissionsParent;
