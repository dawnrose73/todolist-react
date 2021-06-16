import React, {Component} from 'react';
import CompleteBtn from '../buttons/CompleteBtn';
import SaveBtn from '../buttons/SaveBtn';
import DeleteBtn from '../buttons/DeleteBtn';

class TodoEditItem extends Component {
    render() {
        const {todo, removeTodo, toggleEditTodo, isEdit, editTodo} = this.props;
        const input = {
            value: todo.task
        }
        const submitHandler = (event) => {
            event.preventDefault();
            toggleEditTodo(isEdit);
            if (input.value.trim()) {
                editTodo(todo.id, input.value);
                
            }
        }
        return(
            <form className = 'todo' onSubmit = {submitHandler}>
                <input  type="text" size="16" 
                        className="todo__edit" 
                        defaultValue = {input.value}
                        onChange = {event => {
                            input.value = event.target.value
                        }
                    }
                />
                            
                <div className = 'todo__buttons'>
                    <CompleteBtn    todo = {todo}
                                    isEdit = {isEdit} 
                    />
                    <SaveBtn />
                    <DeleteBtn  todo = {todo}
                                removeTodo = {removeTodo}
                    /> 
                    

                </div>
            </form>
        )
    }
}

export default TodoEditItem;