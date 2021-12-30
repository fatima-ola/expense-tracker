import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowExpenseForm(false);
  };

  const showExpenseFormHandler = (event) => {
    event.preventDefault();
    setShowExpenseForm(true);
  };

  const cancelFormHandler = () => {
    setShowExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!showExpenseForm && (
        <button type="button" onClick={showExpenseFormHandler}>
          Add New Expense
        </button>
      )}
      {showExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelForm={cancelFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
