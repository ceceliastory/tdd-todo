export const TASK_ADDED = "TASK_ADDED";

export const addTask = (taskName, dueDate) => {
    return {
        type: TASK_ADDED,
        payload: {
            taskName: taskName,
            dueDate: dueDate
        }
    }
};