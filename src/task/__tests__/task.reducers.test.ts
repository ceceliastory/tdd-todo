import {tasksReducer} from "../task.reducers";
import {TASK_ADDED} from "../task.actions";
import {Task} from "../domain";

describe("Task reducer", () => {

    test("should add task after receiving TASK_ADDED action", () => {
        let state = tasksReducer([], {type: TASK_ADDED, payload: {taskName: "new task", dueDate: "june 1"}});

        expect(state).toEqual([new Task("new task", "june 1")]);
    });

    test("should not add task when receiving other action", () => {
        // @ts-ignore
        let state = tasksReducer([new Task("old task", "jan 1")], {type: "OTHER_TASK", payload: {}});

        expect(state).toEqual([new Task("old task", "jan 1")])
    })
});