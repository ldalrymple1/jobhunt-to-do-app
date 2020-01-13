import React from 'react'
import ReactDOM from 'react-dom'

import Todo from './Todo'
import News from './News'
import Weather from './Weather'
import Calendar from 'react-calendar'

import './styles/style.scss'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      newTodo: '',
      todos: [
        { id: 1, task: 'Call Mary', checked: true },
        { id: 2, task: 'Email Jack', checked: false }
      ],
      date: new Date()

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.onChange = this.onChange.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  handleChange(e) {
    this.setState({ newTodo: e.target.value })
    // this.setState({
    //   todos: { [e.target.name]: e.target.value } 
    // })
  }

  onChange(date) {
    this.setState({ date })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submitted')
    const newTodoo = {  id: this.state.todos.length + 1, task: this.state.newTodo, checked: false }
    const newListOfTodos = [ ...this.state.todos, newTodoo ]
    this.setState({ todos: newListOfTodos, newTodo: '' })
  }

  handleClick(chosenTodo){
    console.log(chosenTodo, 'chosenone')
    const todos = this.state.todos.map(todo => {
      if (chosenTodo === todo) return { ...todo, checked: !todo.checked }
      return { ...todo }
    })
    this.setState({ todos })
  }

  tasksToComplete(todos){
    todos = this.state.todos
    const remaining = todos.filter(elem => {
      if (elem.checked === false) {
        return elem
      }
    })
    return remaining.length


  }

  deleteTodo(chosenTodo){
    console.log('clicked')
    console.log(chosenTodo, 'to be dellled')

    const todos = this.state.todos.filter((elem => elem.id !== chosenTodo ))
    this.setState({ todos })
    console.log(todos, 'after render')

  }


  render(){
    console.log(this.state, 're render')
    console.log(this.state.todos, 'the todos after render')

    return (
      <div>
        <h1 className="title">Lydia's Jobhunt Dashboard</h1>
        <h4>calendar, delete item on to do</h4>
        <div className="parent-wrapper">
          <div className="left">
            <Calendar 
              value={this.state.date}
              onChange={this.onChange}
            />
            <h3>You have <span className="remaining-left">{this.tasksToComplete()}</span>tasks remaining</h3>
            <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} name="newTodo" value={this.state.newTodo} type="text" placeholder="e.g. Send a follow up Email to..."></input>
              <button>Add</button>
            </form>
            <ul>
              {this.state.todos.map((elem, i) => (
                <Todo 
                  key={i}
                  {...elem}
                  handleClick={() => this.handleClick(elem)}
                  deleteTodo={() => this.deleteTodo(elem.id)}
                  onChange={() => this.tasksToComplete}

                />
              ))}
            </ul>
            <Weather />
          </div>

          <div className="right">
            <News />
          </div>



        </div>
        
 
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)