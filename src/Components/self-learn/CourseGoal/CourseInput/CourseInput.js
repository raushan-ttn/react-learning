import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isvalid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    // set default value blank after form submit.
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        {/* set Dynamic inline styles over element */}

        {/* <label style={{ "color": !isvalid ? "red" : "black" }}>Course Goal</label> */}
        {/* <input style={{ backgroundColor: !isvalid ? "red" : "black", background: !isvalid ? "salvon" : "transparent" }} type="text" value={enteredValue} onChange={goalInputChangeHandler} /> */}

        {/* Dynamic classes add */}
        <label className={`form-control ${!isvalid ? "invalid" : '' }`}>Course Goal</label>
        <input className={`form-control ${!isvalid ? "invalid-back" : ''}`} type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
