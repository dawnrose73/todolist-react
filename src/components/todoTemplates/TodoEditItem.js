import React, {Component} from 'react';

class TodoEditItem extends Component {
    render() {
        const {todo, removeTodo, toggleEditTodo, isEdit, editTodo} = this.props;
        const input = {
            value: todo.title,
        }
        const submitHandler = (event) => {
            event.preventDefault();
            console.log('---', input.value);
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
                            input.value = event.target.value;
                            return input.value
                        }}
                />
                            
                <div className = 'todo__buttons'>
                    
                    <button className = 'todo__complete-btn' type = "button" disabled = {true}>
                        <i className = 'fas fa-check'></i>
                    </button>

                    <button className = 'todo__edit-btn' type = "submit" >
                        <i className = 'fas fa-save'></i>
                    </button>
                    
                    <button className = 'todo__delete-btn' type = "button" onClick = {() => removeTodo(todo.id)}>        
                        <i className ="fas fa-trash"></i>
                    </button>

                </div>
            </form>
        )
    }
}

export default TodoEditItem;
