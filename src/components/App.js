import React, {Component} from 'react'
import TodoList from './TodoList'
import todos from '../fixtures'


class App extends Component {
    state = {
        todos: todos.slice()
    }
    render() {
        return (
            <div className = 'container'>
                <header className = 'header'>
                    <h1 className = 'header__text'>Todo list</h1>
                </header>
                <TodoList todos = {this.state.todos} />
            </div>
        )
    }
}

export default App