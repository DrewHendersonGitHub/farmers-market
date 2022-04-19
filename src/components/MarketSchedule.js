import React from "react"
import PropTypes from "prop-types";

class Schedule extends React.Component {
  render() {
    return (
      <ul>
        {this.props.schedule.map(item => (
          <div>
            <h3>Day: </h3><p>{item.day}</p><br />
            <h3>location: </h3><p>{item.location}</p><br />
            <h3>Booth: </h3><p>{item.booth}</p><br />
            <h3>Hours: </h3><p>{item.hours}</p><br />
          </div>
        ))}
      </ul>
    );
  }
  propTypes = {
    day: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    booth: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired
  };
}

export default Schedule;