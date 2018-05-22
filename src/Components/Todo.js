import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.todo = this.props.todo;
        this._delTodo = this.props._delTodo;
    }

    render() {
        let classes = (this.props.todo.status === "COMPLETE") ? "todo-completed" : "";       
        return (
            <div className="todo" >
                <span className={ `todo-name ${ classes }` } >{ this.todo.name }</span>
                <i className="fa fa-trash del-icon" title="Delete" onClick={ this.delTodo.bind(this) }></i>
            </div>
        );
    }

    delTodo() {
        this._delTodo(this.props.todo.id);
    }
}

export default Todo;