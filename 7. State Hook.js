// Why Use Hooks ⚓?
// As React developers, we love breaking down complex problems into simple pieces.

// Classes, however, are not simple. They:

// 👉 are difficult to reuse between components
// 👉 are tricky and time-consuming to test
// 👉 have confused many developers and caused lots of bugs


// Let’s get started with the State Hook:

// useState() -> When we call this function, it returns an array with two values:

// current state - the current value of this state
// state setter - a function that we can use to update the value of this state

import React, { useState } from "react";
 
function Toggle() {
  const [toggle, setToggle] = useState(); //you can initialize like this useState("Off");
 
  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle("On")}>On</button>
      <button onClick={() => setToggle("Off")}>Off</button>
    </div>
  );
}


// Example 2:

import React, { useState } from "react";

// regex to match numbers between 1 and 10 digits long
const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber() {
  const [phone, setPhone] = useState('');
  
   const handleChange = ({ target })=> {
     const newPhone = target.value;
     const isValid = validPhoneNumber.test(newPhone);
     if (isValid) {
       setPhone(newPhone);
     }
     // just ignore the event, when new value is invalid
    };

  return (
    <div className='phone'>
      <label for='phone-input'>Phone: </label>
      <input value={phone} onChange={handleChange} id='phone-input' />
    </div>
  );
}


// Example 3:

import React, { useState } from 'react';

export default function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // define event handlers 
  const goBack = () => setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);
  const goToNext = () => setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
  // determine if on the first question or not 
  const onFirstQuestion = questionIndex === 0;
  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button onClick = {goBack} disabled={onFirstQuestion}>
          Go Back
        </button>
        <button onClick = {goToNext} disabled={onLastQuestion}>
          Next Question
        </button>
      </div>
    </nav>
  );
}


// Example 4:

import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";

export default function GroceryCart() {
  // declare and initialize state 
  const [cart, setCart] = useState([]) 
  const addItem = (item) => {
    setCart((items) => {
      return [item, ...items]; // https://www.w3schools.com/REACT/react_es6_spread.asp
    });
  };

  const removeItem = (targetIndex) => {
    setCart((items) => {
      return items.filter((item, index) => index !== targetIndex);
  });
};

  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}


// Separate Hooks for Separate States

import React, { useState } from "react";

function Musical() {
   const [state, setState] = useState({
    title: "Best Musical Ever",
    actors: ["George Wilson", "Tim Hughes", "Larry Clements"],
    locations: {
      Chicago: {
        dates: ["1/1", "2/2"], 
        address: "chicago theater"}, 
      SanFrancisco: {
        dates: ["5/2"], 
        address: "sf theater"
      }
    }
  })
 }

function MusicalRefactored() {
  const [title, setTitle] = useState("Best Musical Ever");
  const [actors, setActors] = useState(["George Wilson", "Tim Hughes", "Larry Clements"]);
  const [locations, setLocations] = useState({
    Chicago: {
      dates: ["1/1", "2/2"], 
      address: "chicago theater"}, 
    SanFrancisco: {
      dates: ["5/2"], 
      address: "sf theater"
    }
  });
}

