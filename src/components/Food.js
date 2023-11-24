import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const Food = (props) => {
  return (
    <div>
    <Card style={{ width: '18rem', marginTop: 30 }}>
      <Card.Img style={{maxHeight: 200}}variant="top" src={props.src} />
      <Card.Body>
        <Card.Title style={{textAlign: "center"}}>{props.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{textAlign: "center"}}>{props.price}</ListGroup.Item>
      </ListGroup>
    
    </Card>
    </div>
  )
}

export default Food