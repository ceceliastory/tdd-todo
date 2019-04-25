import * as React from "react";
import {connect} from "react-redux";

export class TaskList extends React.Component {

    render() {
        return (
            <div>{this.displayTasks()}</div>
        );
    }

    displayTasks() {
        return this.props.tasks.map((task, index) => {
            return <div className={"task"} key={`task-${index}`}>Task: {task.name} is due on {task.dueDate}</div>
        })
    }
}

export function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, null)(TaskList)