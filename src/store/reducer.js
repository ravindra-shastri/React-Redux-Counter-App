import { createStore } from 'redux';


function reducer(state = { value: 0, step: 1, maxvalue: Infinity }, action) {
  switch (action.type) {
    case "increment":
      if (state.value + state.step > state.maxvalue) return { ...state }
      return { ...state, value: state.value + state.step };
    case "decrement":
      return { ...state, value: state.value - state.step };
    case "changeStep":
      return { ...state, step: action.payload };
    case "changemaxvalue":
      return { ...state, maxvalue: action.payload };
    case "reset":
      return { ...state, value: 0 };
    default:
      return state;
  }
}

export let store = createStore(reducer);

