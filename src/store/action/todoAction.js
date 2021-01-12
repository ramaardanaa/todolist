export function fetchTodo() {
  return (dispatch) => {
    fetch('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "SET_TODO", payload: data })
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        dispatch({ type: "SET_LOADING", payload: false })
      })
  }
}