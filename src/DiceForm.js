import React from 'react';

class DiceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Number of Dice
          <input type="number" step="1" pattern="\d+" value={this.state.value} />
        </label>
        <input type="submit" value="Roll dice" />
      </form>
    );
  }
}

export default DiceForm;
