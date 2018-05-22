import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.todo = this.props.todo;
    }

    render() {
        let classes = (this.props.todo.status === "COMPLETE") ? "todo-completed" : "";       
        return (
            <div className="todo" >
                <span className={ `todo-name ${ classes }` } >{ this.todo.name }</span>
                <i className="fas fa-trash-alt" ></i>
            </div>
        );
    }
}

export default Todo;