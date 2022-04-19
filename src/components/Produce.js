import React from "react";
import PropTypes from "prop-types";

function Produce(props){
  return (
    <React.Fragment>
      <hr/>
      <div>
        <h3>{props.month}</h3>
        <ul>
          <li>{props.selection}</li>
        </ul>
      </div>
    </React.Fragment>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.arrayOf(PropTypes.string)
};

export default Produce;