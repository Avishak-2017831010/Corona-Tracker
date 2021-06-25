import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card,Row,Col} from 'react-bootstrap';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import '../componentsstyle/InfoBox.css'

function InfoBox({title,cases,total,imagesrc}) {
    return (
        <div className="InfoBox_info">                 
              <Row>

                <Col>
                <p className="cardTitle">{title}</p>                
                <p id="newCases"> +{cases}</p>  
                  <br/>
                <p id="totalCases">Total : {total}</p>  
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
