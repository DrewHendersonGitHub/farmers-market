import React from "react";

function Schedule(props) {
  return (
    <React.Fragment>
      <hr/>
      <h3>Day: </h3><p>{props.day}</p><br/>
      <h3>location: </h3><p>{props.location}</p><br/>
      <h3>Booth: </h3><p>{props.booth}</p><br/>
      <h3>Hours: </h3><p>{props.hours}</p><br/>
    </React.Fragment>
  );
}
export default Schedule;