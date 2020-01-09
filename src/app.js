import React from 'react'
import ReactDOM from 'react-dom'

import './styles/style.scss'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      newTodo: '',
      todos: [
        { task: 'Call Mary', checked: false },
        { task: 'Email Jack', checked: false }
      ]

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  handleChange(e) {
    // console.log(e.target.value)
    this.setState({ newTodo: e.target.value })
  }

  handleCheckboxChange(e) {
    this.setState({ checked: event.target.checked })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submitted')
    // this.state.todos.push(this.state.newTodo)

  }


  render(){
    console.log(this.state, 're render')
    return (
      <>
      <h1>Lydia's Todo App</h1>
      <form onSubmit={this.handleSubmit}>
        <input className="add"onChange={this.handleChange} type="text" name="todo" placeholder="e.g. Send a follow up Email to..."></input>
        <button>Add</button>
        <ul className="plates">
          {this.state.todos.map((elem, i) => (
            <div className="oneTodo" key={i}>
              <label>
                <input type="checkbox" className="box" checked={elem.checked} onChange={this.handleCheckboxChange} /><span><h3>{elem.task}</h3></span>
              </label>
            </div>
          ))}
          
          
        </ul>
       
        
      </form>
      </>
    )
  }
    
  
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)