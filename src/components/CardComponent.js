import React from 'react'
import {Card} from 'react-bootstrap'
import '../componentsstyle/CardComponent.css'

function CardComponent({image,title}) {
    return (
        <div>
        <Card id="cardcomponent">
        <Card.Img id="cardImage" variant="top" src={image} />
        <Card.Body>
          <Card.Title id="cardtitle">{title}</Card.Title>          
        </Card.Body>       
        </Card>
        </div>
    )
}

export default CardComponent
