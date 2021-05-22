import React from 'react';
import Card from '../Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css'

function Expenses (props) {
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