import React, { useState, useEffect } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';

function App() {
  // post list
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    async function fetchPosts(){
      try {
        const response = await fetch('http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1')
        const data = await response.json()
        setPostList(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPosts()
    console.log('Post list');
  },[])
  useEffect(()=>{
    console.log('allways run after each render');
  })
  // todo list
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
  // todo form
  const handleTodoForm = (value) => {
    todoList.push(value)
    setTodoList([...todoList])
  }
  return (
    <div className="app">
      <ColorBox/>
      <hr/>
      <TodoForm onSubmit={handleTodoForm}/>
      <TodoList todos={todoList} onTodoClick={handleTodoList} />
      <hr/>
      <PostList posts={postList}/>
    </div>
  );
}

export default App;
