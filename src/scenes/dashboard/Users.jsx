import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import CommonRow from "../../components/NavBar/NavBar";
import "../../CSS/users.css";
import CreateUserComponent from "../../components/Users/CreateUser";
import EditUserComponent from "../../components/Users/EditUser";

function Users() {
  //----------------------------logic for create new user/edit existing users---------------------
  const [isCreateUserHovered, setCreateUserHovered] = useState(false);
  const [isEditUserHovered, setEditUserHovered] = useState(false);

  const handleCreateUserMouseEnter = () => {
    setCreateUserHovered(true);
  };

  const handleCreateUserMouseOut = () => {
    setCreateUserHovered(false);
  };

  const handleEditUserMouseEnter = () => {
    setEditUserHovered(true);
  };

  const handleEditUserMouseOut = () => {
    setEditUserHovered(false);
  };

  const createUserButtonClassName = isCreateUserHovered
    ? "create-user-button-hovered"
    : "create-user-button";
  const editUserButtonClassName = isEditUserHovered
    ? "edit-existing-user-hovered"
    : "edit-existing-user";

  //----------------------------logic for create new user/edit existing users END---------------------
  //
  //
  //
  // ----------------------State to track whether to show CreateUser or EditUser component------------
  const [currentView, setCurrentView] = useState("null"); // 'create' or 'edit'

  // Handlers to switch between create and edit views
  const handleCreateUserClick = () => {
    setCurrentView("create");
  };

  const handleEditUserClick = () => {
    setCurrentView("edit");
  };
  // ----------------------State to track whether to show CreateUser or EditUser component------------

  return (
    <Container fluid>
      <div>
        <CommonRow />
      </div>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="user-header-title-box">
            <div className="user-title">Users</div>
          </div>
          <div className="entire-second-row">
            <div className="button-row">
              <button
                className={createUserButtonClassName}
                onMouseEnter={handleCreateUserMouseEnter}
                onMouseOut={handleCreateUserMouseOut}
                onClick={handleCreateUserClick}
              >
                Create a new user
              </button>
              <button
                className={editUserButtonClassName}
                onMouseEnter={handleEditUserMouseEnter}
                onMouseOut={handleEditUserMouseOut}
                onClick={handleEditUserClick}
              >
                Edit existing user
              </button>
            </div>
          </div>
          {/* Conditional rendering based on currentView */}
          {currentView === "create" && <CreateUserComponent />}
          {currentView === "edit" && <EditUserComponent />}
        </Col>
        {/* -------------------------------------------------PARENT column row 2 END ----------------------------- */}
      </Row>
    </Container>
  );
}

export default Users;
