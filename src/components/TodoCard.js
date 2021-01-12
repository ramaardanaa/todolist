import { Form, Card, Button, Col, Badge, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
export default function TodoCard(props) {
  const { todo } = props
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              <Form.Label>Title</Form.Label>
              <Form.Control  type="email"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Delete
      </Button>
          <Button variant="primary" onClick={handleClose}>
            Update
      </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}