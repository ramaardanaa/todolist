import React from 'react'
import {useSelector} from 'react-redux'
import {Container, Row, Spinner} from 'react-bootstrap'
import TodoCard from '../components/TodoCard'
export default function Home(){

  const todos = useSelector((state) => state.todoReducer.todos)
  const loading = useSelector((state) => state.todoReducer.loading)
  const doneTodos = todos.filter(todo =>(todo.status === 1))
  const notDoneTodos =  todos.filter(todo => (todo.status === 0)) 
  
  
  
  return(
    <Container>
      <h1>On Going</h1>
      <hr/>
      <Row>
        {notDoneTodos.map(todo => (
          <TodoCard todo={todo} key={todo.id}/>
        ))}
      </Row>

      <h1>Done</h1>
      <hr/>
      <Row>
        {doneTodos.map(todo => (
          <TodoCard todo={todo} key={todo.id}/>
        ))}
      </Row>
    </Container>
  )
}