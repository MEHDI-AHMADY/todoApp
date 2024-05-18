import React , { useState } from 'react';
import { FaPlusSquare } from "react-icons/fa";
import Todo from './Todo.js';

function TodoList() {

    const [todos , setTodos] = useState([]);
    const [todoTitle , setTodoTitle] = useState('');
    const [status , setStatus] = useState('all');

    const titleHandler = (e) => {
        setTodoTitle(e.target.value)
    }

    const addTodo = (e) => {
        e.preventDefault();
        let newTodoObj = {
            id : todos.length + 1 ,
            title : todoTitle,
            completed : false
        }

        setTodos (prevTodos => {
            return [...prevTodos , newTodoObj]
        })

        setTodoTitle ('')
    }

    const removeTodo = (todoId) => {
        let newTodos = todos.filter (todo => {
            return todo.id !== todoId
        })

        setTodos (newTodos)
    }

    const editTodo = (todoId) => {
       let newTodos = [...todos];
       newTodos.forEach(todo => {
        if(todo.id === todoId) {
            todo.completed = !todo.completed
        }
       })

        setTodos (newTodos)
    }
    
    const statusHandler = (e) => {
        setStatus (e.target.value)
    }

  return (
    <div className='container grid justify-items-center gap-20 sm:gap-4 lg:grid-cols-2 mt-28'>
        <div className='flex flex-col items-center gap-2 sm:flex-row h-[40px]'>
            <form action="#" className='flex items-center shadow-md' onSubmit={(e) => addTodo(e)}>
                <input type="text" className='p-2 w-[220px] sm:w-[300px] bg-slate-500 focus:outline-0 text-white/80' value={todoTitle} onChange={(e) => titleHandler(e)} />
                <div className='bg-slate-400 p-3 cursor-pointer transition-colors duration-200 hover:bg-slate-50' onClick={addTodo}><FaPlusSquare /></div>
            </form>
            <div className='shadow-md'>
                <select id="select" onChange={(e) => statusHandler(e)} className='outline-none p-2 bg-slate-500 text-white cursor-pointer'>
                    <option value="all">All</option>
                    <option value="uncompleted">Uncompleted</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
        </div>

        <div className='flex flex-col items-center'>
           {status === 'all' && todos.map(todo => {
            return <Todo key={todo.id} {...todo} onRemove={removeTodo} onEdit={editTodo}></Todo>
           })}

           {status === 'completed' && todos.filter(todo => todo.completed).map(todo => {
            return <Todo key={todo.id} {...todo} onRemove={removeTodo} onEdit={editTodo}></Todo>
           })}

           {status === 'uncompleted' && todos.filter(todo => !todo.completed).map(todo => {
            return <Todo key={todo.id} {...todo} onRemove={removeTodo} onEdit={editTodo}></Todo>
           })}
        </div>
    </div>
  )
}

export default TodoList