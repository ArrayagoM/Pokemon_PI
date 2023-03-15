import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//me conecto con  la extencion del navegador => redux devtools
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    //esta linea me sirve para hacer peticiones a la api
    )

export default store;