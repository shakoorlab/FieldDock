import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import { useSelector } from "react-redux";

function CoordinatesPlotting() {
  const navigate = useNavigate();
  const planningCompleted = useSelector((state) => state.planning.completed);

  const navToCoordinates = () => {
    navigate("/plan-mission");
  };

  function handleHover(e) {
    e.target.style.borderColor = "#00e1b4";
    e.target.style.color = "orange";
  }

  function handleUnhover(e) {
    e.target.style.borderColor = "orange";
    e.target.style.color = "#e0e0e0";
  }
  return (
    <div style={{ width: "100%" }}>
      {/* <select
        style={{
          border: "1px solid #00e1b4",
          borderRadius: "5px",
          marginTop: "10px",
          height: "35px",
          width: "85%",
          backgroundColor: "transparent",
          color: "#e0e0e0",
          fontWeight: "bold",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block", 
        }}
      >
        <option>Select FieldDock Drone...</option>
        <option>FieldDock Drone One</option>
        <option>FieldDock Drone Two</option>
        <option>FieldDock Drone Three</option>
      </select> */}
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
      {planningCompleted ? (
        <CheckIcon
          style={{
            color: "green",
            fontSize: "3rem", // Adjust size as needed
            display: "block",
            margin: "auto", // Center the icon in its container
          }}
        />
      ) : (
        <Button
          onMouseOver={handleHover}
          onMouseOut={handleUnhover}
          onClick={navToCoordinates}
          style={{
            display: "block",
            margin: "auto",
            border: "1px solid orange",
            color: "#e0e0e0",
            width: "15%",
            marginTop: "20px",
          }}
        >
          Plot
        </Button>
      )}
    </div>
  );
}

export default CoordinatesPlotting;
