import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoAdd extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="todo-add">
                <input type="text" value="" />
                <input type="button" value="add" />
            </div>
        );
    }
}

export default TodoAdd;