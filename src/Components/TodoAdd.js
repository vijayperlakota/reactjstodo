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
                <input className="text-box" ref="todoName" type="text" onKeyDown={ this.onEnterKey.bind(this) }/>
                {/* <input className="add-btn" type="button" value="add" onClick={ this.addTodo } /> */}
            </div>
        );
    }    

    // Use redux to update the state and the respective view will re-render themselves
    addTodo() {
        if(!this.refs.todoName.value) {
            // TODO: Use some jQuery growl or any other better handling. Not blocking 'alert'!!!
            alert('Please add some text for adding todo.');
            return;
        }
        this._addTodo({
            name: this.refs.todoName.value,
            status: "open"
        })
        this.refs.todoName.value = "";
    }

    onEnterKey(evt) {        
        var keyCode = evt.keyCode;
        if(keyCode === 13) {
            this.addTodo();
        }
    }
}

export default TodoAdd;