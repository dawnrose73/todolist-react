import React, {Component} from 'react';

class FilterTodos extends Component {
    render() {
        const {filterTodos} = this.props;
        return (
            <div className="todo-form__filter-todos">
                <select name="todos" className="todo-form__filter" onChange = {(event) => filterTodos(event.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>     
        )
    }
};

export default FilterTodos;

