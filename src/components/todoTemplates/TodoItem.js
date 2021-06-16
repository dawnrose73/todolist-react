import React, {Component} from 'react';
import CompleteBtn from '../buttons/CompleteBtn';
import EditBtn from '../buttons/EditBtn';
import DeleteBtn from '../buttons/DeleteBtn';


class TodoItem extends Component {
    render() {
        const {todo, completeTodo, removeTodo, toggleEditTodo, isEdit} = this.props;
        return (
            <div className = {todo.completed ? 'todo todo--completed' : 'todo'}>
                <div className = 'todo__item'>{todo.task}</div>
                            
                <div className = 'todo__buttons'>
                    <CompleteBtn    todo = {todo}
                                    completeTodo = {completeTodo}
                    />
                    <EditBtn    todo = {todo}
                                toggleEditTodo = {toggleEditTodo}
                                isEdit = {isEdit}
                    />
                    <DeleteBtn  todo = {todo}
                                removeTodo = {removeTodo}
                    />
                    

                </div>
            </div>
        )
    }
};

export default TodoItem;