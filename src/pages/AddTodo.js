import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Container, Row, Col,Form,Button } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import swal from 'sweetalert'

export default function AddTodo(){
  let today = new Date();
  const dispatch = useDispatch()
  const history = useHistory()
  const todos = useSelector((state) => state.todoReducer.todos)
  const [inputForm, setInputForm] = useState({
    id: todos[todos.length-1].id + 1,
    title: '',
		description: '',
		status: 0,
		createdAt: `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()<10 ? "0":""}${today.getMinutes()}`
  })
  
  function onChange(event){
    let key = event.target.name
    let value = event.target.value
    setInputForm({
			...inputForm,
			[key]: value
		})
  }

  function onSubmit(event){
    event.preventDefault()
    dispatch({
      type: "CREATE_TODO",
      payload: inputForm
    })
    swal("Success", `Success add new todo!`, "success");
    history.push('/')
  }
  return(
    <>
      <Container className="mt-5 ml-5" fluid>
			<Row className="mt-3 justify-content-center">
				<Col lg={6} className="shadow p-5">
					<h1>Add New Todo</h1>
          <hr/>
					<Form onSubmit={onSubmit}>
						<Form.Group>
							<Form.Label>Title</Form.Label><br></br>
							<Form.Control name="title" onChange={onChange} type="text" placeholder="Enter title" />
						</Form.Group>
						<Form.Group>
							<Form.Label>Description</Form.Label><br></br>
							<Form.Control name="description" onChange={onChange} type="text" placeholder="Enter Description" />
						</Form.Group>
						<Button variant="info" type="submit">
							Add Todo
 	 					</Button>
					</Form>
				</Col>
			</Row>
		</Container>
    </>
  )
}