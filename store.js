import { createStore, applyMiddleware,compose } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


function configureStore(
    //initial state
    ) {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(reduxThunk),
  // other store enhancers if any
);
return createStore(rootReducer  , enhancer);

}
export default configureStore;