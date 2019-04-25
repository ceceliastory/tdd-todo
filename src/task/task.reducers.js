import {TASK_ADDED} from "./task.actions";

export const tasksReducer = (state = [], action) => {

    switch (action.type) {
        case TASK_ADDED:
            return [].concat(state).concat({name: action.payload.taskName, dueDate: action.payload.dueDate});
        default:
            return state;
    }
};
