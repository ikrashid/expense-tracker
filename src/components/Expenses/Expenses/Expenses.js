import React, {useState} from 'react';
import Card from '../../UI/Card/Card';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpenseFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from '../ExpensesChart/ExpensesChart';
import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangedHandler = (year) =>{
        // sets the state
        setFilteredYear(year);
    }
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);
    
    return(
        <Card className="expenses">
            <ExpenseFilter onChangeFilter = {filterChangedHandler} selectedYear = {filteredYear}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses}/>
        </Card>
    )
}

export default Expenses;