import React from 'react'
import ReactDOM from 'react-dom'

import Todo from './Todo'
import './styles/style.scss'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      newTodo: '',
      todos: [
        { task: 'Call Mary', checked: true },
        { task: 'Email Jack', checked: false }
      ]

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    // console.log(e.target.value)
    this.setState({ newTodo: e.target.value })
    // this.setState({
    //   todos: { [e.target.name]: e.target.value } 
    // })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submitted')
    const newTodoo = { task: this.state.newTodo, checked: false }
    const newListOfTodos = [ ...this.state.todos, newTodoo ]
    this.setState({ todos: newListOfTodos, newTodo: '' })
  }


  render(){
    console.log(this.state, 're render')
    console.log(this.state.todos)
    return (
      <>
      <h1>Lydia's Todo App</h1>
      <form onSubmit={this.handleSubmit}>
        <input className="add" onChange={this.handleChange} name="newTodo" type="text" placeholder="e.g. Send a follow up Email to..."></input>
        <button>Add</button>
      </form>
      <ul>
        {this.state.todos.map((elem, i) => (
          <Todo 
            key={i}
            {...elem}
          />
        ))}
      </ul>
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)