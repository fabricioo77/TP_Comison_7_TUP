import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../css/Skill.css"

const Skill = () => {
  return (
    <>
   
      <h2>Skill</h2>
  
        <div className="contenedor">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>React</Card.Title>
        <Card.Text>
         Curso de react programacion 4
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
        </>
  )
}

export default Skill
