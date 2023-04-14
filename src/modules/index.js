import { combineReducers } from "redux";
import countReducer from "./CountModule";
import addressReducer from "./AddressModule";
import modalsReducer from "./ModalsModule";
import rallyReducer from "./RallyModule";

const rootReducer = combineReducers({
    countReducer, addressReducer, modalsReducer,
    rallyReducer
});

export default rootReducer;
