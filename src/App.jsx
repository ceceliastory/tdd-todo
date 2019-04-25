import * as React from "react";
import AddTaskForm from "./task/AddTaskForm";

export default class App extends React.Component {

    render() {
        return (
            <div>
                <AddTaskForm />
            </div>
        );
    }
}