import React from "react";
import Card from "./Card";
import { robots } from "./robots";

class CardList extends React.Component {
  render() {
    // const cards = [];
    // for (let i = 0; i < this.props.robotsCount; i++) {
    //   cards.push(
    //     <Card key={i} id={i} name={robots[0].name} email={robots[0].email} />
    //   );
    // }

    return (
      <div>
        {robots.map((robot) => (
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
