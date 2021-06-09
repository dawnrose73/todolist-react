import React, {Component} from 'react'
import CompleteBtn from './buttons/CompleteBtn'
import EditBtn from './buttons/EditBtn'
import DeleteBtn from './buttons/DeleteBtn'

class Todo extends Component {

    
    UNSAFE_componentWillMount() {
        const {isCompleted, text} = this.props
        this.setState({
            completed: isCompleted,
            editMode: false,
            taskText: text,
            deleted: false,
        })
    }

    render() {
        return (
            <div className = {this.state.completed ? 'todo todo--completed' : 'todo'} style = {this.state.deleted ? {display: 'none'} : {display: 'flex'}}>
                <div className = 'todo__item' style = {this.state.editMode ? {display: 'none'} : {display: 'block'}}>{this.state.taskText}</div>
                <input type="text" size="16" className="todo__edit" style = {this.state.editMode ? {display: 'block'} : {display: 'none'}} value = {this.state.taskText}
                onChange = {this.handleChange}
                ></input>
                <div className = 'todo__buttons'>
                    <CompleteBtn    completeClick = {this.completeTask}
                                    completed = {this.state.completed}
                                    editMode = {this.state.editMode}
                    />
                    <EditBtn    editClick = {this.editTask}
                                editMode = {this.state.editMode}
                                completed = {this.state.completed}
                    />
                    <DeleteBtn  deleteClick = {this.deleteTask}
                                deleted = {this.state.deleted}
                    />
                </div>
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({
            taskText: event.target.value,
        })
    }

    completeTask = () => {
        this.setState({
            completed: !this.state.completed
        })
    }

    editTask = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    deleteTask = () => {
        this.setState({
            deleted: true
        })
    }


}

export default Todo