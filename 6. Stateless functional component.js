// A component class written in the usual way:

export class MyComponentClass extends React.Component {
    render() {
      return <h1>Hello world</h1>;
    }
  }
  
  // The same component class, written as a stateless functional component:
  export const MyComponentClass = () => {
    return <h1>Hello world</h1>;
  }
  
  // Works the same either way:
  ReactDOM.render(
      <MyComponentClass />,
      document.getElementById('app')
  );

  // props with functions (anonymus)

  import React from "react";
import ReactDOM from "react-dom";

export class NewFriend extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.src} />
      </div>
    );
  }
}

export const NewFriend = (props) => {
    return (
      <div>
        <img src={props.src} />
      </div>
    );
  }

ReactDOM.render(
  <NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
  document.getElementById("app")
);
