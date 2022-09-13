import React from "react";
import ExpenseItem from "../Components/self-learn/Expense/ExpenseItem";
import Card from "../Components/self-learn/UI/Card";
import NewExpense from "../Components/self-learn/NewExpense/NewExpense";
const ExpensePage = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2022, 5, 12),
        },
    ];

    //Dynamic pass props in component.
    const MyExpenses = expenses.map((expense) => {
        return (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        )
    });

    //call data from child to parent reference.
    const saveNewExpenseHandler = (enteredNewExpense) => {
        const expenseData = {
            ...enteredNewExpense,
            id: Math.random().toString(),
        };
        console.log(expenseData);
    }

    // print data as string.
    //console.log(expenses[0].date.toISOString());
    return (
        <>
            <NewExpense onSaveNewExpense={saveNewExpenseHandler} />
            {/* Note: onSaveNewExpense is custom attribute to pass data
            in parent component,like <input> is pre-define component in HTML and it's accept multiple functions like (onChange, onClick)
Same as we can create Own attribute (onSaveNewExpense (we can use any name here)). to pass data in child to parent component.
             */}
            <Card className="expenses">
                <h1>Expense Items are here:</h1>
                {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} /> */}
                {MyExpenses}
            </Card>
        </>
    )
}

export default ExpensePage;