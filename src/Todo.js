import React from 'react'

const Todo = ({ task, checked, handleClick, deleteTodo }) => (
  <div className="list">
    <li className={checked ? 'list taskDone' : 'list'} onClick={handleClick}>
      {task}
      <br></br>
    </li>
    <i className="far fa-times-circle"onClick={deleteTodo}></i>
  </div>
)

export default Todo