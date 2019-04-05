import {addTask} from "../task.actions";

describe("Task actions", () => {

    test("create add task action", () => {
        let action = addTask("cool name", "june 1");

        expect(action).toEqual({
            type: "TASK_ADDED",
            payload: {
                taskName: "cool name",
                dueDate: "june 1"
            }
        })
    })
});