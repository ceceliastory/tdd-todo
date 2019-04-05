export const TASK_ADDED = "TASK_ADDED";

export interface AddTaskAction {
    type: typeof TASK_ADDED
    payload: {
        taskName: string
        dueDate: string
    }
}

export const addTask = (taskName: string, dueDate: string): AddTaskAction => {
    return {
        type: TASK_ADDED,
        payload: {
            taskName: taskName,
            dueDate: dueDate
        }
    }
};