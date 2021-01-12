import {Card,Button,Col,Badge} from 'react-bootstrap'

export default function TodoCard(props) {
  const {todo} = props
  return (
    <Col lg="4" className="p-3">
    <Card>
      <Card.Header as="h5">
        {todo.title}
        
      </Card.Header>
      <Card.Body>
        {todo.status === 1? <Badge pill variant="success">Done</Badge> : <Badge pill variant="danger">Not Done</Badge>}
        <Card.Text>
          {todo.description}
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
    </Col>
  )
}