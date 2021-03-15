import { actions } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      const check = state.myList.filter(
        (item) => item.id === action.payload.id
      );
      if (check.length > 0) {
        return { ...state };
      }
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };

    case actions.removeFavorite:
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };

    case actions.loginRequest:
      return {
        ...state,
        loggedIn: action.payload,
      };

    case actions.logoutRequest:
      return {
        ...state,
        loggedIn: action.payload,
      };

    case actions.registerRequest:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case actions.getVideoSource:
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      };

    default:
      return state;
  }
};

export default reducer;
