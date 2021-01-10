import { createStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'

const saveToLocalStorage = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}


console.log('rootReducer------------------------------------', rootReducer);

const store = createStore(rootReducer, loadFromLocalStorage() , 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store; 