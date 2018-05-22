import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.todo = this.props.todo;
    }

    render() {
        return (
            <div className="todo">
                <span className="todo-name">{ this.todo.name }</span>
                <span className="del-icon"></span>
            </div>
        );
    }
}

export default Todo;