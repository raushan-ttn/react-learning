import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    // here title is default variable and setTitle is callback function. we can use any any inplace of both.
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("updated");
        console.log(title) // show old title value, because it not change state imidiatly it's schedule to change. so that here print old value.

    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    )
}

export default ExpenseItem;