import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <Container fluid className="bg-dark text-white py-3">
      <Row>
        <Col md={6}>
          <p>&copy; 2023 Redux Store. All rights reserved.</p>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <a href="#" className="me-3 text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-white">
            Terms of Use
          </a>
        </Col>
      </Row>
    </Container>
  );
}
