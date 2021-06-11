import React, {Component} from 'react';

class EditBtn extends Component {
    render() {
        const {isEdit, toggleEditTodo} = this.props;
        return (
            <button className = 'todo__edit-btn'
                    onClick = {() => toggleEditTodo(isEdit)}
            >
                <i className = 'fas fa-edit'></i>
            </button>
        )
    }
};

export default EditBtn;