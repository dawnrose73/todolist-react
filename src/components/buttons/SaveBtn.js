import React, {Component} from 'react';

class SaveBtn extends Component {
    render() {
        const {isEdit, toggleEditTodo} = this.props;
        return (
            <button className = 'todo__edit-btn'
                    type = "submit"
                    onClick = {() => toggleEditTodo(isEdit)}
            >
                <i className = 'fas fa-save'></i>
            </button>
        )
    }
};

export default SaveBtn;