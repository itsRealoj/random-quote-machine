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
      'https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json',
    )
      .then((data) => data.json())
      .then((d) => console.log(d));
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
