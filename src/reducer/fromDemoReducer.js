export const fromDemoReducer = {
  fromDemoInputReducer: (state, action) => {
    switch (action.type) {
      case "changeAccount":
        state.account = action.account;
        return state;
      case "changePassword":
        state.password = action.password;
        return state;
      default:
        return state;
    }
  },

  fromDemoSubmitReducer: (state, action) => {
    switch (action.type) {
      case "submitValue":
        return action.submitValue;
      default:
        return state;
    }
  },
};
