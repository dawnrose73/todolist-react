import React, {Component} from 'react';

class CompleteBtn extends Component {
    render() {
        const {isEdit, todo, completeTodo} = this.props;
        return (
            <button className = 'todo__complete-btn'
                    disabled = {isEdit ? true : false}
                    onClick = {() => completeTodo(todo)}
            >
                <i className = {todo.completed ? 'fas fa-undo' : 'fas fa-check'}></i>
            </button>
        )
    }
};

export default CompleteBtn;