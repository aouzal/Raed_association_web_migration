import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducer";


function configureStore(
    //initial state
    ) {
      
  return createStore(rootReducer, applyMiddleware(reduxThunk));
}
export default configureStore;