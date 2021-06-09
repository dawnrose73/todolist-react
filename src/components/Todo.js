import React, {Component} from 'react'

class Todo extends Component {
    render() {
        const {todo} = this.props
        return (
            <div className = 'todo'>
                <div className = 'todo__item'>{todo.text}</div>
                <div className = 'todo__buttons'></div>
            </div>
        )
    }
}

export default Todo