import {combineReducers} from "redux";
import cards from "./reducerCards";
import popup from "./reducerPopup";

const reduserApp = combineReducers({
    cards,
    popup
});

export default reduserApp;
