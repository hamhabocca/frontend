import { combineReducers } from "redux";
import countReducer from "./CountModule";
import addressReducer from "./AddressModule";
import modalsReducer from "./ModalsModule";
import memberReducer from "./MemberModule";

const rootReducer = combineReducers({
    countReducer, addressReducer, modalsReducer, memberReducer
});

export default rootReducer;
