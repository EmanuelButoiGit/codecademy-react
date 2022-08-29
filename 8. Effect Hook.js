// The first argument passed to the useEffect() function is the callback function 
// that we want React to call after each time this component renders. 
// We will refer to this callback function as our effect.

import React, { useState, useEffect } from 'react';
 
export default function PageTitle() {
  const [name, setName] = useState('');
 
 useEffect(() => {
    document.title = `Hi, ${name}`;
  }, [name]);
 
  return (
    <div>
      <p>Use {name} input field below to rename this page!</p>
      <input 
        onChange={({target}) => setName(target.value)} 
        value={name} 
        type='text' />
    </div>
  );
}


// Example 2:

import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // alert(count);
    alert("Count: ${count}"); //template literal
  });

  const handleClick = () => {
    setCount((prevCount) =>  prevCount + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}


// Clean Up Effects 🛁 -> to avoid memory leaks

import React, { useState, useEffect } from "react";

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  // your code here
  const increment = () => {
    setClickCount((prev) => prev + 1);
  };

  useEffect(() => {
    document.addEventListener("mousedown", increment);
    return () => {
      document.removeEventListener("mousedown", increment);
    };
  });

  return <h1>Document Clicks: {clickCount}</h1>;
}
