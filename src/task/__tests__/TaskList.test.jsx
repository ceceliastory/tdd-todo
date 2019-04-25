import {shallow} from "enzyme";
import * as React from "react";
import {mapStateToProps, TaskList} from "../TaskList";

describe("TaskList", () => {

    test("should display tasks", () => {
        // Given
        const tasks = [{name: "new task", dueDate: "10-02-2019"}];

        // When
        let taskList = shallow(<TaskList tasks={tasks}/>);

        // Then
        expect(taskList.find(".task").length).toBe(1);
        expect(taskList.find(".task").at(0).text()).toContain("new task");
    });
});

describe("TaskList mapStateToProps", () => {

    test("should map state to props", () => {
        let actual = mapStateToProps({tasks: [{name: "task 1", dueDate: "04-02-19"}]});

        let expected = {tasks: [{name: "task 1", dueDate: "04-02-19"}]};

        expect(actual).toEqual(expected)
    })
});