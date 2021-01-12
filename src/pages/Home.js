import React from 'react'
import {useSelector} from 'react-redux'
import {Container, Row, Spinner} from 'react-bootstrap'
import TodoCard from '../components/TodoCard'
export default function Home(){

  const todos = useSelector((state) => state.todoReducer.todos)
  const loading = useSelector((state) => state.todoReducer.loading)

  
  
  
  return(
    <Container>
      <h1>On Going</h1>
      <hr/>
      <Row>
        {todos.map(todo => (
          todo.status === 0 ?<TodoCard todo={todo} key={todo.id}/>: ""
        ))}
      </Row>

      <h1>Done</h1>
      <hr/>
      <Row>
        {todos.map(todo => (
          todo.status === 1 ?<TodoCard todo={todo} key={todo.id}/>: ""
        ))}
      </Row>
    </Container>
  )
}