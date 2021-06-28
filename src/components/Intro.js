
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
                        <p id="subtitle">Covid-19 will reshape the world. We don't yet know when the crisis will end. But we can be sure that by the times it does,our world will look very different</p>
                    </Col>
                    <Col xs="12" md="6">
                    <div className="introImage">
                        <img src="https://i.ibb.co/ww8BXsC/Covid.png"/>
                    </div>
                    </Col>

                </Row>
                    
                        
                        
                    
                </div>
           </div> 
        
    )
}

export default Intro
