import {shallow} from "enzyme";
import {AddTaskForm, mapDispatchToProps} from "../AddTaskForm";
import * as React from "react";
import {addTask} from "../task.actions";

describe("AddTaskForm Test", () => {

    test("should add task when 'add' button is clicked", () => {
        let mockAddTask = jest.fn();
        let app = shallow(<AddTaskForm addTask={mockAddTask}/>);

        app.find('.task').simulate('change', {target: {value: 'Take out the trash'}});
        app.find('.due-date').simulate('change', {target: {value: '04-05-2019'}});

        app.find('form').simulate('submit', {preventDefault: jest.fn()});

        expect(mockAddTask).toBeCalledWith('Take out the trash', '04-05-2019');
    });
});

describe("AddTaskForm mapDispatchToProps", () => {

    test("should map functions", () => {
        let mockDispatch = jest.fn();

        let props = mapDispatchToProps(mockDispatch);
        props.addTask("task name", "june 1");

        expect(mockDispatch).toHaveBeenCalledWith(addTask("task name", "june 1"));
    });

});