import React from 'react'
import './Cards.css'
import { Card, Container, Row, Col } from 'react-bootstrap'
export const Cards = () => {
  return (
    <div className='cards-container'>
      <Container >
        <Row className='row-first'>
          <Card>
            <Card.Img src='images/telugu-thalli.jpg' alt='teleguthali' />
          </Card>
        </Row>
        <Row>
          <Col sm={4} className='card-wrapper'>
            <Card>
              <Card.Img src='images/allurifinal.jpg' />
              <Card.Title>Alluri setha Rama raju</Card.Title>
            </Card>
          </Col>
          <Col sm={4} className='card-wrapper'>
            <Card>
              <Card.Img src='images/apj.jpg' />
              <Card.Title>A p j Abdul kalam</Card.Title>
            </Card>
          </Col>
          <Col sm={4} className='card-wrapper'>
            <Card>
              <Card.Img src='images/srdhaar.jpg' />
              <Card.Title>Sardar Vallabhbhai Patel</Card.Title>
            </Card>
          </Col>


        </Row>
        <Row>
        <Col sm={4} className='card-wrapper'>
            <Card>
              <Card.Img src='images/sreeramulu.jpg' />
              <Card.Title>Potti sriramulu</Card.Title>
            </Card>
          </Col>
        <Col sm={4} className='card-wrapper'>
            <Card>
              <Card.Img src='images/subhash.jpg' />
              <Card.Title>Subhash Chandra Bose</Card.Title>
            </Card>
          </Col>
          <Col sm={4} className='card-wrapper'>
            <Card>
              <Card.Img src='images/rudramadevi.jpg' />
              <Card.Title>Jhansi Laxmi bai</Card.Title>
            </Card>
          </Col>
        </Row>
        <Row className='last-row'>
          <Card>
            <Card.Title>దశాబ్దాల పాటు ఆంధ్రప్రదేశ్ రాష్ట్రానికి పట్టిన కుటుంబ రాజకీయాల గ్రహణాల చెర నుంచి విముక్తి కలిగించడానికి <span>??</span></Card.Title>
            <Card.Title>ఆంధ్రప్రదేశ్ రాష్ట్ర దశ, దిశ మార్చే ఒక సంచలన యువశక్తి బృందంలో మీరు భాగస్వాములు కావాలనుకుంటున్నారా <span>??</span></Card.Title>
            <Card.Title>మీరు పుట్టిన గ్రామానికి, జిల్లాకి, రాష్ట్రానికి అన్ని విధాలుగా అన్యాయం జరుగుతోందని భావిస్తున్నారా<span>??</span></Card.Title>
            <Card.Title>మీరు కొత్త తరం నాయకుడిగా ఎదగాలనుకుంటున్నారా <span>??</span></Card.Title>
            <Card.Title>మీ గ్రామ, జిల్లా, రాష్ట్ర అభివృద్దిలో భాగస్వాములు కావాలనుకుంటున్నారా<span>??</span></Card.Title>
          </Card>
        </Row>
      </Container>
    </div>
  )
}
