import React from "react";
import PropTypes from "prop-types";

function Produce(props){
  return (
    <React.Fragment>
      <h3>Month: {props.month}</h3>
      <ul>
        <li>Produce: {props.selection}</li>
      </ul>
    </React.Fragment>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.arrayOf(PropTypes.string)
};

export default Produce;