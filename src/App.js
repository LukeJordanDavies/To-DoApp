import React, { useState } from "react";
import TitleBanner from "./components/titleBanner";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import SearchBar from "./components/searchBar";
import BackButton from "./components/backButton";

function App() {
  // Stores the array of todo objects 
  const [todos, setTodos] = useState([
    {
      todoTitle: ''
    }
  ]);

  // Stores the searched object 
  const [search, setSearch] = useState([
    {
      todoTitle: ''
    }
  ]);

  // Clears the seach state object when remove button is pressed
  const clearSearch = () => {
    setSearch([
      {
        todoTitle: ''
      }
    ])
  };

  // Removes todo when delete button is pressed
  const removeTodo = (name) => {
    setTodos(todos.filter(todo => todo.todoTitle !== name));

    // Checks if search state is truthy then clears search state
    search[0].todoTitle && clearSearch()
  };

  // Search todo handler
  const onSearch = (searchTerm) => {
    const result = searchTerm.toLowerCase();

    setSearch(todos.filter(todo => todo.todoTitle.toLowerCase() === result))

    console.log(search);
  };

  return (
    <>
    <header>
      <SearchBar onSearch={onSearch}/>
      <TitleBanner />
      <AddTodo 
        todos={todos} 
        setTodos={setTodos}
      />
      <hr/>
    </header>

    <main>
      <TodoList 
        todos={search[0].todoTitle ? search : todos}   
        removeTodo={removeTodo}
      />
      {/* Button must only show when search is truthy */}
      <BackButton clearSearch={clearSearch} />
    </main>
    </>
  );
}

export default App;
