import fetchClient from "./fetchClient";

const boardApi = {
  create: () => fetchClient('boards', 'POST'),
  getAll: () => fetchClient('boards', 'GET'),
  updatePosition: (params) => fetchClient('boards', 'PUT', params),
  getOne: (id) => fetchClient(`boards/${id}`, 'GET'),
  delete: (id) => fetchClient(`boards/${id}`, 'DELETE'),
  update : (id,params) => fetchClient(`boards/${id}`,'PUT',params),
  getFavourites : () => fetchClient(`boards/favourites`),
  updateFavouritePosition : (params) => fetchClient(`boards/favourites`,'PUT',params)
};

export default boardApi;
