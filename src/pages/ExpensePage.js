import React, { useState, useEffect } from "react";
import ExpenseItem from "../Components/self-learn/Expense/ExpenseItem";
import Card from "../Components/self-learn/UI/Card";
import NewExpense from "../Components/self-learn/NewExpense/NewExpense";
import FilterExpense from "../Components/self-learn/NewExpense/FilterExpense";
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
    // Define state to manage filters.
    const [newlyAddedExpense, newlyAddedExpenseSet] = useState(expenses);
    const [filteredYear, setFilteredYear] = useState('2020');
    const [filteredExpense, filteredExpenseSet] = useState(newlyAddedExpense);

    //call data from child to parent reference.
    const saveNewExpenseHandler = (enteredNewExpense) => {
        const expenseData = {
            ...enteredNewExpense,
            id: Math.random().toString(),
        };
        // Set data in state. for use in another component.
        /*         newlyAddedExpenseSet([
                    ...newlyAddedExpense,
                    expenseData
                ]); */
        // Another way to update state.
        newlyAddedExpenseSet((prevExpenses) => {  // we can use anything inplace of prevExpenses just variable name.
            return [expenseData, ...prevExpenses];
        });

        // Add newly added data in list with filter without page refresh.
        const newAddedData =[expenseData, ...newlyAddedExpense];
        const filteredExpenseData = newAddedData.filter(expense1 => {
            return expense1.date.getFullYear().toString() == filteredYear;
        });
        filteredExpenseSet(filteredExpenseData);
    };

    // print date as string.
    //console.log(expenses[0].date.toISOString());

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        // Create copy of item list
        // Include all elements which includes the search query
        let filteredExpenseData = [...newlyAddedExpense];
        filteredExpenseData = filteredExpenseData.filter(expense => {
            return expense.date.getFullYear().toString() == selectedYear;
        })
        // Trigger render with updated values
        filteredExpenseSet(filteredExpenseData);
    };

    // Render list with default value.
    useEffect(() => {
        const filteredExpenseData = filteredExpense.filter(expense1 => {
            return expense1.date.getFullYear().toString() == filteredYear;
        });
        filteredExpenseSet(filteredExpenseData);
    }, []);


    //     filteredExpenseSet(filteredExpense);

    //Dynamic pass props in component.
    const MyExpenses = filteredExpense.map((expense) => {
        return (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        );
    });

    // console.log(newlyAddedExpense,'newlyAddedExpense');
    return (
        <>
            <NewExpense onSaveNewExpense={saveNewExpenseHandler} />
            {/* Note: onSaveNewExpense is custom attribute to pass data
            in parent component,like <input> is pre-define component in HTML and it's accept multiple functions like (onChange, onClick)
Same as we can create Own attribute (onSaveNewExpense (we can use any name here)). to pass data in child to parent component.
             */}
            <Card className="expenses">
                <h1>Expense Items are here:</h1>
                <FilterExpense selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} /> */}
                {MyExpenses}
            </Card>
        </>
    )
}

export default ExpensePage;