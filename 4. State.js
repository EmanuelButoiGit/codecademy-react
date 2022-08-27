// There are two ways for a component to get dynamic information: props and state

// Unlike props, a component’s state is not passed in from the outside. 

// ✨ A component decides its own state. ✨

// should be declared inside of a constructor method, like this:

class Example extends React.Component {
    constructor(props) {
      super(props); // React components always have to call super in their constructors to be set up properly.
      this.state = { mood: 'decent' };
    }
   
    render() {
      return <div></div>;
    }
  }
   
  <Example />


  //Example 2:

import React from 'react';

class App extends React.Component {
  // constructor method begins here:
  constructor(props){
    super(props)
    this.state = { title: 'Best App' }
  }
	
  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}