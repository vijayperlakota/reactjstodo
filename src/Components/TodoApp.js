import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import '../styles/TodoApp.css';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.sampleTodos = [
            {
                name: "One",
                status: "IN_PROGRESS"
            },
            {
                name: "Two",
                status: "COMPLETE"
            },
            {
                name: "Three",
                status: "OPEN"
            }
        ];
    }

    render() {
        return (
            <div className="todo-app">
                <TodoAdd />
                <TodoList todos={this.sampleTodos}/>
            </div>
        );
    }
}

export default TodoApp;