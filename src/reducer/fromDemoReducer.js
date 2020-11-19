export const fromDemoReducer = {
  fromDemoInputReducer: (state, action) => {
    switch (action.type) {
      case "changeValue":
        return action.newValue;
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
