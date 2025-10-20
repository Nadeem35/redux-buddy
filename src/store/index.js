// its not mandatory that the file name iside the store should be with index.js name
import { createStore } from "redux";

// Step-1
const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

// Step-3
const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { counter: store.counter - 1, store: store.privacy };
  } else if (action.type === "ADD") {
    return { ...store, counter: store.counter + Number(action.payload.num) };
  } else if (action.type === "SUBTRACT") {
    return { ...store, counter: store.counter - Number(action.payload.num) };
  } else if (action.type === "PRIVACY_TOGGLE") {
    return { ...store, privacy: !store.privacy };
  }

  console.log("Action Received", action);
  return store;
};

// Step-2
const counterStore = createStore(counterReducer);

export default counterStore;
