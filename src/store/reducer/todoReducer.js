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
    case "UPDATE_TODO":
      console.log("disinii")
      const indexTodo = state.todos.findIndex(el => el.id === action.payload.id)
      const updatedTodo = state.todos.slice(0,indexTodo).concat(action.payload).concat(state.todos.slice(indexTodo+1))
      return {...state, todos: updatedTodo} 
    default:
      return state
  }
}