import React, { Component } from 'react'
import QuoteAndAuthor from './components/QuoteAndAuthor';
import quotes from './QuoteDB';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
      colors: ["PaleVioletRed", "MistyRose", "BlueViolet", "Thistle", "HoneyDew", "purple", "MediumSlateBlue", "Lavender"] 
  }
}

  addQuote = (arr) => {
    let index = Math.floor(Math.random() * (quotes.length));
    let newQuote = quotes[index];
    //update state
    this.setState({
      quote: newQuote.quote, 
      author: newQuote.author,
    })

    this.shuffleQuotes(quotes)
  }

  shuffleQuotes = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }

  changeBg = () => {
    const { colors } = this.state;
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
    // document.button.style.color = color;

    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }


  render () {
    return (
      <div className="container">
        <QuoteAndAuthor
        changeBg = {this.changeBg}
        addQuote = {this.addQuote}
        quote= {this.state}
        />
      </div>
    )
  }

}

export default App;
