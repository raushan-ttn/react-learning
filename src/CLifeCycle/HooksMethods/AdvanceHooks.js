import React, { useReducer } from "react";


// List of AdvanceHooks like :useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useDebugValue
const AdvanceHooks = () => {
    return (
        <>
            <div className="ad-hooks-example">
                <h1>Advance Hooks Examples</h1>
                <h2 style={{ "color": "red" }}>*** use Reducer Hook Example ***</h2>
                <UseReducerHookExample />
            </div>
        </>
    )

}

// Use reducer hook is actully alternet or replacement of use state hook. both have same purpose.
// With the help of use reducer we can manage multiple state in one event at one time.

const UseReducerHookExample = () => {

    const reducer1 = (state1, actions) => {
        switch (actions.type) {
            case "INCREMENT":
                return { count: state1.count + 1, showText: state1.showText } // We need to define default value for other state.
            case "toggleShowText":
                return { count: state1.count, showText: !state1.showText }
            default:
                return state1;
        }

    }

    const [state2, dispatchB] = useReducer(reducer1, { count: 0, showText: false });

    return (
        <div>
            <h1>{state2.count}</h1>
            <button onClick={() => {
                dispatchB({ type: "INCREMENT" });
                dispatchB({ type: "toggleShowText" });
            }}
            >
                manage two state
            </button>
            {state2.showText && <div> This is showing</div>}
        </div>
    )

}
export default AdvanceHooks;