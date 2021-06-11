import React, {Component} from 'react';

class CompleteBtn extends Component {
    render() {
        const {todo, completeTodo} = this.props;
        return (
            <button className = 'todo__complete-btn'
                    onClick = {() => completeTodo(todo.id)}
            >
                <i className = {todo.completed ? 'fas fa-undo' : 'fas fa-check'}></i>
            </button>
        )
    }
};

export default CompleteBtn;