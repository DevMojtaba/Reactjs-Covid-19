import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./../reducers/index";
import { getCovidData } from "./../actions/index";

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
    reducers,
    compose(applyMiddleware(thunk), reduxDevTools)
);

store.dispatch(getCovidData());
