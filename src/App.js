import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Todos from './components/Todos';
import { useSelector } from 'react-redux';

function App() {

  const select = useSelector(state => state.todo.todoList)

  return (
    <>
      <Todos />
      <TodoList list={select}/>
    </>
  );
}

export default App;
