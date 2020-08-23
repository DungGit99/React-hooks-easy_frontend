import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import PostSearchForm from './components/PostSearchForm';
import UseRef from './components/useRef';

function App() {
    // pagination
    const [pagination, setPagination] = useState({
      _page: 1,
      _limit: 10,
      _totalRows: 1,
    })
    const [filterPage, setFilterPage] = useState({
      _limit: 10,
      _page: 1,
    })
    const handlePageChange = (newPage) => {
      setFilterPage({
        ...filterPage,
        _page: newPage
      })
    }
  // post list
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    async function fetchPosts(){
      try {
        const paramString = queryString.stringify(filterPage)
        const response = await fetch(`http://js-post-api.herokuapp.com/api/posts?${paramString}`)
        // http://js-post-api.herokuapp.com/api/posts?_limit=2&_page=1
        const responseJSON = await response.json()
        const {data, pagination} = responseJSON
        setPostList(data)
        setPagination(pagination)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPosts()
  },[filterPage])
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
  // search form
  const handleSearchChange = (newSearch) => {
    setFilterPage({
      ...filterPage,
      _page: 1,
      title_like: newSearch // Backend quy định
      // http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1&title_like=Quis
    })
  }
  return (
    <div className="app">
      <div style={{display: 'none'}}>
        <ColorBox/>
        <hr/>
        <TodoForm onSubmit={handleTodoForm}/>
        <TodoList todos={todoList} onTodoClick={handleTodoList} />
      </div>
      <div className='center'>
        <PostSearchForm onSubmit={handleSearchChange}/>
        <PostList posts={postList}/>
        <Pagination pagination={pagination} onPageChange={handlePageChange}/>
      </div>
      <UseRef/>
    </div>
  );
}

export default App;
