import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class TodoFilter extends Component {

    constructor(props) {
        super(props);
        this._onFilter = this.props._onFilter;    
        this.availableFilters = ['all', 'open', 'inprogress', 'complete'];
        this.filterDisplayNames = ['ALL', 'OPEN', 'IN PROGRESS', 'COMPLETE'];
    }

    onFilter(evt) {    
        evt.stopPropagation();
        let filter = evt.target.getAttribute('value');
        this._onFilter(filter);
    }    

    getFilters(activeFilter) {
        return (
            this.availableFilters.map((filter, index) => {
                let active = (filter === activeFilter) ? 'active' : "";
                return (
                    <li key={ index } className={ `filter ${active}` } value={filter}> 
                        { this.filterDisplayNames[index] }
                    </li>
                )
            })
        )
    }

    render() {
        return (
            <ul className="todo-filters" onClick={ this.onFilter.bind(this) }>                
                { this.getFilters(this.props.filter) }
            </ul>
        );
    }
}

/* 
    <li className="filter active" value="all"> ALL </li>
    <li className="filter" value="open"> OPEN </li>
    <li className="filter" value="inprogress"> IN PROGRESS </li>
    <li className="filter" value="complete"> COMPLETE </li> 
*/
export default TodoFilter;