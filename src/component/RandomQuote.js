import React, { Component } from 'react';

class RandomQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'be water!',
      data: [],
    };
  }

  componentDidMount() {
    let data = [];
    let quote = '';
    let author = '';

    fetch(
      'https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json',
    )
      .then((data) => data.json())
      .then((d) => {
        data.push(d[Math.floor(Math.random() * Math.ceil(100))]);
        // console.log(data[0]);
        quote = data[0].quote;
        author = data[0].author;
        console.log(`quote: ${quote}`);
        console.log(`author: ${author}`);
        this.setState({
          quote: quote,
          author: author,
        });
      });
  }

  render() {
    return (
      <div>
        <div>{this.state.quote}</div>
        <div>{this.state.author}</div>
      </div>
    );
  }
}
export default RandomQuote;
