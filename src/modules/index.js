import { combineReducers } from "redux";
import countReducer from "./CountModule";
import addressReducer from "./AddressModule";
import modalsReducer from "./ModalsModule";
import memberReducer from "./MemberModule";
import rallyReducer from "./RallyModule";
import participateReducer from "./ParticipateModule";
import reviewReducer from "./ReviewModule";
import qnaReducer from "./QnaModule";

const rootReducer = combineReducers({
    countReducer, addressReducer, modalsReducer, reviewReducer, qnaReducer,
    rallyReducer, participateReducer, memberReducer
});

export default rootReducer;
