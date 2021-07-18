import React, { useRef } from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setFilterTods }) => {
  const select = useRef();
  const inputHandel = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitbtn = (e) => {
    e.preventDefault();
    setTodos([
      {
        text: inputText,
        completed: false,
        id: Math.random(),
      },
      ...todos,
    ]);
    setInputText("");
    select.current.value = "all";
  };
  const change = (e) => {
    const completedTodos = todos.filter((el) => el.completed === true);
    const uncompletedTodos = todos.filter((el) => el.completed === false);
    // console.log(e.target.value);
    if (e.target.value === "all") {
      setFilterTods(todos);
    }
    if (e.target.value === "completed") {
      setFilterTods(completedTodos);
    }
    if (e.target.value === "uncompleted") {
      setFilterTods(uncompletedTodos);
    }
  };
  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={inputHandel}
        value={inputText}
      />
      <button className="todo-button" type="submit" onClick={submitbtn}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={change}
          ref={select}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
