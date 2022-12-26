import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import ServicesList from './ServicesList'

function ServiceListSinglePage() {
  return (
    <>
              <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section> 
    </>
  )
}

export default ServiceListSinglePage
