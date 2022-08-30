// Style 🎨:

import React from "react";
import ReactDOM from "react-dom";

const styles = {
  background: "lightblue",
  color: "darkred",
  marginTop: 100,
  fontSize: 50
};

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(styleMe, document.getElementById("app"));


// Prop Types ⚙️:

import React from 'react';
import PropTypes from 'prop-types';

export class BestSeller extends React.Component {
  render() {
    return (
      <li>
        Title: <span>
          {this.props.title}
        </span><br />
        
        Author: <span>
          {this.props.author}
        </span><br />
        
        Weeks: <span>
          {this.props.weeksOnList}
        </span>
      </li>
    );
  }
}

BestSeller.propTypes = {
  title:   PropTypes.string.isRequired,
  author:     PropTypes.string.isRequired,
  weeksOnList:  PropTypes.number.isRequired
};


// React Forms 🤓:

import React from "react";
import ReactDOM from "react-dom";

export class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = { userInput: "" };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({
      userInput: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} value={this.state.userInput}/>
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Input />, document.getElementById("app"));
