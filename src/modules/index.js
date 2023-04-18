import { combineReducers } from "redux";
import countReducer from "./CountModule";
import addressReducer from "./AddressModule";
import modalsReducer from "./ModalsModule";
import reviewReducer from "./ReviewModule";

const rootReducer = combineReducers({
    countReducer, addressReducer, modalsReducer, reviewReducer
});

export default rootReducer;
