import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class TodoAdd extends Component {
    constructor(props) {
        super(props);
        this._addTodo = this.props._addTodo;
        this.addTodo = this.addTodo.bind(this);
    }

    render() {
        return (
            <div className="todo-add">
                <input ref="todoName" type="text" />
                <input type="button" value="add" onClick={ this.addTodo }/>
            </div>
        );
    }

    // Use redux to update the state and the respective view will re-render themselves
    addTodo() {
        console.log("Clicked");
        this._addTodo({
            name: this.refs.todoName.value,
            status: "OPEN"
        })
        this.refs.todoName.value = "";
    }

}

export default TodoAdd;