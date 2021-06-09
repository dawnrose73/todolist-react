import React, {Component} from 'react'
import TodoList from './TodoList'
import todos from '../fixtures'


class App extends Component {
    render() {
        return (
            <div className = 'container'>
                <header className = 'header'>
                    <h1 className = 'header__text'>Todo list</h1>
                </header>
                <TodoList todos = {todos} />
            </div>
        )
    }
}

export default App