import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faFileArrowDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function DiagnosticsTable() {
  const [selected, setSelected] = useState([]);

  // Example data
  const rows = [
    {
      id: "1",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "2",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "3",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "4",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "4",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "4",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "4",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "4",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "4",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "4",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "4",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "4",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "4",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "4",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "4",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "4",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "4",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    {
      id: "4",
      date: "02/20/2021",
      time: "13:45",
      customerId: "customer_1",
      type: "error_808.1",
    },
    // ... more rows
  ];

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: "500px", // Ensure this matches the max-height of the diagnostics-log-box if needed
        width: "100%",
        border: "1px solid #00e1b4",
        boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
        borderRadius: "5px",
        overflowY: "auto", // This ensures that the overflow applies to the TableContainer as well
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={
                  selected.length > 0 && selected.length < rows.length
                }
                checked={rows.length > 0 && selected.length === rows.length}
                onChange={handleSelectAllClick}
              />
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              ID
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              Date
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              Time
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              CustomerID
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              Type
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            const isItemSelected = isSelected(row.id);
            return (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: "#797979" },
                }}
                selected={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={isItemSelected}
                    onChange={(event) => handleClick(event, row.id)}
                  />
                </TableCell>
                <TableCell
                  sx={{ fontSize: "0.9rem" }}
                  component="th"
                  scope="row"
                >
                  {row.id}
                </TableCell>
                <TableCell sx={{ fontSize: "0.9rem" }}>{row.date}</TableCell>
                <TableCell sx={{ fontSize: "0.9rem" }}>{row.time}</TableCell>
                <TableCell sx={{ fontSize: "0.9rem" }}>
                  {row.customerId}
                </TableCell>
                <TableCell sx={{ fontSize: "0.9rem" }}>{row.type}</TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ fontSize: "0.9rem" }}
                  />
                  <FontAwesomeIcon
                    icon={faFileArrowDown}
                    style={{ marginLeft: "10px", fontSize: "0.9rem" }}
                  />
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    style={{ marginLeft: "10px", fontSize: "0.9rem" }}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DiagnosticsTable;
