import React, {Component} from 'react'
import Todo from './Todo'

class TodoList extends Component {
    render() {
        const todolist = this.props.todos.map(todo => 
            <li key = {todo.id} className = "todolist__item">
                <Todo todo = {todo} />
            </li>
        )
        return (
            <div className = 'todolist'>
                <ul className = 'todolist__items'>
                    {todolist}
                </ul>
            </div>
        )
    }
}

export default TodoList