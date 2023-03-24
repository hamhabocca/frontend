import { combineReducers } from "redux";
import countReducer from "./CountModule";

const rootReducer = combineReducers({
    countReducer
});

export default rootReducer;