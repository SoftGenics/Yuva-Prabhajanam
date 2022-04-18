import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Hero.css'
const Hero = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="images/indiagateway.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>India Gate</h3>
            <p>12 February 1931</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="images/ap.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Andhra Pradesh Assembly</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="images/ap2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Andhra Pradesh Legislative Assembly</h3>
            <p>Andhra Pradesh Legislative Assembly/Founded
1956</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="images/fredom.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Freedom Fighters</h3>
            <p>on the historic date of 15th August 1947</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Hero