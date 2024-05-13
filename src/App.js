import React from 'react';
import Header from './Components/TodoList/Header.js';
import TodoList from './Components/TodoList/TodoList.js';

function App() {
  return (
    <div className='container mx-auto h-screen px-2 font-poppins'>
        <Header></Header>
        <TodoList></TodoList>
    </div>
  )
}

export default App