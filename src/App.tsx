import * as React from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

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