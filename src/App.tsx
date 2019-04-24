import * as React from "react";
import AddTaskForm from "./task/AddTaskForm";
import TaskList from "./task/TaskList";

export default class App extends React.Component {

    render() {
        return (
            <div>
                <AddTaskForm />
                <TaskList />
            </div>
        );
    }
}