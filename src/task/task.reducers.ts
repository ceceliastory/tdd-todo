import {AddTaskAction, TASK_ADDED} from "./task.actions";
import {Task} from "./domain";

export const tasksReducer = (state: Task[] = [], action: AddTaskAction): Task[] => {

    switch (action.type) {
        case TASK_ADDED:
            return [].concat(state).concat(new Task(action.payload.taskName, action.payload.dueDate));
        default:
            return state;
    }
};
