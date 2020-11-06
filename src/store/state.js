import {createStore, compose} from "redux";
import reducerApp from "../reducer/reducer";

const configureStore = function () {
    return createStore(
        reducerApp,
        compose(
            (window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__(): "undefined")
        )
    )
};

export default configureStore;

