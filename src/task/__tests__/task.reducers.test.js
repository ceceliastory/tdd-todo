import {tasksReducer} from "../task.reducers";
import {TASK_ADDED} from "../task.actions";

describe("Task reducer", () => {

    test("should add task after receiving TASK_ADDED action", () => {
        let state = tasksReducer([], {type: TASK_ADDED, payload: {taskName: "new task", dueDate: "june 1"}});

        expect(state).toEqual([{name: "new task", dueDate: "june 1"}]);
    });

    test("should not add task when receiving other action", () => {
        // @ts-ignore
        let state = tasksReducer([{name: "old task", dueDate: "jan 1"}], {type: "OTHER_TASK", payload: {}});

        expect(state).toEqual([{name: "old task", dueDate: "jan 1"}])
    })
});