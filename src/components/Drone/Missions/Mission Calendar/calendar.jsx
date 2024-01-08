import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import multiMonthPlugin from "@fullcalendar/multimonth";
import interactionPlugin from "@fullcalendar/interaction";
import "./calendar.css";
import CommonRow from "../../../NavBar/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import { CalendarButton } from "../../../Tools/Buttons/Calendar/calendarButton";

function Calendar() {
  const handleDateSelect = (selectInfo) => {
    // You can access start and end date of the selection from selectInfo object
    let title = prompt("Please enter the time:");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };
  return (
    <Container fluid>
      <div>
        <CommonRow />
      </div>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="sensor-measurement-settings">
            <div className="sensor-measurement-settings-title">
              Mission Planning Calendar
            </div>
          </div>
        </Col>
      </Row>
      <div
        style={{
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          border: "1px solid #797979",
          borderRadius: "5px",
          boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65",
        }}
      >
        <Fullcalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            multiMonthPlugin,
          ]}
          selectable={true}
          select={handleDateSelect}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "prev,next", // will normally be on the left. if RTL, will be on the right
            center: "title",
            end: "dayGridMonth", // will normally be on the right. if RTL, will be on the left
          }}
          height={"90vh"}
          width={"100%"}
        />
      </div>
      <Row>
        {/* Content for the fourth row */}
        <Col className="center-content">
          <CalendarButton text="Back" />
          <CalendarButton text="Edit" />
          <CalendarButton text="Next" />
        </Col>
      </Row>
    </Container>
  );
}

export default Calendar;
