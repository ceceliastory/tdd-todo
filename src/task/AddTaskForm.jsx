import * as React from "react";
import {connect} from "react-redux";
import {addTask} from "./task.actions";

export class AddTaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task: "",
            dueDate: ""
        }
    }

    render() {
        return (<div>
            <form onSubmit={this.addTask.bind(this)}>
                <div>Task: <input className={"task-description"} value={this.state.task}
                                  onChange={this.handleTaskChange.bind(this)}/></div>
                <div>Due date: <input className={"due-date"} value={this.state.dueDate}
                                      onChange={this.handleDueDateChange.bind(this)}/></div>

                <button type={"submit"}>Add Task</button>
            </form>
        </div>);
    }

    addTask(event) {
        event.preventDefault();

        this.props.addTask(this.state.task, this.state.dueDate);
    };

    handleTaskChange(event) {
        this.setState({
            task: event.target.value
        });
    };

    handleDueDateChange(event) {
        this.setState({
            dueDate: event.target.value
        });
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        addTask: (task, dueDate) => {
            dispatch(addTask(task, dueDate));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTaskForm)