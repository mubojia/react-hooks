export const loginReducer = {
  loginReducer: (state, action) => {
    switch (action.type) {
      case "LOGIN":
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", JSON.stringify(action.payload.token));
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
          token: action.payload.token,
        };
      case "LOGOUT":
        localStorage.clear();
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
      default:
        return state;
    }
  },
  homeReducer: (state, action) => {
    switch (action.type) {
      case "FETCH_SONGS_REQUEST":
        return {
          ...state,
          isFetching: true,
          hasError: false,
        };
      case "FETCH_SONGS_SUCCESS":
        return {
          ...state,
          isFetching: false,
          songs: action.payload,
        };
      case "FETCH_SONGS_FAILURE":
        return {
          ...state,
          hasError: true,
          isFetching: false,
        };
      default:
        return state;
    }
  },
};
