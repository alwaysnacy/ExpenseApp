import React, {useState} from "react"

import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter"
import ExpenseList from "./ExpenseList"
import ExpensesChart from "./ExpensesChart"

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterYearHandler = (filteredYear) => {
        setFilteredYear(filteredYear);
    }

    const filteredExpenseList = props.items.filter(e => e.date.getFullYear() == filteredYear)

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onFilterYear={filterYearHandler}/>
            <ExpensesChart expenses={filteredExpenseList}/>
            <ExpenseList expenses={filteredExpenseList}/>
        </Card>)
}

export default Expenses