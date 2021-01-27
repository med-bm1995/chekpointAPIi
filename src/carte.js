import React from "react";
import { Card,ListGroup } from 'react-bootstrap';
function carte({users}) {
  return (
    <Card style={{ width: '18rem' ,margin:'20px',display:"-webkit-inline-flex",justifyContent:"space-between"}}>
  <Card.Header>Name :{users.name}</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Phone :    {users.phone}</ListGroup.Item>
    <ListGroup.Item>Email :    {users.email}</ListGroup.Item>
    <ListGroup.Item>Website:   {users.website}</ListGroup.Item>
  </ListGroup>
</Card>
  );
}

export default carte;
