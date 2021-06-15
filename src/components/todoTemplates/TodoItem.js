import React, {Component} from 'react';
import CompleteBtn from '../buttons/CompleteBtn';
import EditBtn from '../buttons/EditBtn';
import DeleteBtn from '../buttons/DeleteBtn';


class TodoItem extends Component {
    render() {
        const {todo, completeTodo, removeTodo, toggleEditTodo, isEdit} = this.props;
        return (
            <div className = {todo.completed ? 'todo todo--completed' : 'todo'}>
                <div className = 'todo__item'>{todo.title}</div>
                            
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

/*
<button className = 'todo__complete-btn' 
        type = "button" 
        onClick = {() => completeTodo(todo.id)}
>
    <i className = {todo.completed ? 'fas fa-undo' : 'fas fa-check'}></i>
</button>

<button className = 'todo__edit-btn' 
        type = "button" 
        onClick = {() => toggleEditTodo(isEdit)} 
        disabled = {todo.completed} 
>
    <i className = 'fas fa-edit'></i>
</button>

<button className = 'todo__delete-btn' 
        type = "button" 
        onClick = {() => removeTodo(todo.id)}
>        
    <i className ="fas fa-trash"></i>
</button>
*/