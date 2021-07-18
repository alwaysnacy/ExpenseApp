
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {
    
    if (props.expenses.length > 0) {
        return (
            <div className='expenses-list'>
                {props.expenses.map((el) => (
                    <ExpenseItem 
                    key={el.id} 
                    title={el.title} 
                    amount={el.amount} 
                    date={el.date}/>))}
            </div>)
    }

    return (
        <h2 className='expenses-list__fallback'>No Expenses Found</h2>)
}

export default ExpenseList;