import React from "react";
import Produce from "./MarketProduce";
import Schedule from "./MarketSchedule";

class MarketContainer extends React.Component {
  state = {
    schedule: [
      {
        id: 1,
        day: "Sunday",
        location: "Lents International",
        hours: "9:00am - 2:00pm",
        booth: "4A"
      },
      {
        id: 2,
        day: "Monday",
        location: "Pioneer Courthouse Square",
        hours: "10:00am - 2:00pm",
        booth: "7C"
      },
      {
        id: 3,
        day: "Tuesday",
        location: "Hillsboro",
        hours: "5:00pm - 8:30pm",
        booth: "1F"
      },
      {
        id: 4,
        day: "Wednesday",
        location: "Shemanski Park",
        hours: "10:00am - 2:00pm",
        booth: "3E"
      },
      {
        id: 5,
        day: "Thursday",
        location: "Northwest Portland",
        hours: "2:00pm - 6:00pm",
        booth: "6D"
      },
      {
        id: 6,
        day: "Saturday",
        location: "Beaverton",
        hours: "10:00am - 1:30pm",
        booth: "9G"
      }
    ],
    
    produce: [  
      {  
        month: "January",
        selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes",
          "Turnips"
        ]
      },
      {  
        month: "February",
        selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes"
        ]
      },
      {  
        month: "March",
        selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes"
        ]
      },
      {  
        month: "April",
        selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Asparagus",
          "Garlic",
          "Lettuce",
          "Mushrooms",
          "Onions",
          "Potatoes"
        ]
      },
      {  
        month: "May",
        selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Asparagus",
          "Cauliflower",
          "Garlic",
          "Lettuce",
          "Potatoes",
          "Radishes"
        ]
      },
      {  
        month: "June",
        selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Blackberries",
          "Cherries",
          "Raspberries",
          "Strawberries",
          "Asparagus",
          "Broccoli",
          "Cauliflower",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Potatoes",
          "Radishes",
          "Squash"
        ]
      },
      {  
        month: "July",
        selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Apricots",
          "Blackberries",
          "Blueberries",
          "Cherries",
          "Melons",
          "Nectarines",
          "Peaches",
          "Raspberries",
          "Strawberries",
          "Tomatoes",
          "Beets",
          "Broccoli",
          "Brussel Sprouts",
          "Cabbage",
          "Carrots",
          "Cauliflower",
          "Cucumber",
          "Eggplant",
          "Garlic",
          "Green Beans",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Potatoes",
          "Radishes",
          "Squash",
          "Turnips"
         ]
      },
      {  
        month: "August",
        selection: [  
          "Apples",
          "Apricots",
          "Blackberries",
          "Blueberries",
          "Cherries",
          "Melons",
          "Nectarines",
          "Peaches",
          "Pears",
          "Plums",
          "Raspberries",
          "Rhubarb",
          "Strawberries",
          "Tomatoes",
          "Beets",
          "Broccoli",
          "Brussel Sprouts",
          "Cabbage",
          "Carrots",
          "Cauliflower",
          "Corn",
          "Cucumber",
          "Eggplant",
          "Garlic",
          "Green Beans",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Onions",
          "Peas",
          "Peppers",
          "Potatoes",
          "Radishes",
          "Squash",
          "Turnips"
        ]
      },
      {  
        month: "September",
        selection: [  
          "Apples",
          "Blueberries",
          "Grapes",
          "Melons",
          "Peaches",
          "Pears",
          "Plums",
          "Raspberries",
          "Tomatoes",
          "Broccoli",
          "Brussel Sprouts",
          "Cabbage",
          "Carrots",
          "Cauliflower",
          "Corn",
          "Cucumber",
          "Eggplant",
          "Garlic",
          "Green Beans",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Onions",
          "Peas",
          "Peppers",
          "Potatoes",
          "Radishes",
          "Squash",
          "Turnips"
        ]
      },
      {  
        month: "October",
        selection: [  
          "Apples",
          "Grapes",
          "Hazelnuts",
          "Melons",
          "Peaches",
          "Pears",
          "Tomatoes",
          "Broccoli",
          "Brussel Sprouts",
          "Cabbage",
          "Carrots",
          "Cauliflower",
          "Corn",
          "Cucumber",
          "Eggplant",
          "Garlic",
          "Green Beans",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Onions",
          "Peas",
          "Peppers",
          "Potatoes",
          "Pumpkins",
          "Radishes",
          "Squash",
          "Turnips"
        ]
      },
      {  
        month: "November",
        selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Broccoli",
          "Carrots",
          "Cauliflower",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes",
          "Squash",
          "Turnips"
        ]
      },
      {  
        month: "December",
        selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Broccoli",
          "Carrots",
          "Cauliflower",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes",
          "Turnips"
        ]
      }
    ]
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.schedule.map(item => (
            <div>
              <hr/>
              <h3>Day: </h3><p>{item.day}</p><br />
              <h3>location: </h3><p>{item.location}</p><br />
              <h3>Booth: </h3><p>{item.booth}</p><br />
              <h3>Hours: </h3><p>{item.hours}</p><br />
            </div>
          ))}
        </ul>
        <ul>
          {this.state.produce.map(food => (
            <div>
              <hr/>
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
      </div>
    );
  }
}

export default MarketContainer;