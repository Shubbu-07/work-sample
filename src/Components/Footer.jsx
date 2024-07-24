import React from 'react'
import {Row, Col, Container, Form, Button, InputGroup} from 'react-bootstrap';
import '../Style.css';
import WebLogo from '../Assets/Site-Logo.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col md={3}>
          <div className="footer-logo">
            <img src={WebLogo} alt="" />
            <p className=''>By effectively conveying our commitment to helping others and delivering value, we can establish trust and credibility with our clients</p>
          </div>
          </Col>
          <Col md={3}>
          <div className="footer-links">
            <h5>Useful Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">Our Team</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">About Us</a></li>
            </ul>
          </div>
          </Col>
          <Col md={3}>
          <div className="footer-contact">
            <h5>Contact</h5>
            <p>Head Office :- Pune, Maharashtra Branch Office :- Florida, USA</p>
              <p>info@axiomtechsolutions.in</p>
              <p>(+91) 93702 56247</p>
          </div>
          </Col>
          <Col md={3}>
          <div className="footer-signup">
            <h5>Sign Up</h5>
            <p>Keep me up to date with content, updates, and offers from Phlox</p>
          </div>
          <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter your Email Address"
          aria-label="Recipient's username"
        />
        <Button className='submit-button'>
          SUBMIT
        </Button>
      </InputGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
