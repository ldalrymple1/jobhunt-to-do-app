// IMPORTING REACT 
import React from 'react'
import ReactDOM from 'react-dom'

// IMPORTING COMPONENTS
import Todo from './Todo'
import News from './News'
import Weather from './Weather'
import Calendar from 'react-calendar'
import Clock from 'react-digital-clock'

// IMPORTING STYLING
import './styles/style.scss'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      newTodo: '',
      todos: [
        { id: 1, task: 'Delete LinkedIn Premium', checked: false },
        { id: 2, task: 'Call Elen at JDX', checked: true },
        { id: 3, task: 'Follow up email to Potato', checked: false },
        { id: 4, task: 'Do Wes Bos JavaScript30', checked: false },
        { id: 5, task: 'Do Codewars daily', checked: false },
        { id: 6, task: 'Sort out local storage for this app', checked: false },
        { id: 7, task: 'Style this app', checked: false },
        { id: 8, task: 'Clone project 2 and learn hooks', checked: false }
      ],
      date: new Date(),
      newNote: '',
      notes: [
        { id: 1, text: 'Organise a time to go up and see Code First Girls this week 💁‍♀️' },
        { id: 2, text: 'Collect parcel from the reception front desk 📦' }
      ]

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addNote = this.addNote.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.onChange = this.onChange.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
    this.shadow = this.shadow.bind(this)
  }

  componentDidMount(){
    const hero = document.querySelector('.hero')
    this.width = hero.offsetWidth
    this.height = hero.offsetHeight

    this.text = hero.querySelector('h1')
    this.walk = 25
  }

  handleChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }

  onChange(date) {
    this.setState({ date })
  }

  handleSubmit(e) {
    e.preventDefault()
    const newTodoo = {  id: this.state.todos.length + 1, task: this.state.newTodo, checked: false }
    const newListOfTodos = [ ...this.state.todos, newTodoo ]
    this.setState({ todos: newListOfTodos, newTodo: '' })
  }

  addNote(e) {
    e.preventDefault()
    const ANewNote = { id: this.state.notes.length + 1, text: this.state.newNote }
    const newListOfNotes = [ ...this.state.notes, ANewNote ]
    this.setState({ notes: newListOfNotes, newNote: '' })
  }

  handleClick(chosenTodo){
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
    const todos = this.state.todos.filter((elem => elem.id !== chosenTodo ))
    this.setState({ todos })
  }

  deleteNote(chosenNote) {
    const notes = this.state.notes.filter(elem => elem.id !== chosenNote)
    this.setState({ notes })
  }

  shadow(e) {
    const xWalk = Math.round(
      (e.screenX / this.width) * this.walk - this.walk / 2
    )
    const yWalk = Math.round(
      (e.screenY / this.height) * this.walk - this.walk / 2
    )
    this.text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(116, 114, 114, 0.379)
    `
    this.render()
  }


  render(){
    console.log(this.state, 're render')
    const notes = this.state.notes
    return (
      <div>
        <div className="hero">
          <h1 className="title" >Lydia's </h1>
          <h1 className="title" >Jobhunt Dashboard</h1>
        </div>

        <div className="parent-wrapper">
          <div className="left">

            <div className="section1">
              <Calendar 
                value={this.state.date}
                onChange={this.onChange}
                size={250}
              />
              <div className="clock-wrapper">
                <div className="weather-wrapper">
                  <Clock 
                    format={'hh-mm'}
                  />
                </div>
                <Weather />
              </div>
            </div>

            <h2 className="headlines-title todo">Todo List ✅</h2>
            <div className="todo-wrapper">
              <h3 className="todo-title">You have <span className="remaining-left">{this.tasksToComplete()}</span>tasks remaining</h3>
              <form onSubmit={this.handleSubmit}>
                <div className="todo-form">
                  <input onChange={this.handleChange} name="newTodo" value={this.state.newTodo} type="text" placeholder="e.g. Send a follow up Email to..."></input><button className="todo-button">Add</button>
                </div>
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
            </div>

            <div className="sticky-wrapper">
              {notes.map((elem, i) => (
                <div key={i} className="sticky-note">
                  <div className="note-header">
                    <i className="far fa-times-circle" onClick={() => this.deleteNote(elem.id)}></i>
     
                  </div>
                  <p className="note-text">{elem.text}</p>
                </div>
              ))}
            </div>

            <form  className="note-form" onSubmit={this.addNote}>
              <textarea onChange={this.handleChange} name="newNote" value={this.state.newNote} className="u-full-width" placeholder="Write your note here..." id="exampleMessage"></textarea>
              <button className="button">Add Note</button>
            </form>

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