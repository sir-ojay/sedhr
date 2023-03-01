import React, { useState } from "react";
import { Calendar, momentLocalizer,dateFnsLocalizer  } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { title } from "process";

const BigCalendar = (props: any) => {
  const localizer = momentLocalizer(moment);
  const [setBooking, setNewBooking] = useState([
    // {
    //   title: "Election Day",
    //   start: "2023-02-28T12:56:24.257Z",
    //   end: "2023-02-28T16:56:24.257Z",
    // },
    {
      title: "Election Day",
      start: new Date("2023-02-27T16:56:24.257Z"),
      end: new Date("2023-02-27T18:56:24.257Z"),
    },{
      title: "Election Day",
     end: new Date("2023-02-27T19:56:24.257Z"),
      start: new Date("2023-02-27T18:56:24.257Z"),
    },
  ]);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={setBooking}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default BigCalendar;
