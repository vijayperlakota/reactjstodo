import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Todo from './Todo';

class TodoList extends Component {

    getTodos() {
        // const todos = this.todos.map((todo) => {
        //             return <Todo todo={todo} />
        //         }            
        let filteredTodos = this.props.todos.filter((todo) => {
            return (this.props.filter === "all" || this.props.filter === todo.status);
        });
        return filteredTodos.map((todo, index)=>{
                return <Todo todo={todo} key={todo.id} _delTodo={ this.props._delTodo }/>
        });
    }

    render() {
        return (
            <div className="todo-list">
                { this.getTodos() }
            </div>
        );
    }
}

export default TodoList;