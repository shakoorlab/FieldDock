import "../../CSS/imager_settings.css";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import CommonRow from "../../components/NavBar/NavBar";
import CreateUserComponent from "../../components/Users/CreateUser";
import EditUserComponent from "../../components/Users/EditUser";

//? hello out there
//! look
//*pay attention
//TODO fix
function Imager_Settings() {
  return (
    <Container fluid>
      <div>
        <CommonRow />
      </div>
      {/* ------------------------------------------------- row 1 END ----------------------------- */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <CreateUserComponent />
        </Col>
      </Row>
      {/* ------------------------------------------------- row 2 END ----------------------------- */}

      {/* ------------------------------------------------- row 3 END ----------------------------- */}

      {/* ------------------------------------------------- row  END ----------------------------- */}
    </Container>
  );
}

export default Imager_Settings;
