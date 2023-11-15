import React from "react";
import "./user.css";

const CreateUserComponent = () => {
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <div style={{ ...styles.column, ...styles.box }}>
          <h3 style={styles.subHeading}>Select role for new user:</h3>
          {/* Repeat the following block for each checkbox item */}
          <label style={styles.checkboxLabel}>
            <input type="checkbox" style={styles.checkbox} id="adminCheckbox" />
            <span style={styles.customCheckbox}></span>
            Admin
          </label>
          <label style={styles.checkboxLabel}>
            <input type="checkbox" style={styles.checkbox} id="adminCheckbox" />
            <span style={styles.customCheckbox}></span>
            Group Leader
          </label>
          <label style={styles.checkboxLabel}>
            <input type="checkbox" style={styles.checkbox} id="adminCheckbox" />
            <span style={styles.customCheckbox}></span>
            Group User
          </label>
          <label style={styles.checkboxLabel}>
            <input type="checkbox" style={styles.checkbox} id="adminCheckbox" />
            <span style={styles.customCheckbox}></span>
            General User
          </label>
          <label style={styles.checkboxLabel}>
            <input type="checkbox" style={styles.checkbox} id="adminCheckbox" />
            <span style={styles.customCheckbox}></span>
            Public User
          </label>
          <label style={styles.checkboxLabel}>
            <input type="checkbox" style={styles.checkbox} id="adminCheckbox" />
            <span style={styles.customCheckbox}></span>
            Other
          </label>
        </div>

        <div style={{ ...styles.column, ...styles.box }}>
          <h3 style={styles.subHeading}>FieldDock Systems :</h3>
          {/* Repeat the following block for each checkbox item */}
          <label style={styles.checkboxLabel}>
            <input type="checkbox" style={styles.checkbox} id="adminCheckbox" />
            <span style={styles.customCheckbox}></span>
            FieldDock_0001
          </label>
          {/* ... other systems */}
        </div>

        <div style={{ ...styles.column, ...styles.box }}>
          <input
            type="text"
            placeholder="Enter temporary username"
            style={styles.input}
            className="input-placeholder"
          />
          <input
            type="password"
            placeholder="Enter one-time password"
            style={styles.input}
            className="input-placeholder"
          />
          <input
            type="password"
            placeholder="Re-enter one time password"
            style={styles.input}
            className="input-placeholder"
          />
          <input
            type="email"
            placeholder="Enter email of new user"
            style={styles.input}
            className="input-placeholder"
          />
          <button style={{ ...styles.saveButton, ...styles.orangeBorder }}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid orange",
    borderRadius: "5px",
    padding: "40px",
    color: "#CCC",
    width: "94.6%",
    marginLeft: "49px",
    marginTop: "2rem",
  },
  formContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "20px",
  },
  box: {
    border: "1px solid #797979",
    borderRadius: "5px",
    padding: "1rem",
    marginBottom: "1rem",
    width: "33%",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    border: "1px solid #CCC",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "transparent",
  },
  checkbox: {
    position: "absolute",
    opacity: 0,
    cursor: "pointer",
    height: 0,
    width: 0,
    margin: 0,
    zIndex: -1, // hide the checkbox
  },

  checkboxLabel: {
    color: "#e0e0e0",
    position: "relative",
    cursor: "pointer",
    display: "inline-block",
    paddingLeft: "45px", // make room for the custom checkbox
  },

  customCheckbox: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "20px",
    width: "20px",
    backgroundColor: "transparent",
    border: "1px solid #00e1b4",
  },

  // Style for when the checkbox is checked
  checkboxChecked: {
    backgroundColor: "#00eb14",
    border: "1px solid #00eb14",
  },

  saveButton: {
    padding: "10px 20px",
    color: "#FFF",
    backgroundColor: "transparent",
    border: "1px solid orange",
    borderRadius: "5px",
    cursor: "pointer",
  },
  orangeBorder: {
    borderColor: "orange",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#e0e0e0",
  },
  subHeading: {
    marginBottom: "10px",
    color: "#e0e0e0",
  },
};

export default CreateUserComponent;
