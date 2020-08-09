import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare  from "redux-thunk"

import appReducer from "./app-reducer";
import itemsReducer from "./item-reducer";
import {reducer as formReducer} from 'redux-form'



const reducers = combineReducers({
    items:itemsReducer,
    app:appReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;