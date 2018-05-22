import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);        
    }

    getTodos() {
        // const todos = this.todos.map((todo) => {
        //             return <Todo todo={todo} />
        //         }            
        return this.props.todos.map((todo, index)=>{
                return <Todo todo={todo} key={index}/>
        });
    }

    render() {
        return (
            <div className="todo-list">
                { this.getTodos() }
            </div>
        );
    }
}

export default TodoList;