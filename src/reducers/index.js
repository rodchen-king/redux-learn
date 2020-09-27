import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// export default combineReducers({
//   todos,
//   visibilityFilter,
//   name: (preState = "", action) => {return preState}
// })

export default function(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    name: ((preState = "", action) => {return preState})(state.name, action)
  }
}