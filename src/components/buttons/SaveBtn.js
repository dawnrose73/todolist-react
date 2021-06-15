import React, {Component} from 'react';

class SaveBtn extends Component {
    render() {
        return (
            <button className = 'todo__edit-btn'
                    type = "submit"
            >
                <i className = 'fas fa-save'></i>
            </button>
        )
    }
};

export default SaveBtn;