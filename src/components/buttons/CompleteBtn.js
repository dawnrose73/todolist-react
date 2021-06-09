import React, {Component} from 'react'

class CompleteBtn extends Component {
    render() {
        const {completeClick, completed, editMode} = this.props
        return (
            <button className = 'todo__complete-btn'
                    onClick = {completeClick}
                    disabled = {editMode}
            >
                <i className = {completed ? 'fas fa-undo' : 'fas fa-check'}></i>
            </button>
        )
    }
}

export default CompleteBtn