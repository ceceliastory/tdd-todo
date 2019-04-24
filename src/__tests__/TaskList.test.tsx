import {shallow} from "enzyme";
import * as React from "react";
import {mapStateToProps, TaskList} from "../TaskList";
import {Task} from "../task";

describe("TaskList", () => {

    test("should display tasks", () => {
        // Given
        const tasks = [new Task("new task", "10-02-2019")];

        // When
        let taskList = shallow(<TaskList tasks={tasks}/>);

        // Then
        expect(taskList.find(".task").length).toBe(1);
        expect(taskList.find(".task").at(0).text()).toContain("new task");
    });
});

describe("TaskList mapStateToProps", () => {

    test("should map state to props", () => {
        let actual = mapStateToProps({tasks: [new Task("task 1", "04-02-19")]});

        let expected = {tasks: [new Task("task 1", "04-02-19")]};

        expect(actual).toEqual(expected)
    })
});