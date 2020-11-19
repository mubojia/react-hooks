import { colorsReducer } from "./colorsReducer";
import { reducerDemo } from "./reducerDemo";
import { fromDemoReducer } from "./fromDemoReducer";

const Reducer = Object.assign(colorsReducer, reducerDemo, fromDemoReducer);

export default Reducer;
