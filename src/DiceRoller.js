import React from 'react';

function Dice(props) {
  return (
    <div className="row">
      <div className="quantity">
        {props.quantity}
      </div>
      <div className={'dice ' + props.color}>
      </div>
    </div>
  );
}

class DiceRoller extends React.Component {
  renderAllDiceColors(quantity, htmlToPushTo) {
    var dices = new Array();
    var groupedResults = this.getGroupedResults(quantity)

    for (var color in groupedResults) {
      dices.push(
        this.renderDice(color, groupedResults[color])
      )
    }

    return (
      <div className="roller">
        {dices}
      </div>
    )
  }

  numberToColor(number) {
    if ([4, 5, 6].includes(number)) {
      return 'blue';
    } else if ([7, 8].includes(number)) {
      return 'green';
    } else if (number === 9) {
      return 'red';
    } else if (number === 10) {
      return 'black';
    } else if (number === 11) {
      return 'white';
    } else {
      return 'yellow';
    }
  }

  renderDice(color, quantity) {
    return <Dice color={color} quantity={quantity} />;
  }

  getGroupedResults(numberOfDice) {
    var color;
    var groupedResults = { 
      yellow: 0,
      blue: 0,
      green: 0,
      red: 0,
      black: 0,
      white: 0
    };

    for (let index = 0; index < numberOfDice; index++) {
      var roller = new DiceRoller();
      color = roller.numberToColor(Math.floor(Math.random() * 12));
      if (groupedResults[color]) {
        groupedResults[color] = groupedResults[color] + 1;
      } else {
        groupedResults[color] = 1;
      }
    }

    return groupedResults;
  }

  render() {
    var dices = [];
    var fullTenRounds = this.props.quantity / 10;
    var dicesToAdd = this.props.quantity % 10;

    for (let index = 0; index < fullTenRounds; index++) {
      dices.push(this.renderAllDiceColors(10));
    }

    if (dicesToAdd > 0) {
      dices.push(this.renderAllDiceColors(dicesToAdd));
    }

    return (
      <div className="onePlayerDices">
        {dices}
      </div>
    )
  }
}

export default DiceRoller;
