import React from 'react';
import Card from '../UI/Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css'

const Expenses = (props) => {
    return(
        <Card className="expenses">
            {props.expenses.map(expense => <ExpenseItem 
                key = {expense.id}
                title= {expense.title}
                amount = {expense.amount}
                date = {expense.date}
            />)}
        </Card>
    )
}

export default Expenses;