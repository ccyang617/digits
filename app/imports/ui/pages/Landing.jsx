import React from 'react';
import { PeopleFill, FileEarmarkTextFill, Calendar2CheckFill } from 'react-bootstrap-icons';
import { Col, Container, Image, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" className="py-3">
    <Row className="align-middle text-center">
      <Col>
        <PeopleFill size={100} />
        <h4 className="body-text">This address book enables any number of users to register and save their business contacts. You can only see the contacts you have created.</h4>
      </Col>

      <Col>
        <FileEarmarkTextFill size={100} />
        <h4 className="body-text">For each contact, you can save their name, address, and phone number.</h4>
      </Col>
      <Col>
        <Calendar2CheckFill size={100} />
        <h4 className="body-text">Each time you make contact with a contact, you can write a note that summarizes the conversation. This note is saved along with a timestamp with the contact.</h4>
      </Col>

    </Row>
  </Container>
);

export default Landing;
