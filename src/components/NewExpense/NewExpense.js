import React, { useState } from 'react';

import './NewExpense.css'
import Card from '../UI/Card'
import ExpenseForm from './ExpenseForm';
import SnippetForm from './SnippetForm'

const NewExpense = (props) => {

    const savedFormHandler = (newExpense) => {
        console.log('from newexpense', newExpense)
        props.onAddExpense({
            id: Math.floor(Math.random() * 100).toString(), 
            ...newExpense
        });
    }
    // Approach 1: change the entire display

    // const displaySnippetForm = () => {
    //     setDisplayedForm(<SnippetForm onExpandForm={expandFormHandler}></SnippetForm>)
    //  }
 
    //  const expandFormHandler = () => {
    //      setDisplayedForm(<ExpenseForm onSavedForm={savedFormHandler} onDisplaySnippetForm={displaySnippetForm}/>)
    //  }

    // const [displayedForm, setDisplayedForm] = useState(<SnippetForm onExpandForm={expandFormHandler}></SnippetForm>)

    // return (
    //     <Card className="new-expense">
    //         {displayedForm}
    //     </Card>)

    // Approach 2: Change a variable which determines which one to show
    const [isEditingForm, setIsEditingForm] = useState(false)
    const changeIseditingForm = () => {
        setIsEditingForm(false);
    }

    return (
        <Card className="new-expense">
            {!isEditingForm && <button onClick={() => setIsEditingForm(true)}>Add New Expense</button>}
            {isEditingForm && <ExpenseForm onSavedForm={savedFormHandler} onDisplaySnippetForm={changeIseditingForm}/>}
        </Card>)
};

export default NewExpense;
