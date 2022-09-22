import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        // console.log(expenseData);
        // call parent custom attribut function, to pass data in parent component.
        props.onSaveNewExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
            {/* Note: onSaveExpenseData is custom attribute to pass data
            in parent component,like <input> is pre-define component in HTML and it's accept multiple functions like (onChange, onClick)
Same as we can create Own attribute (onSaveExpenseData (we can use any name here)). to pass data in child to parent component.
             */}
        </div>
    )

}

export default NewExpense;