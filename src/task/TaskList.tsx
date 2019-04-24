import * as React from "react";
import {RootState} from "../index";
import {connect} from "react-redux";
import {Task} from "./domain";

interface ITaskListProps {
    tasks?: Task[]
}

export class TaskList extends React.Component<ITaskListProps, any> {

    render() {
        return (
            <div>{this.displayTasks()}</div>
        );
    }

    private displayTasks = () => {
        return this.props.tasks.map((task: Task, index: number) => {
            return <div className={"task"} key={`task-${index}`}>Task: {task.name} is due on {task.dueDate}</div>
        })
    }
}

export function mapStateToProps(state: RootState): ITaskListProps {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, null)(TaskList)