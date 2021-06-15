import React, {Component} from 'react';

class EditBtn extends Component {
    render() {
        const {todo, toggleEditTodo, isEdit} = this.props;
        return (
            <button className = 'todo__edit-btn'
                    onClick = {() => toggleEditTodo(isEdit)}
                    disabled = {todo.completed}
            >
                <i className = 'fas fa-edit'></i>
            </button>
        )
    }
};

export default EditBtn;