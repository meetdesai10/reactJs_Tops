import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { currentIndex } from './Services'
import { cardData } from '../../ServicePageData';
export default function BuyNow() {
  console.log(currentIndex);
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img src={cardData[currentIndex].imgsrc} />
      <Card.Body>
        <Card.Title>{cardData[currentIndex].courseName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">For More Info</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
