import React, { useState } from "react";
import TitleBanner from "./components/titleBanner";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";

function App() {
  const [todos, setTodos] = useState([
    {
      todoTitle: '',
      completed: false
    }
  ])

  return (
    <>
    <header>
      <TitleBanner />
      <AddTodo todos={todos} setTodos={setTodos}/>
      <hr/>
    </header>

    <main>
      <TodoList todos={todos}/>
    </main>
    </>
  );
}

export default App;
