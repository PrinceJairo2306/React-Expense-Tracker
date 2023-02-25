import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing,setIsEditing] = useState(false);

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    const onEditHandler = () => setIsEditing(true);
    const onCancelHandler = () => setIsEditing(false);
    
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={onEditHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={onCancelHandler}  />}
            
        </div>
    )
}

export default NewExpense;