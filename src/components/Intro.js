
import React from 'react'
import '../componentsstyle/Intro.css'
import { Container, Row, Col,Card } from 'react-bootstrap';

function Intro() {
    return (
        <div>
           <div className="intro">
            
                <Row>
                
                    <Col xs="12" md="6" md={{offset: 1}} id="introLeft">
                        <p id="title">Some Prevention Can Save The Whole World</p>
                        <p id="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus ullam id aliquam excepturi exercitationem provident repellat distinctio consequatur quidem cumque non inventore cum ratione, hic commodi architecto magnam cupiditate dolorum!</p>
                    </Col>
                    <Col xs="12" md="6">
                    <div className="introImage">
                        <img src="https://i.ibb.co/RYL3RqN/Untitled-design-1.png"/>
                    </div>
                    </Col>

                </Row>
                    
                        
                        
                    
                </div>
           </div> 
        
    )
}

export default Intro
