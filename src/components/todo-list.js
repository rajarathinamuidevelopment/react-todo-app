import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todo-list-header';
import TodosListItem from './todo-list-item';

export default class TodosList extends React.Component{
    renderItems(){
        const props = _.omit(this.props,'todos')
        return _.map(this.props.todos,(todo,index)=> <TodosListItem key={index} {...todo} {...this.props} />);
    }
    render(){
        console.log(this.props.todos)
        return (
        <table className="table">
            <TodosListHeader />
            <tbody>
                {this.renderItems()}
            </tbody>

        </table>)
    }
}