import React from 'react'
import {Accordion,Col,Row,Card,Button} from 'react-bootstrap'
import '../componentsstyle/faqSection.css'

function FaqSection({question,answer}) {
    return (
      <Accordion defaultActiveKey="1" >
      <Card id="card">              
          <Accordion.Toggle as={Card.Header} eventKey="0">            
                <p id="questionId">{question}</p>     
          </Accordion.Toggle>
          
      
        <Accordion.Collapse eventKey="0">
          <Card.Body><p id="answerId">{answer}</p></Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    )
}

export default FaqSection;
