import React from 'react'

const Todo = ({ task, checked, handleClick, deleteTodo }) => (
  <div className="list">
    <li className={checked ? 'list taskDone' : 'list'} onClick={handleClick}>
      {task}
      <br></br>
    </li>
    <button onClick={deleteTodo} className="bin">🗑</button>


  
  </div>

)

export default Todo