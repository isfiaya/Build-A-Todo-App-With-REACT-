import React from "react";

const Todo = ({ todo, setTodos, todos, index }) => {
  const deletItem = (e) => {
    const arr = todos.filter((item) => item.id !== todo.id);
    setTodos(arr);
  };

  const completed = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item  ${todo.completed ? "completed" : ""} `}>
        {todo.text}
      </li>
      <button className="complete-btn" onClick={completed}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deletItem}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
