import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


function configureStore(
    //initial state
    ) {
      
  return createStore(rootReducer,composeWithDevTools(
    applyMiddleware(reduxThunk),
    // other store enhancers if any
  ));
}
export default configureStore;