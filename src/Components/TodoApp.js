import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

class TodoApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="TodoApp">
                <TodoAdd />
                <TodoList />
            </div>
        );
    }
}

export default TodoApp;