import React, {Component} from 'react';
import AddTodo from './AddTodo';
import FilterTodos from './FilterTodos';
import TodoList from './TodoList';


class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: "clean the floor",
                completed: false
            },
            {
                id: 2,
                title: "wash dishes",
                completed: false
            }
        ],
        filteredTodos: []
    };

    completeTodo = (id) => {
        this.setState({ 
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    };

    removeTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    };

    editTodo = (id, value) => {
        this.setState({
            
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.title = value
                }
                return todo;
            })
        })
    };

    addTodo = (title) => {
        this.setState({
            todos:  this.state.todos.concat([{
                        id: Date.now(),        
                        title,
                        completed: false
                    }])
        })
    };

    filterTodos = (option) => {
        switch(option) {
            case 'completed': 
                this.setState({
                    filteredTodos: this.state.todos.filter(todo => todo.completed !== false)
                });
                break;
            case 'uncompleted': 
                this.setState({
                    filteredTodos: this.state.todos.filter(todo => todo.completed !== true)
                });
                break;
            default:
                this.setState({
                    filteredTodos: []
                });
                break;
        }
    }

    render() {
        console.log(this.state.todos);
        return (
            <div className = 'container'>
                <header className = 'header'>
                    <h1 className = 'header__text'>Todo list</h1>
                </header>

                <div className = 'todo-form'>
                    <AddTodo createTodo = {this.addTodo}/>
                    <FilterTodos filterTodos = {this.filterTodos}/>
                </div>

                {this.state.todos.length ? 
                <TodoList   todos = {this.state.todos}
                            completeTodo = {this.completeTodo}
                            removeTodo = {this.removeTodo}
                            onCreate = {this.editTodo}
                            filteredTodos = {this.state.filteredTodos}
                /> : <p className = 'no-todos'>No todos!</p>}
            </div>
        )
    }
};

export default App;