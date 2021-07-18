import React, {useState} from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleEnteredHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountEnteredHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateEnteredHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const newExpense = {
            title: enteredTitle,
            amount: parseFloat(enteredAmount),
            date: new Date(enteredDate),
        }
        props.onSavedForm(newExpense);

        setEnteredAmount("");
        setEnteredDate("");
        setEnteredTitle("");
        props.onDisplaySnippetForm();

        console.log(newExpense)
    }

    return (<form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" onChange={titleEnteredHandler} value={enteredTitle}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" onChange={amountEnteredHandler} value={enteredAmount}/>
                </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateEnteredHandler} value={enteredDate}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onDisplaySnippetForm}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>);
}

export default ExpenseForm;

    // const cancelClickHandler = () => {
    //     setDisplayedForm(snippetForm);
    // }

    // const expandedForm = (<form onSubmit={submitHandler}>
    //                     <div className="new-expense__controls">
    //                         <div className="new-expense__control">
    //                             <label>Title</label>
    //                             <input type="text" onChange={titleEnteredHandler} value={enteredTitle}/>
    //                         </div>
    //                         <div className="new-expense__control">
    //                             <label>Amount</label>
    //                             <input type="number" min="0.01" step="0.01" onChange={amountEnteredHandler} value={enteredAmount}/>
    //                         </div>
    //                         <div className="new-expense__control">
    //                             <label>Date</label>
    //                             <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateEnteredHandler} value={enteredDate}/>
    //                         </div>
    //                     </div>
    //                     <div className="new-expense__actions">
    //                         <button onClick={cancelClickHandler}>Cancel</button>
    //                         <button type="submit">Add Expense</button>
    //                     </div>
    //                 </form>);

    // const expandFormHandler = () => {
    //     setDisplayedForm(expandedForm);
    // }

    // const snippetForm = (<div><button onClick={expandFormHandler}>Add New Expense</button></div>)

    // const [displayedForm, setDisplayedForm] = useState(snippetForm);