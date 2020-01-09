import React from 'react'

const Todo = ({ task, checked }) => (
  <li className={checked ? 'taskDone' : ''} >
    {task}
    <br></br>
  </li>

)

export default Todo