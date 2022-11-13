import {combineReducers, legacy_createStore as createStore} from "redux";
import messageReducer from './message-reducer'
import addFieldMessageReducer from './addFieldMessage-reducer'
import pageHeadReducer from './pageHead-reducer'
import pageElementsReducer from './pageElements-reducer'
import usersReducer from './users-reducer'

let reducers = combineReducers({
    messageBlockArr: messageReducer,
    chatPage: addFieldMessageReducer,
    pageHead: pageHeadReducer,
    pageElements: pageElementsReducer,
    usersPage: usersReducer
});
let store = createStore(reducers)
export default store;