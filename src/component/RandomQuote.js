import React, { Component } from 'react';

class RandomQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'be water!',
    };
  }

  componentDidMount() {
    fetch(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    )
      .then((results) => {
        return results;
      })
      .then((data) => {
        console.log(data);
      });
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
