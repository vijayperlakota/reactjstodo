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
        this.state = {
            todos: this.sampleTodos
        };
    }

    addTodo(todo) {        
        this.setState({
            todos: [...this.state.todos, todo]
        });
        // this.setState((prev, curr)=>{
        //     return {
        //         todo: [...prev.todos, todo]
        //     }
        // });
    }

    render() {
        // console.log("called render", this.state.todos);
        return (
            <div className="todo-app">
                <TodoAdd _addTodo={ this.addTodo.bind(this) }/>
                <TodoList todos={ this.state.todos } />
            </div>
        );
    }
}

export default TodoApp;