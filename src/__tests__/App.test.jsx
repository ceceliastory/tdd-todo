import {shallow} from "enzyme";
import * as React from "react";
import App from "../App";

describe("App component", () => {

    let mountedApp;

    beforeEach(() => {
        mountedApp = shallow(<App/>);
    });

    test("should render the add task form", () => {
        expect(mountedApp.find('Connect(AddTaskForm)').length).toEqual(1)
    });

    test("should render the task list", () => {
        expect(mountedApp.find('Connect(TaskList)').length).toEqual(1)
    })
});