import React, {Component} from 'react';

class EditBtn extends Component {
    render() {
        return (
            <button className = 'todo__edit-btn'>
                <i className = 'fas fa-edit'></i>
            </button>
        )
    }
};

export default EditBtn;