import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

    const [enterdTitle, setEnteredTitle] = useState('');
    const [enterdAmount, setEnteredAmount] = useState('');
    const [enterdDate, setEnteredDate] = useState(''); //if type is integer then will define integer.

    // Alternative way to use multiple state.best way to do above split way not combine way.
    // const [userInput, setUserInput] = useState({
    //     enterdTitle: '',
    //     enterdAmount: '',
    //     enterdDate: ''
    // });

    const titleChangeHandler = (event) => {
        // multiple state approach
        setEnteredTitle(event.target.value);

        //another approach below like.
        /*         setUserInput({
                    ...userInput,
                    enterdTitle: event.target.value,
                }) */
        // Note: issue in this approach is we are coping other object to updating an object.another issue in
        // In that way react schedule the state Update, in that way we can pick wrong state snapshot.
        /** Third way  and recommand way (React will garunted update state instantly)*/

        // setUserInput((prevState) => {
        //     return { ...prevState, enterdTitle: event.target.value };
        // });
    };

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterdAmount: event.target.value,
        // })
    }

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterdDate: event.target.value,
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterdTitle,
            amount: enterdAmount,
            date: new Date(enterdDate)
        };
        console.log(expenseData);
        // Two way binding,if we change the state then value will be automatically changed,this is very important in form submission.
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enterdTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text" min="0.01" value={enterdAmount} step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" value={enterdDate} max="2022-09-13" onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )

}

export default ExpenseForm;