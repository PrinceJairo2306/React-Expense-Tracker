import Cards from "../UI/Cards";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterSelectionHandler = (filterValue) => {
    setFilteredYear(filterValue);
  };

  const filterExpense = props.expenses.filter((items) => {
    return items.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Cards className="expenses">
        <ExpensesFilter
          onDefualtYearSelected={filteredYear}
          onFilterSelect={filterSelectionHandler}
        />
        <ExpenseChart expenses={filterExpense}/>
        <ExpenseList items={filterExpense} />
      </Cards>
    </div>
  );
}

export default Expenses;
