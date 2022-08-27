// A component can render another component.

// Example with how import and export works:

// Navbar.js
import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}


// ProfilePage.js
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar.js'

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

ReactDOM.render(
  <ProfilePage />, 
  document.getElementById('app')
);


// Another way that components can interact: a component can pass information to another component.
// Information that gets passed from one component to another is known as “props.”

import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName="Emy" />, 
  document.getElementById('app')
);


// when using function don't use keyword function

import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./Button";

class Talker extends React.Component {
  talk() {
      let speech = "";
      for (let i = 0; i < 10000; i++) {
        speech += "blah ";
      }
      alert(speech);
  }
  render() {
    return <Button />;
  }
}

ReactDOM.render(<Talker />, document.getElementById("app"));


// an example of props with functions

//Button.js
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick = {this.props.talk}>
        Click me!
      </button>
    );
  }
}

//Talker.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk = {this.talk}/>;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);


// default props

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps={ text: 'I am a button' }

ReactDOM.render(
  <Button />, 
  document.getElementById('app')
);


// for your knoledge there are also children props