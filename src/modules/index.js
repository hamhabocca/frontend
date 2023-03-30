import { combineReducers } from "redux";
import countReducer from "./CountModule";
import addressReducer from "./AddressModule";
import modalsReducer from "./ModalsModule";

const rootReducer = combineReducers({
    countReducer, addressReducer, modalsReducer
});

export default rootReducer;
