import React, {Component} from 'react'

class DeleteBtn extends Component {
    render() {
        const {deleteClick} = this.props
        return (
            <button className = 'todo__delete-btn'
                    onClick = {deleteClick}
            >
                <i className ="fas fa-trash"></i>
            </button>
        )
    }
}

export default DeleteBtn