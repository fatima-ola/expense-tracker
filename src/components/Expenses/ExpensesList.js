import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const deleteExpenseHandler = (expenseID) => {
    const remainingExpense = props.items.filter((item) => {
      return item.id !== expenseID;
    });
    props.setExpenses(remainingExpense);
  };

  if (props.items.length === 0) {
    return <h2 className="expenses-list_fallback">Found no expenses.</h2>;
  }

  return (
    <li className="expenses-list">
      {props.items.map((expense) => {
        return (
          <div key={expense.id}>
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              id={expense.id}
              deleteExpenseHandler={deleteExpenseHandler}
            />
          </div>
        );
      })}
    </li>
  );
};

export default ExpensesList;
