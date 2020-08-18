import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func
}
TodoList.defaultProps = {
  todo: [],
  onTodoClick: null
}

function TodoList(props) {
  const {todos, onTodoClick} = props
  const handleClick = (item) => {
   if(onTodoClick) {
     onTodoClick(item)
   }
  }
  return (
    <div>
      <ul className="todo-list">
        {todos.map(item => (
          <li
            key={item.id}
            onClick={() => handleClick(item)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;