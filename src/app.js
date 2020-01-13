import React from 'react'
import ReactDOM from 'react-dom'

import Todo from './Todo'
import News from './News'
import Weather from './Weather'

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
    this.handleClick = this.handleClick.bind(this)
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

  handleClick(chosenTodo){
    console.log(chosenTodo, 'chosenone')
    const todos = this.state.todos.map(todo => {
      if (chosenTodo === todo) return { ...todo, checked: !todo.checked }
      return { ...todo }
    })
    this.setState({ todos })
  }

  tasksToComplete(){
    console.log(this.state.todos.length, 'length')
  }


  render(){
    console.log(this.state, 're render')
    console.log(this.state.todos, 'the todos in state')
    console.log(this.state.todos.length, 'length')

    return (
      <div>
        <h1 className="title">Lydia's Jobhunt Dashboard</h1>
        <h4>calendar, delete item on to do</h4>
        <div className="parent-wrapper">
          <div className="left">
            <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} name="newTodo" value={this.state.newTodo} type="text" placeholder="e.g. Send a follow up Email to..."></input>
              <button>Add</button>
            </form>
            <ul>
              {this.state.todos.map((elem, i) => (
                <Todo 
                  key={i}
                  {...elem}
                  onClick={() => this.handleClick(elem)}
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