
import { combineReducers } from 'redux';
import apiData from './reducers/apiData';
import userData from './reducers/userData';

const rootReducer = combineReducers({
    apiData,
    userData
})

export default rootReducer