import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    getTodos() {
        return (
            <div>Test Todo 1</div>
        );
    }

    render() {
        return (
            <div className="todolist">
                { this.getTodos() }
            </div>
        );
    }
}

export default TodoList;