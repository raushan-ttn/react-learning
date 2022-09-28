import React, { Fragment, useState } from "react";


// List of Basic hooks like: UseState, UseEffect, UseContext.

const BasicHooks = () => {
    return (
        <React.Fragment>
            <div className="hooks-example">
                <h1>Hooks Examples</h1>
                <h2 style={{ "color": "red" }}>*** use State Hook Example ***</h2>
                <UseStateHookExample />
                <h2 style={{ "color": "red" }}>*** use Effect Hook Example ***</h2>
                <UseEffectHookExample />
            </div>
        </React.Fragment>
    )
}

// USE STATE example.
const UseStateHookExample = () => {
    const [counter, setCounter] = useState(0);
    const [enteredText, setEnteredText] = useState("Hello India");

    const incrementCounter = (props) => {
        setCounter(counter + 1); // mutate the constant value inside function directly.
    }

    const decrementCounter = () => {
        setCounter((prevState) => { // Another way to mutate constant value.
            return prevState - 1;
        });
    }

    const updateEnteredText = (event) => {
        let upText = event.target.value;
        setEnteredText(upText);
    }

    return (
        <Fragment>
            {counter}
            <button onClick={incrementCounter}>Increament</button><button onClick={decrementCounter}>Decrement</button>
            <div className="">
                <input type="text" onChange={updateEnteredText} /> {enteredText}
            </div>
        </Fragment>
    )
}

// USE EFFECT hooks

const UseEffectHookExample = () => {
    return (
        <>
            here example
        </>
    )
}







export default BasicHooks;
