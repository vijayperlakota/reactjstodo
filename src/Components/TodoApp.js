import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import '../styles/TodoApp.css';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.key = 1;
        this.sampleTodos = [
            {
                name: "One",
                status: "IN_PROGRESS",
                id: this.nextKey()
            },
            {
                name: "Two",
                status: "COMPLETE",
                id: this.nextKey()
            },
            {
                name: "Three",
                status: "OPEN",
                id: this.nextKey()
            }
        ];
        this.state = {
            todos: this.sampleTodos
        };
    }

    addTodo(todo) {        
        todo.id = this.nextKey();
        this.setState({
            todos: [...this.state.todos, todo]
        });
        // this.setState((prev, curr)=>{
        //     return {
        //         todo: [...prev.todos, todo]
        //     }
        // });
    }

    delTodo(id) {
        let result = this.state.todos.filter((todo) => {
            return todo.id != id;
        });
        this.setState({
            todos: result
        });
    }

    render() {
        // console.log("called render", this.state.todos);
        return (
            <div className="todo-app">
                <TodoAdd _addTodo={ this.addTodo.bind(this) }/>
                <TodoList todos={ this.state.todos } _delTodo={ this.delTodo.bind(this) }/>
            </div>
        );
    }

    nextKey() {
        return this.key++;
    }
}

export default TodoApp;