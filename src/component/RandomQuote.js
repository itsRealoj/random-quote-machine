import React, { Component } from 'react';

class RandomQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'be water!',
    };
  }
  render() {
    return (
      <div>
        <div>{this.state.quote}</div>
      </div>
    );
  }
}
export default RandomQuote;
