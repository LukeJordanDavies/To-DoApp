import React, { useState } from "react";
import TitleBanner from "./components/titleBanner";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";

function App() {
  const [todos, setTodos] = useState([])

  return (
    <>
    <header>
      <TitleBanner />
      <AddTodo todos={todos} setTodos={setTodos}/>
    </header>
    <main>
      <TodoList todos={todos}/>
    </main>
    </>
  );
}

export default App;
