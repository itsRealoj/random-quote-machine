import React, { Component } from 'react';

class RandomQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
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
        quote = data[0].quote;
        author = data[0].author;
        this.setState({
          quote,
          author,
        });
      });
  }

  render() {
    return (
      <div className='container-fluid bg-secondary  w-50'>
        <header>Random Quote Machine</header>
        <div className='card my-auto'>
          <div className='blockquote text-center bg-light my-auto'>
            <blockquote>
              <h4>
                <i className='mb-0'></i>
                {this.state.quote}
              </h4>
            </blockquote>
            <div className='lg-6 text-right'>
              <footer className='blockquote-footer'>{this.state.author}</footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RandomQuote;
