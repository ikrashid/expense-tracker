import React, {useState} from 'react';
import Card from '../../UI/Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpenseFilter from '../ExpensesFilter/ExpensesFilter'
import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangedHandler = (year) =>{
        // sets the state
        setFilteredYear(year);
    }
    return(
        <Card className="expenses">
            <ExpenseFilter onChangeFilter = {filterChangedHandler} selectedYear = {filteredYear}/>
            console.log(props.expenses);
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