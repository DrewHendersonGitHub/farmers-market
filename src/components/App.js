import React from "react";
import ProduceList from "./ProduceList";
import ScheduleList from "./ScheduleList";
import Header from "./Header";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <ProduceList />
      <ScheduleList />
    </React.Fragment>
  );
}

export default App;