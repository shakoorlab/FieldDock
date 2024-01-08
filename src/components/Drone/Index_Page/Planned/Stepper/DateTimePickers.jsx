import React, { useState } from "react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

function TimeDatePickers() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    // console.log("Selected Date: ", newDate);
  };

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
    // console.log("Selected Time: ", newTime);
  };
  return (
    <div style={{ width: "100%" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="customCalendar">
          <DateCalendar
            showDaysOutsideCurrentMonth
            views={["day", "month"]}
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div style={{ display: "flex" }}>
          <TimePicker value={selectedTime} onChange={handleTimeChange} />
        </div>
      </LocalizationProvider>
    </div>
  );
}
export default TimeDatePickers;
