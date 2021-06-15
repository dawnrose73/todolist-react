import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        value: ''
    };

    changeInput = (event) => {
        this.setState({
            value: event.target.value
        })
    };

    render() {
        const {createTodo} = this.props;

        const submitHandler = (event) => {
            event.preventDefault();
            if (this.state.value.trim()) {
                createTodo(this.state.value);
                this.setState({
                    value: ''
                })
            }
        };

        return (
            <form   className = 'todo-form__new-todo'
                    onSubmit = {submitHandler}
            >
                <input  type="text" 
                        className="todo-form__todo-input" 
                        onChange = {this.changeInput}
                        value = {this.state.value}
                />
                <button className="todo-form__todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            </form>
        )
    }
};

export default AddTodo;

        