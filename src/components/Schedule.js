import React from "react";

function Schedule(props) {
  return (
    <React.Fragment>
      <h3>Day: {props.day}</h3>
      <h3>location: {props.location}</h3>
      <h3>Booth: {props.booth}</h3>
      <h3>Hours: {props.hours}</h3>
    </React.Fragment>
  );
}
export default Schedule;