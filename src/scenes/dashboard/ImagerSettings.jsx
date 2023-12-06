import "../../CSS/imager_settings.css";
import "../../CSS/realtime_settings.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import CommonRow from "../../components/NavBar/NavBar";
import "../../components/NavBar/NavBar.css";
import { ListItemIcon } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandMore } from "@mui/icons-material";

//? hello out there
//! look
//*pay attention
//TODO fix
function Imager_Settings() {
  const [selectedInterval, setSelectedInterval] = useState("Select number...");

  const handleSelect = (event) => {
    setSelectedInterval(event.target.value);
  };
  const [selected1Interval, setSelected1Interval] = useState("Select image...");

  const handle1Select = (event) => {
    setSelectedInterval(event.target.value);
  };
  const [selected2Interval, setSelected2Interval] = useState(
    "Select time interval..."
  );

  const handle2Select = (event) => {
    setSelectedInterval(event.target.value);
  };

  function handleHover(e) {
    e.target.style.borderColor = "#00e1b4";
    e.target.style.color = "orange";
  }

  function handleUnhover(e) {
    e.target.style.borderColor = "orange";
    e.target.style.color = "#e0e0e0";
  }
  //---------------------------select hanger system logic-----------------------
  const [anchorEl, setAnchorEl] = useState(null);
  const [hangerAnchorEl, setHangerAnchorEl] = useState(null);
  const [selectedHangerSystem, setSelectedHangerSystem] = useState(null);
  const [hangerSystems, setHangerSystems] = useState([]);

  useEffect(() => {
    //logic for selecting which Fieldock system you want, would be the selection of the main system
    fetch("http://3.145.131.67:8000/hanger/hanger-system/")
      .then((response) => response.json())
      .then((data) => setHangerSystems(data))
      .catch((error) => console.log(error));
  }, []);
  const handleHangerOpen = (event) => {
    setHangerAnchorEl(event.currentTarget);
  };

  const handleHangerClose = () => {
    setHangerAnchorEl(null);
  };

  const handleHangerSelect = (event, selected) => {
    setSelectedHangerSystem(selected);
    handleHangerClose();
  };
  //---------------------------select hanger system logic END----------------------------------
  function handleHover(e) {
    e.target.style.borderColor = "#00e1b4";
    e.target.style.color = "orange";
  }

  function handleUnhover(e) {
    e.target.style.borderColor = "orange";
    e.target.style.color = "#e0e0e0";
  }
  //-------------------------------------------------------------------------------------------------

  return (
    <Container fluid>
      <div>
        <CommonRow />
      </div>
      {/* ------------------------------------------------- row 1 END ----------------------------- */}

      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="sensor-measurement-settings">
            <div className="sensor-measurement-settings-title">
              FieldDock Imager Settings
            </div>
          </div>
        </Col>
      </Row>
      {/* ------------------------------------------------- row 2 END ----------------------------- */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="image-processing-box">
            <div className="sensor-modules-title">Image Processing</div>
            {/* //!leaving this as "button" for classname because I am lazy and do not feel like changing the css when the button css will apply fine to this menu */}
            <div className="image-preferences-button">
              <div className="select-menu-container">
                <p>
                  Downsample raw images to the following resolution before
                  sending to the cloud:
                </p>
                <div
                  className="select-fielddock-menu"
                  onClick={handleHangerOpen}
                >
                  {selectedHangerSystem
                    ? selectedHangerSystem
                    : "Select compressed resolution..."}
                  <ListItemIcon>
                    <ExpandMore />
                  </ListItemIcon>
                </div>
              </div>
              <Menu
                anchorEl={hangerAnchorEl}
                open={Boolean(hangerAnchorEl)}
                onClose={handleHangerClose}
              >
                {hangerSystems.map((system) => (
                  <MenuItem
                    key={system.id}
                    autoFocus={false}
                    onClick={(event) =>
                      handleHangerSelect(
                        event,
                        `${system.name} - ${system.location}`
                      )
                    }
                    sx={{
                      color: "#000000",
                      backgroundColor: "#BEBEBE !important",
                      "&:hover": {
                        backgroundColor: "#EBECF0 !important",
                      },
                    }}
                  >
                    {system.name} - {system.location}
                  </MenuItem>
                ))}
              </Menu>
            </div>
            <div className="checkboxes">
              <label>
                <input class="group-checkbox" type="checkbox" />
                <span>Only store raw images in PheNode's SD card</span>
              </label>
              <label>
                <input class="all-checkbox" type="checkbox" />
                <span>Store raw and processed images in PheNode's SD card</span>
              </label>
            </div>
          </div>
        </Col>
      </Row>
      {/* ------------------------------------------------- row 3 END ----------------------------- */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="imaging-frequency-box">
            <div className="sensor-modules-title">Imaging Frequency</div>
            <div className="inner-box left-box">
              <div className="center-checkbox">
                <div className="checkboxes">
                  <label>
                    <input class="group-checkbox" type="checkbox" />
                    <span>Limited Imaging (FieldDock on solar power)</span>
                  </label>
                </div>
              </div>
              <div className="limited-imaging-content">
                <p className="limited-imaging-description">
                  Select number of images to capture per day:
                </p>
                <select
                  className="limited-imaging-select"
                  value={selectedInterval}
                  onChange={handleSelect}
                >
                  <option value="Select number..." disabled>
                    Select number...
                  </option>
                  <option value="1 image">1 image</option>
                  <option value="2 image">2 image</option>
                  <option value="3 image">3 image</option>
                  <option value="4 image">4 image</option>
                </select>
              </div>
              <div className="limited-imaging-content">
                <p className="limited-imaging-description">
                  Select number of images to capture per day:
                </p>
                <select
                  className="limited-imaging-select"
                  value={selectedInterval}
                  onChange={handleSelect}
                >
                  <option value="Select number..." disabled>
                    Select number...
                  </option>
                  <option value="1 image">1 image</option>
                  <option value="2 image">2 image</option>
                  <option value="3 image">3 image</option>
                  <option value="4 image">4 image</option>
                </select>
              </div>
              <div className="limited-imaging-content">
                <p className="limited-imaging-description">
                  Select number of images to capture per day:
                </p>
                <select
                  className="limited-imaging-select"
                  value={selected1Interval}
                  onChange={handle1Select}
                >
                  <option value="Select image..." disabled>
                    Select image...
                  </option>
                  <option value="Image 1">Image 1</option>
                  <option value="Image 2">Image 2</option>
                  <option value="Image 3">Image 3</option>
                  <option value="Image 4">Image 4</option>
                </select>
              </div>
            </div>

            <div className="inner-box right-box">
              <div className="center-checkbox">
                <div className="checkboxes">
                  <label>
                    <input class="group-checkbox" type="checkbox" />
                    <span>Continuous Imaging (FieldDock plugged in)</span>
                  </label>
                </div>
              </div>
              <div className="limited-imaging-content">
                <p className="limited-imaging-description">
                  Select number of images to capture per day:
                </p>
                <select
                  className="limited-imaging-select"
                  value={selectedInterval}
                  onChange={handleSelect}
                >
                  <option value="Select number..." disabled>
                    Select number...
                  </option>
                  <option value="1 image">1 image</option>
                  <option value="2 image">2 image</option>
                  <option value="3 image">3 image</option>
                  <option value="4 image">4 image</option>
                </select>
              </div>
              <div className="limited-imaging-content">
                <p className="limited-imaging-description">
                  Select number of images to capture per day:
                </p>
                <select
                  className="limited-imaging-select"
                  value={selected1Interval}
                  onChange={handle1Select}
                >
                  <option value="Select image..." disabled>
                    Select image...
                  </option>
                  <option value="Image 1">Image 1</option>
                  <option value="Image 2">Image 2</option>
                  <option value="Image 3">Image 3</option>
                  <option value="Image 4">Image 4</option>
                </select>
              </div>
              <div className="limited-imaging-content">
                <p className="limited-imaging-description">
                  Select number of images to capture per day:
                </p>
                <select
                  className="limited-imaging-select"
                  value={selected2Interval}
                  onChange={handle2Select}
                >
                  <option value="Select time interval..." disabled>
                    Select time interval..
                  </option>
                  <option value="Image 1">Image 1</option>
                  <option value="Image 2">Image 2</option>
                  <option value="Image 3">Image 3</option>
                  <option value="Image 4">Image 4</option>
                </select>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/* ------------------------------------------------- row 4 END ----------------------------- */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="image-preference-box">
            <div className="checkboxes">
              <label>
                <input class="group-checkbox" type="checkbox" />
                <span>
                  Apply the above imaging settings to all FieldDock systems in
                  this group
                </span>
              </label>
              <label>
                <input class="all-checkbox" type="checkbox" />
                <span>
                  Apply the above imaging settings to all FieldDock systems in
                  this account
                </span>
              </label>
            </div>
            <div
              className="image-preferences-button"
              onMouseOver={handleHover}
              onMouseOut={handleUnhover}
            >
              <button>Save all imaging preferences</button>
            </div>
          </div>
        </Col>
      </Row>
      {/* ------------------------------------------------- row 5 END ----------------------------- */}
    </Container>
  );
}

export default Imager_Settings;
