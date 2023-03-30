import { combineReducers } from "redux";
import countReducer from "./CountModule";
import addressReducer from "./AddressModule";

const rootReducer = combineReducers({
    countReducer, addressReducer
});

export default rootReducer;
