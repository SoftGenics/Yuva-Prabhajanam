import React from 'react'
import { Container } from 'react-bootstrap'
const Footer = () => {
  return (
    <div >
      <Container fluid className='mt-5 ' style={{height:'4vh', backgroundColor:'rgb(204, 202, 202)'}}>
        
       <p className='text-center mt-3 text-dark text-bold'>Design and Seo By <a href='https://www.softgenics.in' style={{color:'blue'}}>SoftGenics</a></p>
      </Container>
    </div>
  )
}

export default Footer