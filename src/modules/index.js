import { combineReducers } from "redux";
import countReducer from "./CountModule";
import addressReducer from "./AddressModule";
import modalsReducer from "./ModalsModule";
import qnaReducer from "./QnaModule";

const rootReducer = combineReducers({
    countReducer, addressReducer, modalsReducer,qnaReducer
});

export default rootReducer;
