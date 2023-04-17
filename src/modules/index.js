import { combineReducers } from "redux";
import countReducer from "./CountModule";
import addressReducer from "./AddressModule";
import modalsReducer from "./ModalsModule";
import rallyReducer from "./RallyModule";
import participateReducer from "./ParticipateModule";

const rootReducer = combineReducers({
    countReducer, addressReducer, modalsReducer,
    rallyReducer, participateReducer
});

export default rootReducer;
