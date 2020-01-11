import React from 'react'

const Todo = ({ task, checked, onClick }) => (
  <div className="list">
    <li className={checked ? 'list taskDone' : 'list'} onClick={onClick}>
      {task}
      <br></br>
    </li>
    <button className="bin">🗑</button>

  
  </div>

)

export default Todo