import React from "react";
import Card from "./Card";

class CardList extends React.Component {
  render() {
    return (
      <div>
        {this.props.robots.map((robot) => (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        ))}
      </div>
    );
  }
}

export default CardList;
