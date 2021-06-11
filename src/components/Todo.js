import React, {Component} from 'react';
import CompleteBtn from './buttons/CompleteBtn';
import EditBtn from './buttons/EditBtn';
import DeleteBtn from './buttons/DeleteBtn';

class Todo extends Component {
    render() {
        const {todo, completeTodo} = this.props;
        return (
            <div className = {todo.completed ? 'todo todo--completed' : 'todo'}>
                <div className = 'todo__item'>{todo.title}</div>
                <input type="text" size="16" className="todo__edit" style = {{display: 'none'}} ></input>
                <div className = 'todo__buttons'>
                    <CompleteBtn todo = {todo} completeTodo = {completeTodo}/>
                    <EditBtn />
                    <DeleteBtn />
                </div>
            </div>
        )
    }
};

export default Todo;