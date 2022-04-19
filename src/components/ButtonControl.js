import React from "react";
import ProduceList from "./ProduceList";
import ScheduleList from "./ScheduleList";

class ButtonControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.scheduleVisibleOnPage) {
      currentlyVisibleState = <ScheduleList />;
      buttonText = "Schedule";
    } else {
      currentlyVisibleState = <ProduceList />;
      buttonText = "Produce";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ButtonControl;