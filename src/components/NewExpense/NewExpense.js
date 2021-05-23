import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [showExpenseForm, setShowExpenseForm] = useState(false);
    const onShowExpenseForm = () =>{
        setShowExpenseForm((prevState) => !prevState)
    }
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setShowExpenseForm(false);
    }
    return (
        <div className="new-expense">
            {showExpenseForm ? 
                (<ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} showExpenseForm={onShowExpenseForm}/>)
                :
                (<button onClick={onShowExpenseForm}>Add New Expense</button>)
            }       
        </div>
    )
}
export default NewExpense;