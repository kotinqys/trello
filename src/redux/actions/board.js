export const createBoard = (text) => ({
    type: 'SET_BOARD',
    payload:text
})

export const deleteBoard = (id) => ({
    type: 'DELETE_BOARD',
    id
})

export const setListToBoard = (index,text) => ({
    type: 'SET_LIST_TO_BOARD',
    id:index,
    payload: text
})

export const setTaskToList = (text,mainId,id) => ({
    type: 'SET_TASK_TO_LIST',
    payload: text,
    mainId,
    id
})

export const deleteList = (id,mainId) => ({
    type: 'DELETE_LIST',
    id,
    mainId
})


export const deleteTask = (mainId,id,taskId) => ({
    type: 'DELETE_TASK',
    mainId,
    id,
    taskId
})




