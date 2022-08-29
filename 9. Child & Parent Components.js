// Stateless Components Inherit From Stateful Components

// Child.js 👶
import React from "react";

export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Frarthur Jr." };
  }
  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}

// Parent.js 👨
import React from "react";
import ReactDOM from "react-dom";
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
  }
  render() {
    return <Child name = {this.state.name}/>;
  }
}

ReactDOM.render(<Parent />, document.getElementById('app'));


//Child Components Update Their Parents' state

// Child.js 👶
import React from "react";

export class Child extends React.Component {
  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  constructor(props) {
    super(props);
        this.handleChange = this.handleChange.bind(this); 
  }

  render() {
    return (
      <div>
        <h1>Hey my name is {this.props.name}!</h1>
        <select onChange={this.handleChange} id="great-names">
          <option value="Frarthur">Frarthur</option>

          <option value="Gromulus">Gromulus</option>

          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}

// Parent.js 👨
import React from "react";
import ReactDOM from "react-dom";
import { Child } from "./Child";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this); //  to make sure that the .changeName() method will always refer to the instance of Parent
    this.state = { name: "Frarthur" };
  }

  changeName(newName) {
    this.setState({
      name: newName,
    });
  }

  render() {
    return <Child name={this.state.name} onChange = {this.changeName}/>;
  }
}

ReactDOM.render(<Parent />, document.getElementById("app"));


// You should divide Child in two: 
// one component 👶 for displaying the name, 
// and a different component 🧒 for allowing a user to change the name.

// Parent.js 👨
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child onChange={this.changeName} />
        <Sibling name={this.state.name} />
      </div>
    );
  }
};

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);

//Child.js 👶
import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}>

          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}

// Sibling.js 🧒

import React from 'react';

export class Sibling extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}