import React, { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ])
  const handleTodoList = (item) => {
    const index = todoList.findIndex(x => x.id === item.id)
    if(index < 0) return
    const newTodoList = [...todoList]
    newTodoList.splice(index,1)
    setTodoList(newTodoList)
  }
  const handleTodoForm = (value) => {
    todoList.push(value)
    setTodoList([...todoList])
  }
  return (
    <div className="app">
      <ColorBox/>
      <TodoForm onSubmit={handleTodoForm}/>
      <TodoList todos={todoList} onTodoClick={handleTodoList} />
    </div>
  );
}

export default App;
