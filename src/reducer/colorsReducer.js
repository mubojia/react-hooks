export const  colorsReducer = {
    colorsReducer: (state, action)=>{
        switch(action.type){
            case "UPDATE_COLOR":
                return action.color;
            default:
                return state;
        }
    },
    colorsReducer02: (state, action) => {
        switch(action.type){
            case "UPDATE_COLOR":
                return action.color;
            default:
                return state;
        }
    }
}