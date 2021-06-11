import React, {Component} from 'react';
import TodoItem from './todoTemplates/TodoItem';
import TodoEditItem from './todoTemplates/TodoEditItem';

class Todo extends Component {
    state = {
        isEdit: false
    }

    toggleEditTodo = (isEdit) => {
        this.setState({
            isEdit: !isEdit
        });
    }
    render() {
        const {todo, completeTodo, removeTodo, editTodo} = this.props;
        return (
            <div>
                {this.state.isEdit ? 
                <TodoEditItem   todo = {todo} 
                                removeTodo = {removeTodo}
                                toggleEditTodo = {this.toggleEditTodo} 
                                isEdit = {this.state.isEdit} 
                                editTodo = {editTodo}
                /> : 
                <TodoItem   todo = {todo} 
                            completeTodo = {completeTodo} 
                            removeTodo = {removeTodo} 
                            toggleEditTodo = {this.toggleEditTodo} 
                            isEdit = {this.state.isEdit}
                />}
            </div>
        )
    }
};

export default Todo;


