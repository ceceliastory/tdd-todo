import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addTask} from "./task.actions";

interface IAddTaskFormState {
    task: string
    dueDate: string
}

interface IAddTaskFormProps {
    addTask: (task: string, dueDate: string) => void
}

export class AddTaskForm extends React.Component<IAddTaskFormProps, IAddTaskFormState> {

    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            task: "",
            dueDate: ""
        }
    }

    render() {
        return (<div>
            <form onSubmit={this.addTask.bind(this)}>
                <div>Task: <input className={"task"} value={this.state.task}
                                  onChange={this.handleTaskChange.bind(this)}/></div>
                <div>Due date: <input className={"due-date"} value={this.state.dueDate}
                                      onChange={this.handleDueDateChange.bind(this)}/></div>

                <button type={"submit"}>Add Task</button>
            </form>
        </div>);
    }

    private addTask(event: any) {
        event.preventDefault();

        this.props.addTask(this.state.task, this.state.dueDate);
    }

    private handleTaskChange(event: any) {
        this.setState({
            task: event.target.value
        });
    }

    private handleDueDateChange(event: any) {
        this.setState({
            dueDate: event.target.value
        });
    }
}

export function mapDispatchToProps(dispatch: Dispatch): IAddTaskFormProps {
    return {
        addTask: (task: string, dueDate: string) => {
            dispatch(addTask(task, dueDate));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTaskForm)