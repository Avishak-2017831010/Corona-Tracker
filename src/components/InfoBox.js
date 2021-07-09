import React from 'react'
import {Card,Row,Col} from 'react-bootstrap';
import '../componentsstyle/InfoBox.css'

function InfoBox({title,cases,total,imagesrc,active,...props}) {
    return (
        <div className={`InfoBox_info ${active && "selected--infobox"}`} onClick={props.onClick}>

              <Row>
                <Col>
                  <p className="cardTitle">{title}</p>                
                  <p id="newCases"> +{cases}</p>
                  <div id="cardbottom">
                    <p id="totalCases">Total: <br/>{total}</p> 
                  </div>  
                  <br/>
                   
                </Col>

                <Col>
                  <div className="cardIcon">
                      <img src={imagesrc}/>
                  </div>
                </Col>                
              </Row>              
        </div>
    )
}

export default InfoBox
