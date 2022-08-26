// React.js is a JavaScript library 📚. It was developed by engineers at Facebook.

// JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.

// There's a rule that we haven't mentioned: a JSX expression must have exactly one outermost element.
// In other words, this code will work ✅:

const paragraphs = (
    <div id="i-am-the-outermost-element">
      <p>I am a paragraph.</p>
      <p>I, too, am a paragraph.</p>
    </div>
  );

  // But this code will not work ❌:

  const paragraphsNotWorking = (
    // <p>I am a paragraph.</p> 
    // <p>I, too, am a paragraph.</p>
    <p></p>
  );

// The following code will render a JSX expression:

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));

// ReactDOM is the name of a JavaScript library. 
// This library contains several React-specific methods, all of which deal with the DOM in some way or another.
// (The HTML DOM Tree of Objects)

ReactDOM.render(); // is the most common way to render/ to appear onscreen a JSX
// This method takes a JSX expression, 
// creates a corresponding tree 🌳 of DOM nodes, and adds that tree to the DOM.

document.getElementById('app'); // it specifies where on the screen should be 


// One special thing about ReactDOM.render() is that it only updates DOM elements that have changed.
// That means that if you render the exact same thing twice in a row, the second render will do NOTHING. 

// ex class div:
const myDiv = <div className="big">I AM A BIG DIV</div>;

// In JSX, you have to include the slash. If you write a self-closing tag in JSX ex BR, IMG

// To execute as js use {}
const js = <h1>{2 + 3}</h1>;

//.map in JSX

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  <li>{person}</li>
);

ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));

// add keys to each person (it's like an id)
const peopleList = people.map((person, i) =>
  // expression goes here:
  <li key={'person_' + i}>{person}</li>
);


// The following JSX expression:

const h1Jsx = <h1>Hello world</h1>;

// can be rewritten without JSX, like this:

const h1 = React.createElement(
  "h1",
  null,
  "Hello world"
);