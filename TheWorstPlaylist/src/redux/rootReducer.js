import songReducer from "./reducers/songReducer";

export default function rootReducer(state = {}, action) {
  // always return a new object for the root state
  return {
    todos: songReducer(state.songs, action),

  }
}