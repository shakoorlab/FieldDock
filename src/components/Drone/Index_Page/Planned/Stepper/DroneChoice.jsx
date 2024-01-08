function DroneChoice() {
  return (
    <div style={{ width: "100%" }}>
      <select
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
          display: "block", // Make the select a block element to occupy its own line
        }}
      >
        <option>Select FieldDock Drone...</option>
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
}
export default DroneChoice;
