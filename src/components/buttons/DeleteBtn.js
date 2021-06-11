import React, {Component} from 'react'

class DeleteBtn extends Component {
    render() {
        const {todo, removeTodo} = this.props;
        return (
            <button className = 'todo__delete-btn'
                    onClick = {() => removeTodo(todo.id)}
            >        
                <i className ="fas fa-trash"></i>
            </button>
        )
    }
};

export default DeleteBtn;