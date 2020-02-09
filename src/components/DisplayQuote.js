import React from "react";
import axios from "axios";
import "../style.css";

class DisplayQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    };
  }

  render() {
    return (
      <div className="App">
        <div className="Title">
          <h1>Random Kanye quote</h1>
        </div>
        <img
          className="Image"
          src="http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2566.png"
          alt=""
        />
        <button type="button" onClick={this.getQuote}>
          <p>Get Inspired</p>
        </button>
        <h2>{this.state.quote}</h2>
      </div>
    );
  }

  getQuote = () => {
    axios
      .get("https://api.kanye.rest")
      .then(response => this.setState({ quote: response.data.quote }));
  };
}

export default DisplayQuote;
