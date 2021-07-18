import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos, setTodos, filterTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map((todo, index) => (
          <Todo
            todo={todo}
            key={todo.id}
            setTodos={setTodos}
            todos={todos}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
