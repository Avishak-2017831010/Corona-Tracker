import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card} from 'react-bootstrap';
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
              <Card className="infoboxCard">
              <Card.Img className="cardImage" src={imagesrc} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title><p className="cardTitle">{title}</p></Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default InfoBox
