
// A component is a small, reusable chunk of code

// His job 🧑‍💼 is often to render some HTML.

import React from 'react'; // contains methods necessary to use the React library.
import ReactDOM from 'react-dom'; // to render stuff
 
class MyComponentClass extends React.Component { //class component
  render() {
    return <h1>Hello world</h1>;
  }
};
 
ReactDOM.render(
  <MyComponentClass />, // component instance (component call)
  document.getElementById('app')
);


ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
                // instead of this,
                // it will be my
                // component :)

// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------

// Examples, don't mind


// 1
const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};


class Owl extends React.Component { 
  render() {
    return( 
    <div>
      <h1>{owl.title}</h1>
      <img src = {owl.src} alt = {owl.title} />
    </div>
    );
  }
}

ReactDOM.render(
  <Owl />,
  document.getElementById('app')
);


//2

import React from "react";
import ReactDOM from "react-dom";

const friends = [
  {
    title: "Yummmmmmm",
    src:
      "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg",
  },
  {
    title: "Hey Guys!  Wait Up!",
    src:
      "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg",
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg",
  },
];

// New component class starts here:
class Friend extends React.Component {
  render() {
    const friend = friends[0];
    return (
      <div>
        <h1>{friend.title}</h1>
        <img src = {friend.src} />
      </div>
    );
  }
}

ReactDOM.render(
  <Friend />,
  document.getElementById('app')
);

