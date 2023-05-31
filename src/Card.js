import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css';
import React,{props} from 'react';
function BasicExample(props) {
  return (
    <>
    <div className="card-container">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <h6>{props.heading}</h6>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary">Watch Now</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default BasicExample;