// Component life cycle 3 big parts:

// 1. Mounting 🏇 = component is being initialized and put into the DOM for the first time
// countructor() + render()

// 2. Updating 🔄 = component updates as a result of changed state or changed props

// 3. Unmounting 🐎 = when the component is being removed from the DOM

import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  // Add your methods in here.
  constructor(props){
    super(props)
    this.state = { date: new Date() }
  }
  render(){
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}

ReactDOM.render(<Clock />, document.getElementById('app'));

// Notice that this is static—it doesn’t update, even as time goes by.

// Remember: the constructor is the first thing called during mounting. 
// render() is called later, to show the component for the first time.


// Can only update a mounted or mounting component. 
// ⚠️ This usually means you called setState() on an unmounted component.


//Another example:
import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        {this.props.isPrecise
          ? this.state.date.toISOString()
          : this.state.date.toLocaleTimeString()}
      </div>
    );
  }
  startInterval() {
    let delay;
    if (this.props.isPrecise) {
      delay = 100;
    } else {
      delay = 1000;
    }
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, delay);
  }
  componentDidMount() {
    this.startInterval();
  }
  componentDidUpdate(prevProps) {
    if (this.props.isPrecise === prevProps.isPrecise) {
      return;
    }
    clearInterval(this.intervalID);
    this.startInterval();
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}