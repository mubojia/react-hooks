import { colorsReducer } from "./colorsReducer";
import { reducerDemo } from "./reducerDemo";
import { fromDemoReducer } from "./fromDemoReducer";
import { loginReducer } from "./loginReducer";

const Reducer = Object.assign(
  colorsReducer,
  reducerDemo,
  fromDemoReducer,
  loginReducer
);

export default Reducer;
