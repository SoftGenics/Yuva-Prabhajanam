import React from 'react'
import './Enquiry.css'
import { Col, Container, Form, Row } from 'react-bootstrap'
const Enquiry = () => {
  return (
    <div>
      <Container className='join-us'>
        <button> JOIN US </button>
      </Container>
      <Container className='d-flex justify-content-center form-container'>
      <Form className='mt-5'>
        <Row>
          <Col sm={6} md={6}>
          <Form.Group className="mb-3" >
          <Form.Label>అబ్యర్ది పేరు <span>:</span></Form.Label>
          <Form.Control type="text" placeholder="పేరు" />
        </Form.Group>
          </Col>
          <Col sm={6} md={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ఫోన్ నెంబర్ <span>:</span></Form.Label>
          <Form.Control type="tel" placeholder="నెంబర్" />
        </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ఇమెయిల్ <span>:</span></Form.Label>
          <Form.Control type="email" placeholder="ఇమెయిల్" />
        </Form.Group>
          </Col>
          <Col sm={6} md={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>పిన్ నెంబర్ :</Form.Label>
          <Form.Control type="tel" placeholder="టౌన్/సిటీ" />
        </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={4} md={4}>
          <Form.Label>టౌన్/సిటీ <span>:</span></Form.Label>
          <Form.Select aria-label="Default select example">
            <option>టౌన్/సిటీ/Select City</option>
            <option value="Visakhapatnam">Visakhapatnam</option>
            <option value="Vijayawada">Vijayawada</option>
            <option value="Guntur">Guntur</option>
            <option value="Nellore">Nellore</option>
            <option value="Kurnool">Kurnool</option>
            <option value="Kakinada">Kakinada</option>
            <option value="Rajamahendravaram">Rajamahendravaram</option>
            <option value="	Kadapa">	Kadapa</option>
            <option value="Tirupati">Tirupati</option>
            <option value="Anantapuram">Anantapuram</option>
            <option value="Vizianagaram">Vizianagaram</option>
            <option value="Eluru">Eluru</option>
            <option value="Nandyal">Nandyal</option>
            <option value="Ongole">Ongole</option>
            <option value="Adoni">Adoni</option>
            <option value="Madanapalle">Madanapalle</option>
            <option value="Machilipatnam">Machilipatnam</option>
            <option value="Tenali">Tenali</option>
            <option value="Proddatur">Proddatur</option>
            <option value="Chittoor">Chittoor</option>
            <option value="Hindupur">Hindupur</option>
            <option value="Srikakulam">Srikakulam</option>
            <option value="	Bhimavaram">Bhimavaram</option>
            <option value="Tadepalligudem">Tadepalligudem</option>
            <option value="Guntakal">Guntakal</option>
            <option value="Dharmavaram">Dharmavaram</option>
            <option value="Gudivada">Gudivada</option>
            <option value="Narasaraopet">Narasaraopet</option>
            <option value="Kadiri">Kadiri</option>
            <option value="Tadipatri">Tadipatri</option>
            <option value="	Mangalagiri">	Mangalagiri</option>
            <option value="	Chilakaluripet">	Chilakaluripet</option>
          </Form.Select>
          </Col>
          <Col sm={4} md={4}>
          <Form.Label>జిల్లా <span>:</span></Form.Label>
          <Form.Select aria-label="Default select example">
            <option>టౌన్/సిటీ/ Select District</option>
            <option value="Visakhapatnam">Visakhapatnam</option>
            <option value="NTR">NTR</option>
            <option value="Guntur">Guntur</option>
            <option value="SPSR Nellore">SPSR Nellore</option>
            <option value="Kurnool">Kurnool</option>
            <option value="Kakinada">Kakinada</option>
            <option value="East Godavari">East Godavari</option>
            <option value="YSR">YSR</option>
            <option value="Tirupati">Tirupati</option>
            <option value="Anantapuram">Anantapuram</option>
            <option value="Vizianagaram">Vizianagaram</option>
            <option value="Eluru">Eluru</option>
            <option value="Nandyal">Nandyal</option>
            <option value="Prakasam">Prakasam	</option>
            <option value="Madanapalle">Madanapalle</option>
            <option value="Machilipatnam">Machilipatnam</option>
            <option value="Tenali">Tenali</option>
            <option value="Chittoor">Chittoor</option>
            <option value="Sri Sathya Sai">Sri Sathya Sai</option>
            <option value="Srikakulam">Srikakulam</option>
            <option value="	West Godavari">West Godavari</option>
            <option value="Tadepalligudem">Tadepalligudem</option>
            <option value="Guntakal">Guntakal</option>
            <option value="Dharmavaram">Dharmavaram</option>
            <option value="Krishna">Krishna</option>
            <option value="Palnadu">Palnadu</option>
            <option value="Kadiri">Kadiri</option>
            <option value="	Chilakaluripet">	Chilakaluripet</option>
          </Form.Select>
          </Col>
          <Col sm={4} md={4}>
          <Form.Label>మీ నాయకత్వ స్థాయి <span>:</span></Form.Label>
          <Form.Select aria-label="Default select example">
            <option>గ్రామం: </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>మీ గురించి క్లుప్తంగా <span>:</span></Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <button className='btn btn-danger'>Submit</button>
          </Col>
        </Row>
        </Form>
      </Container>
    </div>
  )
}

export default Enquiry