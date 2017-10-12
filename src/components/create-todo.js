import React from 'react';
import _ from 'lodash';

export default class CreateToDo extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }
    render(){
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <div className="form-group">
                    <input type="text" placeholder="Add Task" ref="createInput" className="form-control addText" />
                    <button className="btn btn-secondary">Add</button>
                    {this.renderError()}
                </div>
            </form>
        
            )
    }
    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createTask(task);
        this.refs.createInput.value = '';
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a task.';
        } else if (_.find(this.props.todo, todo => todo.task === task)) {
            console.log('Task already exists.')
            return 'Task already exists.';
        } else {
            return null;
        }
    }
    renderError() {
        if (!this.state.error) { return null; }
        return <div style={{ color: 'red' }}>{this.state.error}</div>;
    }
}