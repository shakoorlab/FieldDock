import React, { useState } from "react";

const RainfallComponent = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [rainfall, setRainfall] = useState(0);

  const handleSubmit = () => {
    // Logic for fetching and setting the rainfall data
    // setRainfall( fetchedValue );
  };

  return (
    <div style={styles.container}>
      <h2>Rainfall</h2>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        style={styles.input}
        placeholder="Start Date"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        style={styles.input}
        placeholder="End Date"
      />
      <button onClick={handleSubmit} style={styles.button}>
        Enter
      </button>
      <div style={styles.rainfall}>Rainfall: {rainfall}"</div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    maxWidth: "600px",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  input: {
    margin: "5px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    margin: "5px",
    padding: "10px 15px",
    backgroundColor: "orange",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  rainfall: {
    margin: "5px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
};

export default RainfallComponent;
