import React from 'react'
import './Header.css'
import Marquee from "react-fast-marquee";
import { Container, Row, Col } from 'react-bootstrap'
const Header = () => {
  return (
    <div>
      <Container fluid className='Header'>
        <Row>
          <Col md={3} className='Header-col-1'>
            <img src='images/logo.jpg' alt='logo'/>
          </Col>
          <Col md={9} className='Header-col-2'>
            <h2>YUVA PRABHANJANAM</h2>
          </Col>
        </Row>
      </Container>
      <Container fluid className='d-flex sec-header' >
        <h5 >Join Us</h5>
      <Marquee gradient={false} speed={100} style={{marginLeft:'0.5rem'}}>
      <span style={{color:'red', fontWeight:'550'}}>మీరు  పుట్టిన  గ్రామానికి,  జిల్లాకి,  రాష్ట్రానికి  అన్ని  విధాలుగా  అన్యాయం  జరుగుతోందని  భావిస్తున్నారా</span>
      </Marquee>
      </Container>
    </div>
  )
}

export default Header