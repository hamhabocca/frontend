import { combineReducers } from "redux";
import countReducer from "./CountModule";
import addressReducer from "./AddressModule";
import modalsReducer from "./ModalsModule";
import reviewReducer from "./ReviewModule";
import qnaReducer from "./QnaModule";

const rootReducer = combineReducers({
    countReducer, addressReducer, modalsReducer, reviewReducer, qnaReducer
});

export default rootReducer;
