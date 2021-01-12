import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Container, Row, Spinner} from 'react-bootstrap'
import {fetchTodo} from '../store/action/todoAction'
import TodoCard from '../components/TodoCard'
export default function Home(){
  const todos = useSelector((state) => state.todoReducer.todos)
  const loading = useSelector((state) => state.todoReducer.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodo())
  },[dispatch])
  return(
    <Container>
      <h1>Hello world</h1>
      <Row>
        {todos.map(todo => (
          <TodoCard todo={todo} key={todo.id}/>
        ))}
      </Row>
    </Container>
  )
}