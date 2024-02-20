import React, { useState } from "react";
import TitleBanner from "./components/titleBanner";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import SearchBar from "./components/searchBar";
import BackButton from "./components/backButton";

function App() {
  const initialState = [
    {
      todoTitle: ''
    }
  ];

  // Stores the array of todo objects 
  const [todos, setTodos] = useState(initialState);

  // Stores the searched object 
  const [search, setSearch] = useState(initialState);

  const [notFound, setNotFound] = useState(false);

  // Clears the seach state object when remove button is pressed
  const clearSearch = () => {
    setSearch(initialState)
    setNotFound(false);
  };

  // Removes todo when delete button is pressed
  const removeTodo = (name) => {
    setTodos(todos.filter(todo => todo.todoTitle !== name));

    // Checks if search state is truthy then clears search state
    search[0].todoTitle && clearSearch();
  };

  // Search todo handler
  const onSearch = (searchTerm) => {
    const result = searchTerm.toLowerCase();

    const foundSearch = todos.find(todo => todo.todoTitle.toLowerCase() === result);

    if (foundSearch) {
      setSearch(todos.filter(todo => todo.todoTitle.toLowerCase() === result));
    } else {
      setNotFound(true);
    }
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
      {search[0].todoTitle && <BackButton clearSearch={clearSearch} />}
      {notFound && 
      <div>
        <p>here</p>
        <BackButton clearSearch={clearSearch} />
      </div>
      }
    </main>
    </>
  );
}

export default App;
