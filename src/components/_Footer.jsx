import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={4} sm={4} md={4} className='text-center py-3'>
            <h6 className="text-primary"><b>獲取幫助</b></h6>
            <small><a className="text-primary" style={{ textDecoration: "none" }} href="/faq">常見問題</a><br />
              <a className="text-primary" style={{ textDecoration: "none" }} href="/contactus">聯絡我們</a></small>
          </Col>
          <Col xs={4} sm={4} md={4} className='text-center py-3'>
            <h6 className="text-primary"><b>關注我們</b></h6>
            <p className="text-primary"><i className="fa-brands fa-square-facebook"></i>&nbsp;
              <i className="fa-brands fa-square-instagram"></i></p>
          </Col>
          <Col xs={4} sm={4} md={4} className='text-center py-3'>
            <h6 className="text-primary"><b>付款方式</b></h6>
            <p className="text-primary"><i className="fa-brands fa-cc-visa"></i>&nbsp;
              <i className="fa-brands fa-cc-mastercard"></i>&nbsp;
              <i className="fa-brands fa-cc-paypal"></i></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer