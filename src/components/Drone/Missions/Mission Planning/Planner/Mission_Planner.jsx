import "./Mission_Planner.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import CommonRow from "../../../../NavBar/NavBar";
import LatLongTable from "../Table/LatLongTable";
import MapComponent from "../Map/Map";
import { createMission } from "../Waypoint Configuration/Launch";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure to install axios if you haven't

//!YOU HAVE LOGIC THAT YOU STARTED FOR BREAKING THE BELOW INTO COMPONENTS IN THE TOOLS/BUTTONS/MISSION PLANNING
//! REMEMBER FOR "DATA" IN THE 'handleButtonClick' BELOW, IT MIGHT BE THE FUNCTION FARTHER DOWN BELOW "const [data, setData] = useState([" OR IT MIGHT BE COMING FROM LAUNCH.JS.  AS OF SEPTEMBER 22 NOT SURE
//! REFACTOR CODE YOU HAVE TO TRY BOTH
function Mission_Planner() {
  const navigate = useNavigate(); // Navigation hook from react-router-dom

  const navToLaunchTest = () => {
    navigate("/live_stats");
  };
  const handleButtonClick = async () => {
    const missionString = createMission(data); // Assuming this function creates the mission data

    try {
      const response = await axios.post("http://localhost:3001/launch", {
        missionData: missionString,
      });

      // Check the HTTP status code for potential server errors
      if (response.status !== 200) {
        console.error("Server returned an error:", response.data.message);
        return; // Exit the function early since an error occurred
      }

      // Check the "success" flag within the response data
      if (response.data.success) {
        console.log(response.data.message); // Display the server's success message
        navigate("/live_stats"); // Navigate only if publish was successful
      } else {
        console.error("Failed to publish the mission:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      console.error("Error sending the mission to the server:", error);
    }
  };

  //-------------------------------------------------------------------------------------------------
  // for button colors
  function handleHover(e) {
    e.target.style.borderColor = "#00e1b4";
    e.target.style.color = "orange";
  }

  function handleUnhover(e) {
    e.target.style.borderColor = "orange";
    e.target.style.color = "#e0e0e0";
  }

  function handleHover1(e) {
    e.target.style.borderColor = "#e0e0e0";
    e.target.style.color = "orange";
  }

  function handleUnhover1(e) {
    e.target.style.borderColor = "orange";
    e.target.style.color = "#e0e0e0";
  }
  //
  //-------------------------------------------------------------------------------------------------
  //
  //
  //
  //-------------------------------------------------------------------------------------------------
  // this is the logic for the table and marker placement.  The table is initiliazed to start how it looks below
  // from there, the rest of the logic shown below is for when the user clicks on the map, a marker is displayed, and the coordinates
  // that correspond to these markers, are updated into the table.
  //! this is the 'data' code I am talking about above
  const [data, setData] = useState([
    {
      id: 1,
      command: "",
      p1: "0",
      p2: "0",
      p3: "0",
      p4: "0",
      latitude: "",
      longitude: "",
      alt: "",
      frame: "",
      grad: "",
      angle: "",
      dist: "",
      az: "",
    },
  ]);

  const [markerPositions, setMarkerPositions] = useState([]);

  const onMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    setData((oldData) => {
      const newData = [...oldData];
      const firstRow = newData[0];

      // If the first row is empty, populate it with the coordinates of the marker
      if (firstRow.latitude === "" && firstRow.longitude === "") {
        firstRow.latitude = lat;
        firstRow.longitude = lng;
      }
      // If the first row is not empty, create a new row
      else {
        newData.push({
          id: newData.length + 1,
          command: "",
          p1: "0",
          p2: "0",
          p3: "0",
          p4: "0",
          latitude: lat,
          longitude: lng,
          alt: "",
          frame: "",
        });
      }

      return newData;
    });

    setMarkerPositions((oldMarkerPositions) => [
      ...oldMarkerPositions,
      { lat, lng },
    ]);
  };
  //-------------------------------------------------------------------------------------------------
  //
  //
  //
  //-------------------------------------------------------------------------------------------------
  // Defining two pieces of state to be stored when the user types in a home location, so it can be displayed in the "Home Location" box
  // You'll need to manage the state of these two fields and update them when the home location changes.
  // You'll need to update these state variables when the home location changes by
  // passing these two function calls as props in the handleLocationSubmit function in map.jsx component
  const [homeLat, setHomeLat] = useState("");
  const [homeLng, setHomeLng] = useState("");
  //-------------------------------------------------------------------------------------------------

  return (
    <Container fluid>
      <div>
        <CommonRow />
      </div>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="sensor-measurement-settings">
            <div className="sensor-measurement-settings-title">
              Mission Flight Planner
            </div>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "94%",
            marginBottom: "30px",
          }}
        >
          <Col xs={12} sm={6} md={6} lg={8} xl={8} xxl={8}>
            <div
              style={{
                height: "815px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "15px",
                backgroundColor: "transparent",
              }}
            >
              <MapComponent
                onMapClick={onMapClick}
                markerPositions={markerPositions}
                setHomeLat={setHomeLat}
                setHomeLng={setHomeLng}
              />
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4}>
            <div
              style={{
                height: "700px",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "15px",
                border: "1px solid #797979",
                boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65",
                backgroundColor: "transparent",
                overflow: "auto", // This will add a scrollbar if the table exceeds the div's size
              }}
            >
              <LatLongTable data={data} setData={setData} />
            </div>
            <div //container for both home location and buttons box
              style={{
                display: "flex",
                justifyContent: "space-between",
                height: "100px",
                marginLeft: "15px",
                marginTop: "15px",
                backgroundColor: "transparent",
                boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65",
              }}
            >
              <div
                style={{
                  width: "33%",
                  border: "1px solid #797979",
                  padding: "8px",
                  backgroundColor: "transparent",
                  boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65",
                }}
              >
                <h4
                  style={{
                    textDecoration: "underline",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  Home Location
                </h4>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    backgroundColor: "transparent",
                  }}
                >
                  <label
                    style={{
                      marginRight: "10px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Latitude:
                  </label>
                  <input
                    value={homeLat}
                    style={{
                      borderBottom: "1px solid #797979",
                      borderLeft: "none",
                      borderTop: "none",
                      borderRight: "none",
                      width: "70%",
                      backgroundColor: "transparent",
                      color: "#e0e0e0",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <label
                    style={{
                      marginRight: "10px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Longitude:
                  </label>
                  <input
                    value={homeLng}
                    style={{
                      borderBottom: "1px solid #797979",
                      borderLeft: "none",
                      borderTop: "none",
                      borderRight: "none",
                      width: "70%",
                      backgroundColor: "transparent",
                      color: "#e0e0e0",
                    }}
                  />
                </div>
              </div>

              <div //buttons box
                style={{
                  width: "65%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #797979",
                  backgroundColor: "transparent",
                }}
              >
                <button
                  style={{
                    border: "1px solid orange",
                    color: "#e0e0e0",
                    width: "27%",
                    marginRight: "10px",
                    backgroundColor: "transparent",
                    borderRadius: "5px",
                    height: "45px",
                    boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65",
                  }}
                  onMouseOver={handleHover1}
                  onMouseOut={handleUnhover1}
                >
                  Save
                </button>

                <button
                  style={{
                    border: "1px solid orange",
                    color: "#e0e0e0",
                    width: "27%",
                    marginRight: "10px",
                    backgroundColor: "transparent",
                    borderRadius: "5px",
                    height: "45px",
                    boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65",
                  }}
                  onMouseOver={handleHover1}
                  onMouseOut={handleUnhover1}
                >
                  Load
                </button>

                <button
                  style={{
                    border: "1px solid orange",
                    color: "#e0e0e0",
                    width: "27%",
                    backgroundColor: "transparent",
                    borderRadius: "5px",
                    height: "45px",
                    fontWeight: "bold",
                    boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65",
                  }}
                  onMouseOver={handleHover}
                  onMouseOut={handleUnhover}
                  // onClick={handleButtonClick}
                  onClick={navToLaunchTest}
                >
                  Launch
                </button>
              </div>
            </div>
          </Col>
        </div>
      </Row>

      {/* ------------------------------------------------- row 1 END ----------------------------- */}
    </Container>
  );
}

export default Mission_Planner;
