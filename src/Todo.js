import React from 'react'

const Todo = ({ task, checked, onClick }) => (
  <li className={checked ? 'taskDone' : ''} onClick={onClick}>
    {task}
    <br></br>
  </li>

)

export default Todo