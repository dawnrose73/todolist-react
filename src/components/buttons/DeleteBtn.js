import React, {Component} from 'react'

class DeleteBtn extends Component {
    render() {
        return (
            <button className = 'todo__delete-btn'>
                <i className ="fas fa-trash"></i>
            </button>
        )
    }
};

export default DeleteBtn;