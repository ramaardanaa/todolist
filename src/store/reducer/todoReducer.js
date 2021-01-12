const initState = {
  todos: [],
  loading: true
}

export default function todoReducer(state = initState, action) {
  switch (action.type){
    case "SET_TODO":
      return {...state, todos: action.payload}
    case "SET_LOADING":
      return {...state, loading: action.payload}
    case "CREATE_TODO":
      const newTodo = state.todos.concat(action.payload)
      return {...state, todos: newTodo}
    case "DELETE_TODO":
      const deletedTodo = state.todos.filter(todo => todo.id !== action.payload)
      return {...state, todos: deletedTodo} 
    default:
      return state
  }
}