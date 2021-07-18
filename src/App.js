import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTods] = useState([]);

  useEffect(() => {
    getTodoLocal();
  }, []);

  useEffect(() => {
    setFilterTods(todos);
    setTodoToLocal();
  }, [todos]);

  const setTodoToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getTodoLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", []);
    } else {
      let locoalTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(locoalTodo);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Aymen Todo list</h1>
      </header>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setFilterTods={setFilterTods}
      />
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
