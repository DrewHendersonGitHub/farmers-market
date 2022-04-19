import React from "react";
import PropTypes from "prop-types";

class Produce extends React.Component {
  render() {
    return (
      <ul>
        {this.state.produce.map(food => (
          <div>
            <hr />
            <h3>Month: <em>{food.month}</em></h3>
            <h3>Produce: </h3>
            {food.selection.map((v) => {
              return (
                <li>{v}</li>
              );
            })
            }
          </div>
        ))}
      </ul>
    );
  }
  propTypes = {
    month: PropTypes.string.isRequired,
    selection: PropTypes.arrayOf(PropTypes.string)
  };
}

export default Produce;