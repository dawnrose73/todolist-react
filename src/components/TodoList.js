import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        const {todos, completeTodo, removeTodo, onCreate} = this.props;
        const todolist = todos.map(todo => 
            <li key = {todo.id} className = "todolist__item">
                <Todo   todo = {todo}
                        completeTodo = {completeTodo}
                        removeTodo = {removeTodo}
                        editTodo = {onCreate}
                />
            </li>
        )
        return (
            <div className = 'todolist'>
                <ul className = 'todolist__items'>
                    {todolist}
                </ul>
            </div>
        )
    }
};

export default TodoList;