import React, {Component} from 'react'

class EditBtn extends Component {
    render() {
        const {editClick, editMode, completed} = this.props
        return (
            <button className = 'todo__edit-btn'
                    onClick = {editClick}
                    disabled = {completed}
            >
                <i className = {editMode ? 'fas fa-save' : 'fas fa-edit'}></i>
            </button>
        )
    }
}

export default EditBtn