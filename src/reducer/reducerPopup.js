import {OPEN_POPUP, CLOSE_POPUP} from "../action/popup";

function popup(state={}, action) {
    switch (action && action.type) {
        case OPEN_POPUP:
            state = action.data;
            return {...state};
        case CLOSE_POPUP:
            state = {};
            return state;
        default:
            return state;
    }
}

export default popup;