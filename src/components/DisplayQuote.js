import React from "react";
import axios from "axios";

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
        <h2>{this.state.quote}</h2>
        <button type="button" onClick={this.getQuote}>
          Get Quote
        </button>
      </div>
    );
  }

  getQuote = () => {
    axios
      .get("https://api.kanye.rest/")
      .then(response => this.setState({ quote: response.data.quote }));
  };
}

export default DisplayQuote;
