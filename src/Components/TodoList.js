import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Todo from './Todo';

class TodoList extends Component {

    getTodos() {
        // const todos = this.todos.map((todo) => {
        //             return <Todo todo={todo} />
        //         }            
        return this.props.todos.map((todo, index)=>{
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