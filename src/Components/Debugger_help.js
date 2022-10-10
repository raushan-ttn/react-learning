import React, { useRef, useState } from "react";

const Printstar = () => {
    let result = "";
    //debugger;
    for (let i = 0; i < 5; i++) {
        result += "*";
    }
    return result;
}

const AnotherPortals = () => {
    return (
        <div className="protal-component">Using Portal's to render this.</div>
    )
}

const AddUserForm = () => {
    // ref is alternative way to get/accessing user input values
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredUserage, setEnterdUserage] = useState('');

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // }

    // const userageChangeHandler = (event) => {
    //     setEnterdUserage(event.target.value);
    // }

    const AddUserHandler = (event) => {
        event.preventDefault();
        // console.log(nameInputRef.current.value); // We can get form field values with help of ref on form submit time.
        // With the help of ref we rarly manupulate dom and changing css class, it's not good practice.
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        console.log("Name:" + enteredName, "Age:" + enteredAge);
        // Reset value with help of ref.
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

       // Note: Sometime we have use case just read value not changing this value and manupulating dom, then this case
       // we can use ref to read values otherwise we can use state to handle use cases.
    }

    return (
        <>
            <form className="userLogin" onSubmit={AddUserHandler}>
                <h2>Add User Form (Ref example)</h2>
                <div className="userForm">
                    <label htmlFor="username">Username</label>
                    {/* we don't need to use value and onChange prop in case of ref, we need to simply access user input.
                    That's why we also known as uncontrolled component because we simply get value not changing or manupulating.

                    Controlled component: With the help of state accessing user input, this is called controlled component.
                    */}
                    <input
                        type="text"
                        className="username"
                        // onChange={usernameChangeHandler}
                        // value={enteredUsername}
                        ref={nameInputRef} // we can connect any html element with ref prop.
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        type="text"
                        // onChange={userageChangeHandler}
                        // value={enteredUserage}
                        ref={ageInputRef}
                    />
                    <button type="submit">Add User</button>
                </div>
            </form>
        </>
    )
}

export { AnotherPortals, AddUserForm };
export default Printstar;