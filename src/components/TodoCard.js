import { Form, Card, Button, Col, Badge, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'

export default function TodoCard(props) {
  const { todo } = props
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [inputForm, setInputForm] = useState({
    id: todo.id,
    title: todo.title,
    description: todo.description,
    status: todo.status,
    createdAt: todo.createdAt
  })
  
  function handleDelete() {
    if (todo.status === 1) {
      swal("Error", `Cannot delete todo with status done !`, "error");
    } else {
      dispatch({
        type: "DELETE_TODO",
        payload: todo.id
      })
      swal("Success", `Success delete todo with id ${todo.id} !`, "success");
      setShow(false)
    }
  }

  function handleUpdate() {
    dispatch({
      type:"UPDATE_TODO",
      payload: inputForm
    })
    swal("Success", `Success update todo with id ${todo.id} !`, "success");
    setShow(false)
  }
  function onChange(event) {
    let key = event.target.name
    let value = event.target.value
    if(key === "status"){
      value = Number(value)
    }
    setInputForm({
      ...inputForm,
      [key]: value
    })
  }
  return (
    <>
      <Col lg="4" className="p-3">
        <Card>
          <Card.Header as="h5">
            {todo.title}
          </Card.Header>
          <Card.Body>
            {todo.status === 1 ? <Badge pill variant="success">Done</Badge> : <Badge pill variant="danger">Not Done</Badge>}
            <Card.Text>
              {todo.description}
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>Details</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{todo.createdAt}</small>
          </Card.Footer>
        </Card>
      </Col>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label><br></br>
              <Form.Control name="title" onChange={onChange} value={inputForm.title} type="text" placeholder="Enter title" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label><br></br>
              <Form.Control name="description" onChange={onChange} type="text" value={inputForm.description} placeholder="Enter Description" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Example select</Form.Label>
              <Form.Control as="select" name="status" value={inputForm.status} onChange={onChange}>
                <option value="1">Done</option>
                <option value="0">Not Done</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            Delete
      </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
      </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}