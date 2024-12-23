import fetchClient from "./fetchClient";

const taskApi = {
    create : (boardId,params) => fetchClient(`boards/${boardId}/tasks`,'POST',  params),
    updatePosition : (boardId, params) => fetchClient(`boards/${boardId}/tasks/update-position`,'PUT', params),
    delete : (boardId, taskId) => fetchClient(`boards/${boardId}/tasks/${taskId}`,'DELETE'),
    update : (boardId, taskId,params) => fetchClient(`boards/${boardId}/tasks/${taskId}`,'PUT',params)

}

export default taskApi;