import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import {
  faFileArrowDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Diagnostics_Table() {
  return (
    <table
      style={{
        width: "95%",
        borderCollapse: "collapse",
        textAlign: "left",
        fontSize: "16px",
        lineHeight: "1.5",
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              borderBottom: "1px solid #00e1b4",
              display: "flex", // Enable flexbox
              justifyContent: "space-between", // Space between text and icons
              alignItems: "center", // Vertically center align the items
              padding: "0.5em", // Add some padding for spacing
            }}
          >
            <span>
              • 02/20/2021 / 13:45 / 0002:customer_1 / 0006: error_808.1
            </span>
            <div style={{ cursor: "grab" }}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span style={{ display: "inline-block", width: "10px" }}></span>
              <FontAwesomeIcon icon={faFileArrowDown} />
              <span style={{ display: "inline-block", width: "10px" }}></span>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </td>
        </tr>
        <tr>
          <td
            style={{
              borderBottom: "1px solid #00e1b4",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.5em",
            }}
          >
            <span>
              • 02/20/2021 / 14:45 / 0002:customer_1 / 0006: error_808.1
            </span>
            <div style={{ cursor: "grab" }}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span style={{ display: "inline-block", width: "10px" }}></span>
              <FontAwesomeIcon icon={faFileArrowDown} />
              <span style={{ display: "inline-block", width: "10px" }}></span>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Diagnostics_Table;
