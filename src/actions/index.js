export const actions = {
  setFavorite: 'SET_FAVORITE',
  removeFavorite: 'REMOVE_FAVORITE',
  loginRequest: 'LOGIN_REQUEST',
  logoutRequest: 'LOGOUT_REQUEST',
  registerRequest: 'REGISTER_REQUEST',
  getVideoSource: 'GET_VIDEO_SOURCE',
  searchRequest: 'SEARCH_REQUEST',
};

export const setFavorite = (payload) => ({
  type: actions.setFavorite,
  payload,
});

export const removeFavorite = (payload) => ({
  type: actions.removeFavorite,
  payload,
});

export const loginRequest = (payload) => ({
  type: actions.loginRequest,
  payload,
});

export const logoutRequest = (payload) => ({
  type: actions.logoutRequest,
  payload,
});

export const registerRequest = (payload) => ({
  type: actions.registerRequest,
  payload,
});

export const getVideoSource = (payload) => ({
  type: actions.getVideoSource,
  payload,
});

export const searchRequest = (payload) => ({
  type: actions.searchRequest,
  payload,
});
