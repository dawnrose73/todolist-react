import React, {Component} from 'react';
import AddTodo from './AddTodo';
import FilterTodos from './FilterTodos';
import TodoList from './TodoList';
import Loader from './Loader';


class App extends Component {
    state = {
            todos: [],
            filtered: 'all',
            loading: true
    }
    
    componentDidMount() {
        this.getData();
        console.log(this.state.todos);
    }

    getData = () => {
        fetch('http://127.0.0.1:5000/tasks/')
        .then(response => response.json())
        .then(todos => {
          this.setState({
              todos: todos.data,
          }) 
        })
        .then(() => {
            this.setState({
                loading: false
            })
        })
    };

    completeTodo = (todo) => {
        fetch((`http://127.0.0.1:5000/tasks/edit/${todo.id}/`), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed : !todo.completed})
        })
        .then(() => this.getData())
    };

    removeTodo = (id) => {
        fetch((`http://127.0.0.1:5000/tasks/delete/${id}/`), {
            method: 'DELETE',
        }) 
        .then(() => this.getData()) 
    };

    editTodo = (id, value) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.task = value
                };
                return todo;
            })
        });
        fetch((`http://127.0.0.1:5000/tasks/edit/${id}/`), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task : value})
        })
        .then(() => this.getData())
    };

    addTodo = (task) => {
        fetch(('http://127.0.0.1:5000/tasks/add/'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { id: Date.now(), task: task, completed: false })
            })
            .then(() => this.getData())
    };

    changeFilter = (option) => {
        this.setState({
            filtered: option
        })
    }

    render() {
        return (
            <div className = 'container'>
                <header className = 'header'>
                    <h1 className = 'header__text'>Todo list</h1>
                </header>

                <div className = 'todo-form'>
                    <AddTodo createTodo = {this.addTodo}/>
                    <FilterTodos changeFilter = {this.changeFilter}/>
                </div>
                {this.state.loading && <Loader />}
                {this.state.todos.length ? 
                <TodoList   todos = {
                                        (this.state.filtered === 'all' && this.state.todos) ||
                                        (this.state.filtered === 'completed' && this.state.todos.filter(todo => todo.completed === true)) ||
                                        (this.state.filtered === 'uncompleted' && this.state.todos.filter(todo => todo.completed === false))
                            }
                            completeTodo = {this.completeTodo}
                            removeTodo = {this.removeTodo}
                            onCreate = {this.editTodo}

                /> : (this.state.loading ? null : <p className = 'no-todos'>No todos!</p>)
                }
            </div>
        )
    }
};

export default App;