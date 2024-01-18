import React, { useState, useEffect } from "react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useDispatch } from "react-redux";
import { setDateTime } from "../../../../../slices/dateTimeSlice";
import dayjs from "dayjs";

function TimeDatePickers() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedDate && selectedTime) {
      // Extracting the year, month, and day from the selected date
      const year = selectedDate.year();
      const month = selectedDate.month() + 1; // Month is 0-indexed
      const day = selectedDate.date();

      // Extracting the hours and minutes from the selected time
      const hours = selectedTime.hour();
      const minutes = selectedTime.minute();

      // Combining and formatting the date and time
      const combinedDateTime = dayjs(
        new Date(year, month - 1, day, hours, minutes)
      ).toISOString();
      console.log("Combined DateTime:", combinedDateTime); // Log combined date and time
      dispatch(setDateTime(combinedDateTime));
    }
  }, [selectedDate, selectedTime, dispatch]);

  const handleDateChange = (newDate) => {
    console.log("Selected Date:", newDate); // Log selected date
    setSelectedDate(newDate);
  };

  const handleTimeChange = (newTime) => {
    console.log("Selected Time:", newTime); // Log selected time
    setSelectedTime(newTime);
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
