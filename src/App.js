import React, { useState } from "react";
import TitleBanner from "./components/titleBanner";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";

import BackButton from "./components/backButton";

function App() {
  const initialState = [
    {
      '': ''
    }
  ];

  const [categories, setCategories] = useState([
    {
      category: '',
    }
  ]);

  // Stores the array of todo objects 
  const [todos, setTodos] = useState(initialState);

  // Stores the selected category
  const [selected, setSelected] = useState('');

  // Stores the searched object 
  const [search, setSearch] = useState(initialState);

  const [searchKey, setSearchKey] = useState('');

  const [notFound, setNotFound] = useState(false);

  // Clears the seach state object when remove button is pressed
  const clearSearch = () => {
    setSearch(initialState)
    setNotFound(false);
  };

  // Removes todo when delete button is pressed
  const removeTodo = (categoryName, todoName) => {  
    setTodos(todos.filter(todo => todo[categoryName] !== todoName));

    // Checks if search state is truthy then clears search state
    search[0][categoryName] && clearSearch();
  };

  // Search todo handler
  const onSearch = (searchTerm) => {
    const result = searchTerm.toLowerCase();
    
    const foundTodo = todos.find(todo => {
      const key = Object.keys(todo);
      setSearchKey(key[0]);
        
      return (
        todo[key].toLowerCase() === result 
      )
    });
    
    if (foundTodo) {
      setSearch([foundTodo])
    } else {
      setNotFound(true);
    }
  };

  return (
    <>
    <header>
      <TitleBanner 
        onSearch={onSearch} 
        todos={todos}
        setTodos={setTodos}
        categories={categories}
        setCategories={setCategories}
        selected={selected}
        setSelected={setSelected}
      />
      <hr/>
    </header>

    <main>
    <AddTodo 
        todos={todos} 
        setTodos={setTodos}
        categories={categories}
        selected={selected}
      />
      <TodoList 
        todos={search[0][searchKey] ? search : todos}   
        removeTodo={removeTodo}
        selected={selected}
      />
      {search[0][searchKey] && <BackButton clearSearch={clearSearch} />}
      {notFound && 
      <div>
        {/* change to search not found or summin */}
        <p>here</p>
        <BackButton clearSearch={clearSearch} />
      </div>
      }
    </main>
    </>
  );
}

export default App;
